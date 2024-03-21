public class Policy {

    int idPolicy;
    String startDate;
    String endDate;

    public Policy(int idPolicy, String startDate, String endDate) {
        this.idPolicy = idPolicy;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    //Getters y Setters
    public int getIdPolicy() {
        return idPolicy;
    }

    public void setIdPolicy(int idPolicy) {
        this.idPolicy = idPolicy;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    //toString
    @Override
    public String toString() {
        return "Policy{" + "idPolicy=" + idPolicy + ", startDate=" + startDate + ", endDate=" + endDate + '}';
    }


    //Metodo para agregar una poliza
    public void add(String startDate, String endDate, int idCoverage, int idCompany, int idLineInsurance){

    }

    //Metodo para modificar una poliza
    public void modify(String columna, String valnuevo, String where){

    }

    //Metodo para eliminar una poliza
    public void delete(int idPolicy){

    }

}
