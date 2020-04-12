const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// App Set //
const PORT = process.env.PORT || 5000;


// Route includes
const winesRouter = require('./routes/wines.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* Routes */
app.use('/wines', winesRouter);


/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});