public class User {

    // Atributos
    int idUser;
    String username;
    String password;

    // Constructor
public User( String username, String password) {

        this.username = username;
        this.password = password;
    }

    public User(String idUser) {
    }


    // Getters y Setters
    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // toString
    @Override
    public String toString() {
        return "User{" + "idUser=" + idUser + ", username=" + username + ", password=" + password + '}';
    }

    // Método para loguearse
    public void login(String username, String password) {

        }
    }


}


