import welcome from './welcome.js';
import {user, userDefinition} from './user';
import {blog, blogDefinition} from './blog';
const paths = { ...welcome, ...user, ...blog};
const definitions = {...userDefinition, ...blogDefinition}

const config = {
  swagger: '2.0',
  info: {
    title: 'Codex API ',
    description: 'This Codex API a project',
    version: '1.0.0',
    contact: {
      name: 'Fidela',
      email: 'fidelatuyizere4@gmail.com',
      url: 'localhost:3080/api/v1/api-docs',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },

  schemes: ['HTTP', 'HTTPS'],

  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'authorization',
      in: 'header',
    },
    ApiKeyAuth: {
      type: 'apiKey',
      name: 'refreshToken',
      in: 'header',
    },
  },

  servers: [
    {
      url: 'http://localhost:3080',
      name: 'DEV',
    },
  ],

  paths,
  definitions
};

export default config;
