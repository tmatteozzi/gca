public class Insured extends User {

    //Atributos
    int idInsured;
    String name;
    String lastName;
    String address;
    String phone;
    String nationality;

    //Constructor
    public Insured(int idInsured, String name, String lastName, String address, String nationality, String idUser) {
        super(idUser);
        this.idInsured = idInsured;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.nationality = nationality;

    }

//Getters y Setters

    public int getIdInsured() {
        return idInsured;
    }

    public void setIdInsured(int idInsured) {
        this.idInsured = idInsured;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getNationality() {
        return nationality;
    }

    ;

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    //toString
    @Override
    public String toString() {
        return "Insured{" + "idInsured=" + idInsured + ", name=" + name + ", lastName=" + lastName + ", address=" + address + ", phone=" + phone + ", nationality= " + nationality;
    }


//Metodo para agregar un cliente
    public void add(int idInsured, String name, String lastName, String address, String phone, String nationality){

    }

//Metodo para modificar un cliente
    public void modify(int idInsured, String name, String lastName, String address, String phone, String nationality){

    }

//Metodo para eliminar un cliente
    public void delete(int idInsured){

    }




}




