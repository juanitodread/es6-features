const Winston = require('winston');
const tsFormat = () => (new Date());

const Util = {
  logger: () => {
    const logger = new (Winston.Logger)({
      level: 'debug',
      transports: [
        new (Winston.transports.Console)({
          timestamp: tsFormat,
          colorize: true
        })
      ]
    });
    return logger;
  }
};

module.exports = Util;
