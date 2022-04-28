require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const routes = require('./Routes')

app.use(routes)
app.use(express.json());
const user = 
const test = process.env.DB_USER;
const pass = 
console.log(user)
console.log(pass)

mongoose.connect(`mongodb+srv://${user}:${pass}@login.zr1c6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then((response)=>{
    app.listen(3000,(req,res)=>{
        console.log("Rodando o server")
    })
    console.log("banco conectado")
})
.catch((err)=>{console.log("o erro foi" + err)})


