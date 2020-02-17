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

  app.post('/api/profiles', (req, res) => {
    res.json({
      id: 123,
    });
  });

  app.get('/api/profiles', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'Анна',
        status: 'waitForImages',
        phone: '898989888291',
        age: 18,
        growth: 180,
        weight: 60,
        boobsSize: 3,
        views: {
          yesterday: 100,
          today: 10,
        },
        forHour: 5000,
        forTwoHours: 10000,
        forNight: 30000,
        anal: 5000,
      },
    ]);
  });
};
