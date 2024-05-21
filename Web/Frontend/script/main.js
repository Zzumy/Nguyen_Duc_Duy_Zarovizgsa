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

