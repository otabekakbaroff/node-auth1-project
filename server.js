const express = require('express');
const server = express();
const usersRouter=require('./data/users/users-router')
const session=require("express-session");

const sessionConfig={
  name:'monster',
  secret:'Keep it Secret, Keep it Safe!',
  resave:false,
  saveUninitialized: true,
  cookie:{
    maxAge:1000*60*10,
    secure:false,
    httpOnly:true
  }
}

server.use(express.json());
server.use(session(sessionConfig))
server.use('/api/', usersRouter);
server.get('/',  (req, res) => {
  console.log(req.session);
  res.send(`Server is up and running...`);
});

//custom middleware


module.exports = server;
