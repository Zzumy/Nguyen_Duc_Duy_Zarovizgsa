package modell;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Kolcsonzo implements Serializable {

    private ArrayList<Jarmu> jarmuvek;

    public Kolcsonzo() {
        jarmuvek = new ArrayList<>();
        jarmuvek.add(new Auto("1-aut123", Jarmu.Minosites.KIVALO));
        jarmuvek.add(new Auto("Kedd", "2-aut123", Jarmu.Minosites.ATLAGOS));
        jarmuvek.add(new Hajo(4, "h-1", "1-haj123", Jarmu.Minosites.KIVALO));
        jarmuvek.add(new Hajo(2, "h-2", "2-haj123", Jarmu.Minosites.MEGFELELO));
    }

    public List<Jarmu> getJarmuvek() {
        return Collections.unmodifiableList(jarmuvek);
    }
    
    public void felvesz(Jarmu jarmu){
        jarmuvek.add(jarmu);
    }

}
