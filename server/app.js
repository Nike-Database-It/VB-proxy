const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, './../public')));
app.use(express.static(path.join(__dirname, './../node_modules')));

app.get('/:productSku/similar', (req, res) => {
  axios.get(`http://localhost:3001/${ req.params.productSku }/similar`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).end(err.message));
});

app.get('/:productSku/sizes', (req, res) => {
  axios.get(`http://localhost:3003/${ req.params.productSku }/sizes`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).end(err.message));
});

app.get('/:productSku/descrip', (req, res) => {
  axios.get(`http://localhost:3003/${ req.params.productSku }/descrip`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).end(err.message));
});

app.get('/:productSku/reviews', (req, res) => {
  axios.get(`http://localhost:3004/${ req.params.productSku }/reviews`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).end(err.message));
});

app.get('/:productSku/images', (req, res) => {
  axios.get(`http://localhost:3005/${ req.params.productSku }/images`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).end(err.message));
});

app.get('/:productSku/colors', (req, res) => {
  axios.get(`http://localhost:3006/${ req.params.productSku }/colors`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).end(err.message));
});

app.get('/:productSku/colors/:style', (req, res) => {
  axios.get(`http://localhost:3006/${ req.params.productSku }/colors/${ req.params.style }`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).end(err.message));
});

module.exports = app;
