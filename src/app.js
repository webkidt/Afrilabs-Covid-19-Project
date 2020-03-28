const path = require('path');
const express = require('express');
const cors = require('cors');
const coronavirusData = require('./utils/coronavirus-api');

const port = process.env.PORT || 3000;

const africanCountries = coronavirusData.getAficanCountries;
const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();

app.use(cors());

app.use(express.static(publicDirectoryPath));

app.get('/africa', (req, res, next) => {
  africanCountries()
    .then(result => {
      let total_cases = result.reduce((acc, curr) => acc + curr.total_cases, 0);
      let total_recovered = result.reduce((acc, curr) => acc + curr.total_recovered, 0);
      let total_deaths = result.reduce((acc, curr) => acc + curr.total_deaths, 0);

      res.set('Cache-Control', 'public, max-age=1800, s-maxage=3600');
      res.send({
        total_cases,
        total_recovered,
        total_deaths,
        countries_number: result.length,
        country_list: result
      });
    })
    .catch(error => next(error));
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
