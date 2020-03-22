const axios = require('axios')

axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?applicationId=1072021160833727442')
  .then(function (response) {
    // handle success
    console.log(response)
  }).catch(err => {
    console.log('err', err);
  })
