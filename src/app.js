// const express = require('express');
// const app = express();

// app.use(express.json());

// var mysql = require('mysql');


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "barmanagementdb"
// });

// // Iniciar servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });


// // Rota de login (página de login)
// app.get('/login/users', (req, res) => {
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT ID, NOME FROM usuarios", function (err, result, fields) {
//       if (err) throw err;
//       res.send(result);
//     });
//   });
// });

// app.post('/login/users', (req, res) => {
//   let user = req.body.user; 
//   const sql = "SELECT ID, NOME FROM usuarios WHERE NOME = '" + user + "'";

//   con.connect(function(err) {
//     if (err) throw err;
//     con.query(sql, function (err, result, fields) {
//       // if (err) throw err;
//       if(result){res.send(result);}
//       else{res.send("Usuário não cadastrado!")}
//     });
//   });
// });

import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

import * as dotenv from "dotenv";
dotenv.config()

app.use(express.json());

// import db from "./database/mongoConfig.js"
// db.connect();

import routes from "./api/routes/routes.js"

app.use("/router", routes)

app.post("/api/users", (req, res) => {
    console.log(req.body);
})

export default app;