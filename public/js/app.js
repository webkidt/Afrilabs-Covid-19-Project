const casesRecorded = document.querySelector('#no-of-confirmed-cases');
const deathsRecorded = document.querySelector('#no-of-deaths');
const recoveriesRecorded = document.querySelector('#no-of-recoveries');
const countriesAffected = document.querySelector('#no-of-countries');

fetch('/africa')
  .then(res => res.json())
  .then(result => {
    casesRecorded.innerHTML = `${result.total_cases || 3100}<span>Cases recorded</span>`;
    recoveriesRecorded.innerHTML = `${result.total_recovered || 171}<span>Recoveries</span>`;
    deathsRecorded.innerHTML = `${result.total_deaths || 79}<span>Deaths recorded</span>`;
    countriesAffected.innerHTML = `${result.countries_number || 50}<span>Countries affected</span>`;
  })
  .catch(error => {
    casesRecorded.innerHTML = `3100<span>Cases recorded</span>`;
    recoveriesRecorded.innerHTML = `171<span>Recoveries</span>`;
    deathsRecorded.innerHTML = `79<span>Deaths recorded</span>`;
    countriesAffected.innerHTML = `50<span>Countries affected</span>`;
  });
