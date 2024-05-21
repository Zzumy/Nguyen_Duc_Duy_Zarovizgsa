package modell;

public class Hajo extends Jarmu {

    private int ferohely;
    private String nev;

    public Hajo(int ferohely, String nev, String rendszam, Minosites minosites) {
        super(rendszam, minosites);
        this.ferohely = ferohely;
        this.nev = nev;
    }

    public int getFerohely() {
        return ferohely;
    }

    public String getNev() {
        return nev;
    }

}
