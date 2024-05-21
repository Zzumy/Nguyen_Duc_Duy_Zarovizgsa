package modell;

import java.io.Serializable;

public class Jarmu implements Serializable {

    public enum Minosites {
        KIVALO, ATLAGOS, MEGFELELO
    }
    private String rendszam;
    private Minosites minosites;

    public Jarmu(String rendszam, Minosites minosites) {
        setRendszam(rendszam);
        this.minosites = minosites;
    }

    public String getRendszam() {
        return rendszam;
    }

    public void setRendszam(String rendszam) {
        String ujRendzsam = "";
        if (!rendszam.contains("-")) {
            throw new RendszamExeption("A rendszám nem tartalmaz '-'(kötőjelet)!");
        } else if (rendszam.charAt(0) == '-') {
            char utolsoKarakter = 0;
            for (int i = 0; i < rendszam.length(); i++) {
                utolsoKarakter += rendszam.charAt(i);
            }
            ujRendzsam = utolsoKarakter + rendszam;
        }
        this.rendszam = ujRendzsam;
    }

    public Minosites getMinosites() {
        return minosites;
    }

    public void setMinosites(Minosites minosites) {
        this.minosites = minosites;
    }

}
