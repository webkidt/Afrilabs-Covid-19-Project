const async = require('async');
const fetch = require('node-fetch');

const getGlobalStats = () => {
  const url = 'https://corona.lmao.ninja/all';

  return fetch(url)
    .then(res => res.json())
};

const getAficanCountries = () => {
  const afriUrls = [
    'https://thevirustracker.com/free-api?countryTotal=DZ',
    'https://thevirustracker.com/free-api?countryTotal=AO',
    'https://thevirustracker.com/free-api?countryTotal=BJ',
    'https://thevirustracker.com/free-api?countryTotal=BW',
    'https://thevirustracker.com/free-api?countryTotal=BF',
    'https://thevirustracker.com/free-api?countryTotal=BI',
    'https://thevirustracker.com/free-api?countryTotal=CM',
    'https://thevirustracker.com/free-api?countryTotal=CF',
    'https://thevirustracker.com/free-api?countryTotal=TD',
    'https://thevirustracker.com/free-api?countryTotal=CG',
    'https://thevirustracker.com/free-api?countryTotal=CD',
    'https://thevirustracker.com/free-api?countryTotal=CI',
    'https://thevirustracker.com/free-api?countryTotal=DJ',
    'https://thevirustracker.com/free-api?countryTotal=EG',
    'https://thevirustracker.com/free-api?countryTotal=GQ',
    'https://thevirustracker.com/free-api?countryTotal=ER',
    'https://thevirustracker.com/free-api?countryTotal=ET',
    'https://thevirustracker.com/free-api?countryTotal=GA',
    'https://thevirustracker.com/free-api?countryTotal=GM',
    'https://thevirustracker.com/free-api?countryTotal=GH',
    'https://thevirustracker.com/free-api?countryTotal=GN',
    'https://thevirustracker.com/free-api?countryTotal=GW',
    'https://thevirustracker.com/free-api?countryTotal=KE',
    'https://thevirustracker.com/free-api?countryTotal=LS',
    'https://thevirustracker.com/free-api?countryTotal=LR',
    'https://thevirustracker.com/free-api?countryTotal=LY',
    'https://thevirustracker.com/free-api?countryTotal=MG',
    'https://thevirustracker.com/free-api?countryTotal=MW',
    'https://thevirustracker.com/free-api?countryTotal=ML',
    'https://thevirustracker.com/free-api?countryTotal=MR',
    'https://thevirustracker.com/free-api?countryTotal=MA',
    'https://thevirustracker.com/free-api?countryTotal=MZ',
    'https://thevirustracker.com/free-api?countryTotal=NA',
    'https://thevirustracker.com/free-api?countryTotal=NE',
    'https://thevirustracker.com/free-api?countryTotal=NG',
    'https://thevirustracker.com/free-api?countryTotal=RW',
    'https://thevirustracker.com/free-api?countryTotal=SN',
    'https://thevirustracker.com/free-api?countryTotal=SL',
    'https://thevirustracker.com/free-api?countryTotal=SO',
    'https://thevirustracker.com/free-api?countryTotal=ZA',
    'https://thevirustracker.com/free-api?countryTotal=SS',
    'https://thevirustracker.com/free-api?countryTotal=SD',
    'https://thevirustracker.com/free-api?countryTotal=SZ',
    'https://thevirustracker.com/free-api?countryTotal=TZ',
    'https://thevirustracker.com/free-api?countryTotal=TG',
    'https://thevirustracker.com/free-api?countryTotal=TN',
    'https://thevirustracker.com/free-api?countryTotal=UG',
    'https://thevirustracker.com/free-api?countryTotal=EH',
    'https://thevirustracker.com/free-api?countryTotal=ZM',
    'https://thevirustracker.com/free-api?countryTotal=ZW'
  ];

  return async.map(afriUrls, (url, callback) => {
    fetch(url)
      .then(res => res.json())
      .then(data => callback(null, data.countrydata[0]))
      .catch(err => callback(err));
  });
};

module.exports = {
  getGlobalStats,
  getAficanCountries
};
