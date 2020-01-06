let mysql = require('mysql');

module.exports = {
    execSQLQuery: (sqlQry, res) => {
        let connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'admin',
            database : 'mydb'
          });
     
      connection.query(sqlQry, function(error, results, fields){
          if(error) 
            res.json(error);
          else
            res.json(results);
          connection.end();
      });
    },
    selectProducts: 'SELECT * FROM product',
    selectProduct: 'SELECT * FROM product WHERE product.key=',
    deleteProduct: 'DELETE FROM product WHERE product.key=',
    createProduct: 'INSERT INTO product(name, value, qnt) VALUES',
    editProduct: (body, id) => {
      let query = 'UPDATE product SET product.name=';
      query += JSON.stringify(body.name);
      query += ', product.value=' + body.value;
      query += ', product.qnt=' + body.qnt;
      query += ' WHERE product.key = ' + id;
      return query;
    }
}
