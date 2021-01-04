
let Usuario = "admin";
let Contraseña = 1234;
switch (true) {
    case Usuario == "admin" && Contraseña == 1234:      //caso que  esta todo ok
        console.log("¡Bienvenido!");
        break;
    case Usuario == "admin" && Contraseña !== 1234:     //caso que  admin esta bien pero pone mal la contra
        console.log("Contraseña incorrecta");
            break;
    case Usuario !== "admin" && Contraseña == 1234:     //caso que admin esta mal pero contra esta bien
        console.log("Usuario incorrecto");
        break;
    default:
        console.log("Ingrese los datos pedidos!")   //caso todo mal 
        break;
}