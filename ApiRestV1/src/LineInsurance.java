public class LineInsurance {

    //Atributos
    int idLineInsurance;
    String name;

    //Constructor
    public LineInsurance(int idLineInsurance, String name) {
        this.idLineInsurance = idLineInsurance;
        this.name = name;
    }

    //Getters y Setters
    public int getIdLineInsurance() {
        return idLineInsurance;
    }

    public void setIdLineInsurance(int idLineInsurance) {
        this.idLineInsurance = idLineInsurance;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    //toString
    @Override
    public String toString() {
        return "LineInsurance{" + "idLineInsurance=" + idLineInsurance + ", name=" + name + '}';
    }

    //Metodo para agregar un ramo
    public void add(int idLineInsurance) {
    }

    //Metodo para modificar un ramo
    public void modify(String columna, String valnuevo, String where) {
    }

    //Metodo para eliminar un ramo
    public void delete(int idLineInsurance) {


    }



}
