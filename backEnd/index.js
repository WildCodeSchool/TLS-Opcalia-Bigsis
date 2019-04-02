const express = require('express');
const app = express();
const authRouter = require('./auth/auth')
const bodyParser = require('body-parser')

const cors = require('cors');

const port= process.env.PORT || 5000;

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
    extended: true
}));

app.get('/', (res) =>{
    console.log(res)
})

app.use('/auth', authRouter); //où authRouter est issu de l'importation

app.listen(port, (err) => {
    if(err)
        throw new Error(err);

    console.log(`Serveur is listening on port ${port}`)
})