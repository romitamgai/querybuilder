import express from 'express';
import EmployeeRoutes from './src/routes/EmployeeRoutes';
import DBUtils from './src/utils/DBUtils';

const connectionString = {host: 'localhost', user: 'romit', database: 'querybuilderdb', password: ''};

const dbUtils = new DBUtils(connectionString);
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send('welcome to my QueryBuilderApi');
});

const employeeRoutes = new EmployeeRoutes(dbUtils);
app.use('/employees', employeeRoutes.setupRoutes());

app.listen(port, function () {
    console.log('App started running in port: ' + port);
});