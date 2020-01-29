const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/login', {
    target: 'http://localhost:8080/',
    changeOrigin: true,
  }));

  // app.get('/api/profile', (req, res) => {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send(
  //     JSON.stringify({
  //       stats: {
  //         profiles: {
  //           count: 10,
  //           active: 7,
  //           inactive: 3,
  //         },
  //         views: {
  //           today: 20,
  //           yesterday: 21,
  //           all: 412,
  //         },
  //         consumption: {
  //           forDay: 50,
  //           forWeek: 350,
  //           forMonth: 1500,
  //         },
  //       },
  //     })
  //   );
  // });

  app.use(proxy('/api', {
    target: 'http://localhost:8080/',
    changeOrigin: true,
  }));
  // app.use(
  //   proxy('/api', {
  //     target: 'https://dosugkzn.xyz/',
  //     changeOrigin: true,
  //   })
  // );
  // app.use(
  //   proxy('/login', {
  //     target: 'https://dosugkzn.xyz/',
  //     changeOrigin: true,
  //   })
  // );

  // app.get('/config', (req, res) => {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send({
  //     username: 'Shkura',
  //     email: 'shkura@rembler.ru',
  //     balance: 1023,
  //     roles: ['admin']
  //   });
  // });

  //
  // app.get('/profiles', (req, res) => {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send(
  //     JSON.stringify([
  //       {
  //         id: 1,
  //         name: 'Test',
  //       },
  //       {
  //         id: 2,
  //         name: 'Fuck you',
  //       },
  //       {
  //         id: 3,
  //         name: 'azaza',
  //       },
  //     ])
  //   );
  // });
  //
  // app.get('/profiles/1', (req, res) => {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send(
  //     JSON.stringify([
  //       {
  //         id: 1,
  //         name: 'ahahah',
  //       },
  //     ])
  //   );
  // });
};
