// const connection = require("../database/connection");



// const makeAdminTable = async()=>{

//     let sql = `CREATE TABLE user(
//                     id int primary key auto_increment,
//                     name varchar(128),
//                     age int,
//                     accountNumber double
//     )`;

//     let result;
//     try{
//         result = await connection.execute(sql);
//     }
//     catch(err){
//         console.log(err);
//         return err;
//     }
//     console.log("result in main function: ", result);
//     return result;
// }

// makeAdminTable().then((result)=>console.log("result in then: ", result)).catch((error)=>console.log("Error in catch: ", error));

const userSchema = `CREATE TABLE user(
     id int primary key auto_increment,
                     name varchar(128),
                     age int,
                    accountNumber double
)`

const loginTableSchema = `create table...`