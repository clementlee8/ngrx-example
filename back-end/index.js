const   express     = require('express'),
        bodyParser  = require('body-parser');
        mysql       = require('mysql'),
        cors        = require('cors');

const   app     = express();
const   port    = 3000;
const   userRouting = require('./routing/user.route');
const   db  = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'simple-ngrx'
    }
)

db.connect((err) => {
    if(err) {
        throw new Error(err);
    }

    console.log("Database has connected !");
});

global.db = db;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('port', port);
app.use('/user', userRouting);

app.listen(port , () => console.log("App listen att port " + port));