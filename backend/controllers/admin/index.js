const connection = require("../../database/connection");

exports.getAllAdmins = async() =>{
    let sql = 'SELECT * FROM admin';

    try {
        var [result, _] = await connection.execute(sql);
        console.log("This is other variable: ", _);
    }
    catch (error) {
        console.error(error);
    }

    return result;
}

exports.addAdmin = async (name) => {
    let sql = `INSERT INTO admin VALUES('${name}')`;

    try {
        var [result, _] = await connection.execute(sql);
        console.log("This is other variable: ", _);
    }
    catch (error) {
        console.error(error);
    }

    return result;
}
