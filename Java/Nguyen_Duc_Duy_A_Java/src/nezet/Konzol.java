package nezet;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Collections;
import modell.Auto;
import modell.Hajo;
import modell.Jarmu;
import modell.Kolcsonzo;
import modell.RendzsamComparator;

public class Konzol {
    private Kolcsonzo kolcsonzo;
    private ArrayList<Auto> autok;
    private ArrayList<Hajo> hajok;

    public Konzol() {
        kolcsonzo = new Kolcsonzo();
        autok = new ArrayList<>();
        for (Jarmu jarmu : kolcsonzo.getJarmuvek()) {
            if (jarmu instanceof Auto) {
                
            }
        }
    }
    
    public void feladatok(){
        jarmuvekKonzolon();
        JarmuvekFajlban();
        melyiknaponMelyikAuto();
    }

    private void jarmuvekKonzolon() {
        for (Jarmu jarmu : kolcsonzo.getJarmuvek()) {
            System.out.println("Jármű = " + jarmu);
        }
        Collections.sort(autok);
        kiir(autok);
    }

    private void JarmuvekFajlban() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("fajl"))){
            oos.writeObject(kolcsonzo);
        } catch (Exception e) {
        }
    }

    private void melyiknaponMelyikAuto() {
        
    
    }

    private void kiir(ArrayList<Auto> autok) {
    }
    
    
}
