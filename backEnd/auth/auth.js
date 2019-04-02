const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../helpers/db');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mySecret = bcrypt.hashSync('c\'est secret!',10);

//vérification de l'user

router.post('/verif', (req, res) => {

    const { nickname, password } = req.body

    connection.query(`SELECT * FROM users WHERE nickname =(` + mysql.escape(nickname) + `)`,
        (err, results) => {
            const payload = { nickname } ;
            const token = jwt.sign(payload, mySecret);
            // console.log('avant la comparaison')
            if (bcrypt.compareSync(password, results[0].password)) {
                    
                    res.json({ "message": `welcome ${nickname}`, 'id': results[0].id ,  token });
            } else {
                console.log('pass pas')
                res.status(500).json({ "message": 'Utilisateur ou Mot de passe incorrect !'})
            }
        })
})


//sign up

router.post('/signup', (req, res) => {

    const { nickname , email, password } = req.body;
    const mdp = bcrypt.hashSync(password, 10);
    const result = `INSERT INTO users (nickname , email, password) VALUES (`+mysql.escape(nickname)+ `,` + mysql.escape(email) + `,` + mysql.escape(mdp) + `)`;

    connection.query(result, (err, results) => {
        if (err) {
            res.status(500).json({ message: "This user is already registered. PLease logging in !" })
        } else {
            res.status(200).json({ message: "User has been signed up !" });
        }
    })
})

module.exports = router