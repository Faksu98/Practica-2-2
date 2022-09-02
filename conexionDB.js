const mysql = require("mysql");
require("dotenv").config();

const conexionDB = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,    
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
});

conexionDB.connect( function(error){
    if (error){
        throw error;
    }
    console.log("conexion fue realizada! :D");
});



conexionDB.query("SELECT * FROM platos", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("Mostrando Registros en la tabla: \n", resultado);
})


/*conexionDB.query("INSERT INTO platos(nombre, precio, con_oferta) VALUES ('Ensalada Cesar', 800, FALSE)", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("Insertando nuevo registro: \n", resultado);
})*/


/*conexionDB.query("UPDATE platos SET con_oferta = FALSE WHERE con_oferta = TRUE", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("Actualizamos la tabla: \n", resultado);
})*/

let sqlComando = "DELETE FROM platos WHERE id_plato=1"

conexionDB.query(sqlComando, function(error, resultado){
    if(error){
        throw error;
    }
    console.log("Eliminamos un registro: \n", resultado);
})


conexionDB.end(function(error){
    if(error){
        return console.log("error: "+error.message);
    }
    console.log("Conexion con base de datos cerrada");
});

