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

  app.get(
    '/my_profiles/52fe10ed-9096-43d9-b9db-49ccee1bb260/pictures',
    (req, res) => {
      res.send({
        content: [
          { id: 1, src: '/1.jpg' },
          { id: 1, src: '/1.jpg' },
          { id: 1, src: '/1.jpg' },
        ],
      });
    }
  );
};
