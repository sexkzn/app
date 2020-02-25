const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/login', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );

  app.use(
    proxy('/logout', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );

  app.use(
    proxy('/register', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );

  app.use(
    proxy('/config', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );

  app.use(
    proxy('/api', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );

  app.use(
    proxy('/images', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
    })
  );
};
