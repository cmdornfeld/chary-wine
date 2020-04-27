const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET Wines route *************');
  
    const queryText = `SELECT "id", "brand", "name", "image", "description", "location", "type", "variety", 
                      "C rating" as c_Rating, "M rating" as m_Rating, AVG(("C rating" + "M rating") / 2) as "totalRating", "price"
                      FROM "wines"
                      GROUP BY "id"
                      ORDER BY "id";`;
      pool.query(queryText)
          .then( (result) => {
              res.send(result.rows);
          })
          .catch( (error) => {
            console.log(`Error on GET query ${error}`);
          res.sendStatus(500);
      });
  });

  router.get('/details/:id', (req, res) => {
    console.log('GET Wine details ***********')
    console.log('logging req.params.id', req.params.id);
    
    const id = req.params.id;

    const queryText = `SELECT "id", "brand", "name", "image", "description", "location", "type", "variety", "C rating" as c_Rating, 
                      "M rating" as m_Rating, AVG(("C rating" + "M rating") / 2) as "totalRating", "price"
                      FROM "wines"
                      WHERE "id" = $1
                      GROUP BY "id";`;
    pool.query(queryText, [id])
        .then(results => res.send(results.rows[0]))
        .catch(error => {
            console.log('Error GETTING event info:', error);
            res.sendStatus(500);
    });
});



module.exports = router;