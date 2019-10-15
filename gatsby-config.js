const config = require('./config');

module.exports = {
  plugins: [
    {
      resolve: '@talves/gatsby-theme-demo-cms',
      options: { config },
    },
  ],
};
