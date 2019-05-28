const express = require("express");
const path = require("path");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 3001;

const options = {
  swaggerDefinition: {
    info: {
      title: 'Roon Rest API',
      version: '1.0.0',
      description: 'Rest API wrapper for Roon API',
    },
  },

  apis: ['routes.js']
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.static(path.join(__dirname, "htmls")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("./routes")(app);

app.listen(PORT);

console.log("Listening on port: " + PORT);
