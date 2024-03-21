public class Coverage {

    int idCoverage;
    String name;


    //Constructor
    public Coverage(int idCoverage, String name) {
        this.idCoverage = idCoverage;
        this.name = name;
    }

    //Getters y Setters

    public int getIdCoverage() {
        return idCoverage;
    }

    public void setIdCoverage(int idCoverage) {
        this.idCoverage = idCoverage;
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
        return "Coverage{" + "idCoverage=" + idCoverage + ", name=" + name + '}';
    }

    //Metodo para agregar una cobertura

    public void add(int idCoverage) {
    }

    //Metodo para modificar una cobertura
    public void modify(String columna, String valnuevo, String where){

    }

    //Metodo para eliminar una cobertura
    public void delete(int idCoverage) {
    }


}
