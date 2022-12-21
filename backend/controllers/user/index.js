const connection = require("../../database/connection");

exports.addUser = async (email, password, name, address, phone, city) => {
  try {
    let getBranchQuery = `SELECT ID FROM branch WHERE city = '${city}'`;
    var [branchId, _] = await connection.execute(getBranchQuery);

    let insertCustomer = `INSERT INTO customers (email, name, address, phone_no, branch_id)
        VALUES('${email}', '${name}', '${address}', '${phone}', '${branchId[0].ID}');`;

    var [isCustomerAdded, _] = await connection.execute(insertCustomer);

    if (isCustomerAdded) {
      let makeAccount = `INSERT INTO login (email, password, isAdmin) 
                            VALUES ('${email}', '${password}', ${false})`;

      var [isAccountMade, _] = await connection.execute(makeAccount);
    }
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
};


exports.loginUser = async (email, password) => {
  try {
   
    let loginQuery = `SELECT isAdmin FROM login WHERE email = '${email}' AND password = '${password}'`;

    var [exists, _] = await connection.execute(loginQuery);

    if (exists) {
     return exists;
    }
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
};
