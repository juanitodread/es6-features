const Util = require('../utils/Util');
const Logger = Util.logger();

const expressConf = (app) => {
  app.use((req, res, next) => {
    Logger.debug('Configuring express framework');
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
  });
};

module.exports = expressConf;
