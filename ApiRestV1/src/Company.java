public class Company {

    // Atributos
    String name;
    int idCompany;

    // Constructor
    public Company(String name, int idCompany) {
        this.name = name;
        this.idCompany = idCompany;
    }

    // Getters y Setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(int idCompany) {
        this.idCompany = idCompany;
    }

    // toString
    @Override
    public String toString() {
        return "Company{" + "name=" + name + ", idCompany=" + idCompany + '}';
    }

    // Método para agregar una compañía
    public void add(int idCompany) {
    }

    // Método para modificar una compañía
    public void modify(String columna, String valnuevo, String where) {
    }

    // Método para eliminar una compañía
    public void delete(int idCompany) {
    }


}
