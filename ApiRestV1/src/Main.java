import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Scanner scanner  = new Scanner(System.in);

        int seleccionMenu = 0;

        System.out.println("Por favor ingresar que desea hacer\n" +

                // Metodos del inicio de sesion
                "1 - Iniciar sesion\n" +

                // Metodos de Compania
                "2 - Agregar Compania\n" +
                "3 - Eliminar Compania\n" +
                "4 - Modificar Compania\n" +
                "5 - Obtener Companias\n" +

                // Metodos de Ramos

                "6 - Agregar Ramo\n" +
                "7 - Eliminar Ramo\n" +
                "8 - Modificar Ramo\n" +
                "9 - Obtener Ramos de compania\n" +

                // Metodos de productos
                "10 - Agregar Producto\n" +
                "11 - Eliminar Producto\n" +
                "12 - Modificar Producto\n" +
                "13 - Obtener Productos de ramo\n" +

                // Metodos de CLientes

                "14 - Agregar cliente\n" +
                "15 - Eliminar Cliente\n" +
                "16 - Modificar cliente\n" +
                "17 - Obtener Datos de un cliente\n" +

                // Metodos de Polizas

                "18 - Agregar Poliza\n" +
                "19 - Eliminar Poliza\n" +
                "20 - Modificar Poliza\n" +
                "21 - Buscar por numero de polizas\n" +
                "22 - Buscar poliza Por Cliente\n" +
                "23 - Buscar por ramo\n" +

                // Metodos genericos

                "24 - Recordar que sucede hoy\n" +
                "25 - Cargar Polizas\n" );

        seleccionMenu = scanner.nextInt();


        switch (seleccionMenu) {


            case 1:
                String user;
                String contrasena;
                System.out.println("por favor ingrese Usuario");
                usuario =  scanner.next();
                System.out.println("por favor ingrese Contraseña");
                contrasena =  scanner.next();

                if (User.login(usuario, contrasena)){
                    System.out.println("ingreso exitoso");
                } else {
                    System.out.println("Ingreso no exitoso");
                }
            break;

            case 2:
                String compania;
                System.out.println("Ingrese el nombre de la compania que desea agregar");
                compania = scanner.next();
                if ()

                }


        }


    }
}