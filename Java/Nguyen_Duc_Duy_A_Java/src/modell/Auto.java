package modell;

import java.util.UUID;

public class Auto extends Jarmu implements Comparable<Auto> {

    private UUID id;
    private String nap;

    public Auto(String rendszam, Minosites minosites) {
        this("hétfő", rendszam, minosites);
    }

    public Auto(String nap, String rendszam, Minosites minosites) {
        super(rendszam, minosites);
        this.nap = nap;
    }

    /**
     *
     * @param auto
     * @return
     */
    @Override
    public int compareTo(Auto auto) {
        String rendszam = super.getRendszam();
        return 0;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNap() {
        return nap;
    }

    public void setNap(String nap) {
        this.nap = nap;
    }

}
