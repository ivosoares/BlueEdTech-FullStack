const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('as pessoas estao aqui');
})

router.get('/nome', (req, res) => {
  res.send('o nome da pessoa é xxxx');
})


// // http://localhost:3000/vagas/add
// router.post('/add', (req, res) => {

// })

module.exports = router;