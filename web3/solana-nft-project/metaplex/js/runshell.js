// const express = require('express');
import express from 'express';
import exec from "child_process";
// const { exec } = require('child_process');
// const dotenv = require('dotenv')

// dotenv.config()

// const port = process.env.PORT
const port = 8000;
// express initialization
const app = express();

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// api for the checking node version
app.get('/check', (req, res) => {
  exec('node --version', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    res.send(`Node version : ${stdout}`);
    console.log(`Node version : ${stdout}`);
  });
});
