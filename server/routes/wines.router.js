const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET Wines route *************');
  
    const queryText = `SELECT * FROM "wines";`;
      pool.query(queryText)
          .then( (result) => {
              res.send(result.rows);
          })
          .catch( (error) => {
            console.log(`Error on GET query ${error}`);
          res.sendStatus(500);
      });
  });



module.exports = router;