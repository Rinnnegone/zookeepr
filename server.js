const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const { animals } = require(`./data/animals.json`);
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

  app.use('/api', apiRoutes);
  app.use('/', htmlRoutes);
  app.use(express.static('./data/public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());



//if (process.env.NODE_ENV === "production") {
 //   app.use(express.static("build"));
 //   app.get("*", (req, res) => {
  //    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  //  });
//  }

app.listen(PORT, () => {
    console.log(`Api server now on port ${PORT}!`);
});

