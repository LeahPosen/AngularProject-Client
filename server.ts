// import { APP_BASE_HREF } from '@angular/common';
// import { CommonEngine } from '@angular/ssr';
// import express from 'express';
// import { fileURLToPath } from 'node:url';
// import { dirname, join, resolve } from 'node:path';
// import AppServerModule from './src/main.server';
// import { User } from './src/app/models/user';
// import swaggerUi from 'swagger-ui-express';
// import * as swaggerDocument from './swagger.json'; 
// // The Express app is exported so that it can be used by serverless Functions.
// export function app(): express.Express {

//   const server = express();
//   const serverDistFolder = dirname(fileURLToPath(import.meta.url));
//   const browserDistFolder = resolve(serverDistFolder, '../browser');
//   const indexHtml = join(serverDistFolder, 'index.server.html');

//   const commonEngine = new CommonEngine();

//   server.set('view engine', 'html');
//   server.set('views', browserDistFolder);

//   server.get('*', (req, res, next) => {
//     const { protocol, originalUrl, baseUrl, headers } = req;
//     commonEngine
//       .render({
//         bootstrap: AppServerModule,
//         documentFilePath: indexHtml,
//         url: `${protocol}://${headers.host}${originalUrl}`,
//         publicPath: browserDistFolder,
//         providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
//       })
//       .then((html) => res.send(html))
//       .catch((err) => next(err));
//   });

//   let users: User[] = [
//     {
//       id: 1,
//       name: 'John Doe',
//       mail: 'john@example.com',
//       password: 'password1'
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       mail: 'jane@example.com',
//       password: 'password2'
//     },
//     {
//       id: 3,
//       name: 'Alice Johnson',
//       mail: 'alice@example.com',
//       password: 'password3'
//     }
//   ];
//   server.use(express.json());
//   server.get('/api/users', (req, res) => {
//     res.json(users);
//   });
//   server.post('/api/users', (req, res) => {
//     const newUser: User = req.body;
//     users.push(newUser);
//     res.status(201).send('User created successfully');
//   });

//   server.put('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const updatedUser: User = req.body;
//     users = users.map(user => {
//       if (user.id === userId) {
//         return updatedUser;
//       } else {
//         return user;
//       }
//     });
//     res.status(200).send(`User with ID ${userId} updated successfully`);
//   });

//   server.delete('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     users = users.filter(user => user.id !== userId);
//     res.status(200).send(`User with ID ${userId} deleted successfully`);
//   });
//   server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//   return server;
// }


// function run(): void {
//   const port = process.env['PORT'] || 4000;
//   // Start up the Node server
//   const server = app();
//   server.listen(port, () => {
//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }

// run();
