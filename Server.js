const express = require('express');
const dotenv = require('dotenv');

const Util = require('./utils/Util');
const confExpress = require('./conf/express-conf');

// Routes
const userRoutes = require('./routes/user/UserRoutes');
const forecastRoutes = require('./routes/service/ForecastRoutes');

// Logs
const Logger = Util.logger();

dotenv.config();

const app = express();

confExpress(app);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const SystemUrl = [process.env.DEPLOY_CONTEXT,
  process.env.SERVICES_PATH,
  process.env.API_VERSION].join('/');

app.use(`/${SystemUrl}/users`, userRoutes);
app.use(`/${SystemUrl}/forecast-service`, forecastRoutes);

const server = app.listen(process.env.PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  Logger.info(`=> Starting on http:${host}:${port}`);
});

module.exports = app;
