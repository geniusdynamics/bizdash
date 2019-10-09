// Initializes the `companies` service on path `/companies`
const { Companies } = require('./companies.class');
const createModel = require('../../models/companies.model');
const hooks = require('./companies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/companies', new Companies(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('companies');

  service.hooks(hooks);
};
