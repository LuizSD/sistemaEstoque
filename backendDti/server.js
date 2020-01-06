let sqlCommands = require('./sqlCommands');
let dataFunctions = require('./datafunctions');
let express = require('express');
let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
app.use('/', router);

router.get('/products', (req, res) =>{
    sqlCommands.execSQLQuery(sqlCommands.selectProducts, res);
})


router.get('/products/:id', (req, res) =>{
    sqlCommands.execSQLQuery(sqlCommands.selectProduct + parseInt(req.params.id), res);
})

router.delete('/delete/:id', (req, res) =>{
  sqlCommands.execSQLQuery(sqlCommands.deleteProduct + parseInt(req.params.id), res);
})

router.post('/create', (req, res) =>{
  let body;
    if (req.body) {
      body = dataFunctions.getBodyProducts(req.body);
      sqlCommands.execSQLQuery(sqlCommands.createProduct + body, res);
    } else {
      res('POST ERROR');
    }
})

router.put('/edit/:id', (req, res) =>{
    sqlCommands.execSQLQuery(sqlCommands.editProduct(req.body, req.params.id), res);
})

app.listen(3000, function () {
  console.log('Server Running');
});