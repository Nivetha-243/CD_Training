import mysql from "mysql2";

//created connection to database
// export function DatabaseCon(){
  export  const dbconnect = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database:'ApiDB',
        password:'Tamil@243#243'
    })
    dbconnect.promise().connect();
    
// }