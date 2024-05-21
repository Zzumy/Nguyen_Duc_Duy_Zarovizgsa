let baseUrl = "https://localhost:8000";

let temak = [];

function getTemak() {
  axios
    .get(baseUrl + "/tema")
    .then(function (serverResponse) {
      temak = serverResponse.data;
      let datalist = document.getElementById("temaNevek");
      temak.forEach(function (tema) {
        let option = document.createElement("option");
        option.value = tema.nev;
        datalist.appendChild(option);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
getTemak();








function getJarmuvek() {
  axios
    .get("https://localhost:44339/jarmutipusok")
    .then(function (serverResponse) {
      console.log(serverResponse);
      jarmuvek = serverResponse.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function getVonalak() {
  axios
    .get("https://localhost:44339/vonalak")
    .then(function (serverResponse) {
      console.log(serverResponse);
      vonalak = serverResponse.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function tervezes() {
  let honnanMegallo = document.getElementById("honnanMegallo").value;
  let hovaMegallo = document.getElementById("hovaMegallo").value;
  let honnanMegalloId = getIdByName(honnanMegallo);
  let hovaMegalloId = getIdByName(hovaMegallo);
  let datum = document
    .getElementById("date")
    .value.replace("-", ".")
    .replace("-", ".");
  let ido = document.getElementById("appt").value;
  let ejfeltolElteltPercek = convertTimeToMinutesFromMidnight(ido);
  let vehicle1 = document.getElementById("vehicle1").checked;
  let vehicle2 = document.getElementById("vehicle2").checked;
  let vehicle3 = document.getElementById("vehicle3").checked;

  let line1 = document.getElementById("line1").checked;
  let line2 = document.getElementById("line2").checked;
  let line3 = document.getElementById("line3").checked;
  let line4 = document.getElementById("line4").checked;
  let line5 = document.getElementById("line5").checked;

  let data = {
    honnan: honnanMegalloId,
    hova: hovaMegalloId,
    mikor: ejfeltolElteltPercek,
    indulas_e: true,
    datum: datum,
    jarmuKivetel: [],
    vonalKivetel: [],
  };
  axios
    .post("https://localhost:44339/dQw4w9WgXcQ/legkevesebb", data)
    .then(function (response) {
      console.log(response.data);
      if (response.data && response.data.length > 0) {
        let table = document.querySelector("#jarat table");
        if (table) {
          // Táblázat létrehozása vagy megtisztítása
          table.innerHTML = "";

          // Címsor hozzáadása
          let headerRow = document.createElement("tr");
          let headerCells = [
            "VONAL",
            "KEZDŐPONT",
            "UTICÉL",
            "INDUL",
            "UTAZÁSI IDŐ",
          ];
          headerCells.forEach(function (header) {
            let cell = document.createElement("th");
            cell.textContent = header;
            headerRow.appendChild(cell);
          });
          table.appendChild(headerRow);

          // Adatok hozzáadása
          response.data.forEach(function (entry) {
            let row = document.createElement("tr");
            displayDataInTableRow(entry, row);
            table.appendChild(row);
          });
        }
      }
    })
    .catch(function (error) {
      let table = document.querySelector("#jarat table");
      if (table) {
        table.innerHTML =
          "<tr class='error'><td colspan='4'>Nincs elérhető útvonal. Kérem próbáljon meg más útvonalat keresni!</td></tr>";
      }
      console.log(error);
    })
    .finally(function () {
      document.getElementById("jarat").style.display = "block";
    });
}

function getIdByName(name) {
  for (let i = 0; i < allomasok.length; i++) {
    if (allomasok[i].nev === name) {
      return allomasok[i].id;
    }
  }
  return null;
}

function getNameById(id) {
  for (let i = 0; i < allomasok.length; i++) {
    if (allomasok[i].id === id) {
      return allomasok[i].nev;
    }
  }
  return null;
}

function getIdByMegnevezes(megnevezes) {
  for (let i = 0; i < jarmuvek.length; i++) {
    if (jarmuvek[i].megnevezes === megnevezes) {
      return jarmuvek[i].id;
    }
  }
  return null;
}

function convertTimeToMinutesFromMidnight(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const minutesFromMidnight = hours * 60 + minutes;
  return minutesFromMidnight;
}

function getVonalNevById(id) {
  for (let i = 0; i < vonalak.length; i++) {
    if (vonalak[i].id === id) {
      return vonalak[i].vonalSzam;
    }
  }
  return null; // Ha nem található a megadott id-jú vonal, null-t ad vissza
}

function displayDataInTable(data) {
  let table = document.querySelector("#jarat table"); // Kiválasztjuk a táblázatot

  // Ellenőrizzük, hogy van-e táblázat, és hogy van-e adat
  if (!table || !data || data.length === 0) {
    console.log("No table or data available.");
    return;
  }

  // Adatok beillesztése a táblázatba
  let tableBody = table.querySelector("tbody");
  data.forEach(function (entry) {
    let row = document.createElement("tr");
    displayDataInTableRow(entry, row);
    tableBody.appendChild(row); // Sor hozzáadása a táblázathoz
  });
}

function displayDataInTableRow(entry, row) {
  // Vonal számának megjelenítése az első oszlopban
  let vonalSzamCell = document.createElement("td");
  vonalSzamCell.textContent = getVonalNevById(entry.vonal);
  row.appendChild(vonalSzamCell);

  // KezdoMegallo
  let kezdoMegalloCell = document.createElement("td");
  let kezdoMegalloId = entry.megallok[0].allomas; // Kezdő állomás az első elem
  let kezdoMegalloNev = getNameById(kezdoMegalloId); // Megkapjuk az állomás nevét
  kezdoMegalloCell.textContent = kezdoMegalloNev; // Beállítjuk a cella tartalmát a nevre
  row.appendChild(kezdoMegalloCell); // Adjuk hozzá a cellát a táblázathoz

  // VegsoMegallo
  let vegsoMegalloCell = document.createElement("td");
  let vegsoMegalloId = entry.megallok[entry.megallok.length - 1].allomas; // Utolsó állomás
  let vegsoMegalloNev = getNameById(vegsoMegalloId);
  vegsoMegalloCell.textContent = vegsoMegalloNev; // Beállítjuk a cella tartalmát a nevre
  row.appendChild(vegsoMegalloCell);

  // Nap és idő
  let mikorCell = document.createElement("td");
  let mikor = entry.nap + " " + percekToOraPerc(entry.indulasiIdo);
  mikorCell.textContent = mikor;
  row.appendChild(mikorCell);

  // Összesített idő megjelenítése
  let osszesitettIdoCell = document.createElement("td");
  let osszesitettIdo = osszesitettIdoPercek(entry.megallok); // Összesített idő kiszámítása
  osszesitettIdoCell.textContent = osszesitettIdo + "p"; // Megjelenítés perc formátumban
  row.appendChild(osszesitettIdoCell);

  // Eseménykezelő hozzáadása a sorhoz
  row.addEventListener("click", function () {
    // Ellenőrizzük, hogy a sor alatt már van-e megállók sor
    let stopRow = row.nextElementSibling;
    if (stopRow && stopRow.classList.contains("stops")) {
      // Megállók sor elrejtése, ha már létezik
      stopRow.remove();
    } else {
      // Ha nincs megállók sor, akkor létrehozzuk és megjelenítjük
      let stops = entry.megallok.map((megallo) => getNameById(megallo.allomas));
      let stopRow = document.createElement("tr");
      stopRow.classList.add("stops");
      let stopCell = document.createElement("td");
      stopCell.colSpan = 4; // Egy oszlopban legyen az összes megálló
      stopCell.textContent = stops.join(" ➔ ");
      stopRow.appendChild(stopCell);
      row.parentNode.insertBefore(stopRow, row.nextSibling);
    }
  });
}

// Összesített idő kiszámítása percekben
function osszesitettIdoPercek(megallok) {
  let osszeg = 0;
  megallok.forEach(function (megallo) {
    osszeg += megallo.hanyPerc;
  });
  return osszeg;
}

// Összesített idő kiszámítása percekben
function osszesitettIdoPercek(megallok) {
  let osszeg = 0;
  megallok.forEach(function (megallo) {
    osszeg += megallo.hanyPerc;
  });
  return osszeg;
}

function percekToOraPerc(percek) {
  let ora = Math.floor(percek / 60);
  let perc = percek % 60;
  // Hozzáadunk egy nullát, ha az óra vagy a perc egyjegyű
  ora = ora < 10 ? "0" + ora : ora;
  perc = perc < 10 ? "0" + perc : perc;
  return ora + ":" + perc;
}

getAllAllomas();
getJarmuvek();
getVonalak();
showLines();
