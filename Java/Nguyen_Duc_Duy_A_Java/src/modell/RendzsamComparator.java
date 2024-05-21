package modell;

public class RendzsamComparator implements Comparable<Auto> {

    public String compareTo(Auto o1, Auto o2) {
        int compare = o1.getRendszam().compareTo(o2.getRendszam());
        if (compare < 0) {
            return o1.getRendszam();
        } else {
            return o2.getRendszam();
        }
    }

    @Override
    public int compareTo(Auto o) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}
