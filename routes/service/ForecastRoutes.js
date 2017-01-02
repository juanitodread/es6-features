const express = require('express');
const rpn = require('request-promise-native');
const Util = require('../../utils/Util');
const Logger = Util.logger();

/* const TODO = (req, res) => {
  Logger.debug(res);
  res.send('TODO forecast');
}; */

const router = new express.Router();

const options = {
  method: 'GET',
  uri: 'https://api.github.com/users/juanitodread',
  headers: {
    'User-Agent': 'request'
  },
  json: true
};

router.get('/', (req, res) => {
  Logger.info('forecast-service GET');
  Logger.debug(`Calling ${JSON.stringify(options)}`);

  rpn(options).then((info) => {
    Logger.debug(info);
    res.send(info).status(200);
  }).catch((err) => {
    Logger.error('Something went wrong');
    res.sendStatus(404);
  });
});

module.exports = router;
