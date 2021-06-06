//Importing the required modules
const express=require('express');
const bodyParser=require('body-parser');
//Making connection to DB in atlas
const {mongoose} = require('../Configuration/db');
const questionDetails=require('../Crud/questionroute');
const answerDetails=require('../Crud/answerroute');
const optionDetails=require('../Crud/optionroute');
const mapping=require('../Crud/maproute');
//Creating an express app
const app=express();
app.use(bodyParser.json());
//Making the routes
app.use('/questions',questionDetails);
app.use('/answers',answerDetails);
app.use('/options',optionDetails);
app.use('/map',mapping);
//staring a server
app.listen(3000,()=>console.log("Server started at port 3000"))