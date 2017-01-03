const Router = require('express').Router;
const router = new Router();
const Util = require('../../utils/Util');
const Logger = Util.getLogger();

const TODO = (req, res) => {
  Logger.debug(res);
  res.send('TODO');
};

router.route('/')
  .get(TODO)
  .post(TODO);

module.exports = router;
