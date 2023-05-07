var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-nqqbco2jf7d5mvqi.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"M4l5It88zSddMTI2u5iHVwTCiOSkBUIh","client_secret":"HSQX8Fx5RqeI5dhViKmpLz9U9Q06W98NziSdHfn2YzAwWxNcQcfY3EPh6h-xbORR","audience":"https://dev-nqqbco2jf7d5mvqi.us.auth0.com/api/v2/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});