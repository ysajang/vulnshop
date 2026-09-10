// TEACHING MATERIAL: this file contains deliberate vulnerabilities.
const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const config = require('./config');

const app = express();
app.use(express.json());

let pool = null;
function getPool() {
  if (!pool) {
    pool = mysql.createPool(config.db);
  }
  return pool;
}

// FLAW 1: SQL injection via string concatenation
app.get('/search', (req, res) => {
  const q = req.query.q || '';
  const sql = "SELECT id, name, price FROM products WHERE name LIKE '%" + q + "%'";
  getPool().query(sql, (err, rows) => {
    if (err) {
      return res.status(500).send('db error: ' + err.message);
    }
    res.json(rows);
  });
});

// FLAW 2: reflected XSS via unescaped output
app.get('/greet', (req, res) => {
  const name = req.query.name || 'guest';
  res.send('<html><body><h1>Hello ' + name + '</h1></body></html>');
});

// FLAW 3: token signed with a hardcoded secret, no expiry
app.post('/token', (req, res) => {
  const token = jwt.sign({ user: req.body.user }, config.jwtSecret);
  res.json({ token });
});

// FLAW 4: no security headers, verbose errors, no rate limiting
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('vulnshop listening on ' + port));
