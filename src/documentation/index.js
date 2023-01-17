import welcome from './welcome.js';
import {user, userDefinition} from './user';
import {blog, blogDefinition} from './blog';
import { comment, commentDefinition } from './comment.js';
const paths = { ...welcome, ...user, ...blog, ...comment};
const definitions = {...userDefinition, ...blogDefinition, ...commentDefinition}

const config = {
  swagger: '2.0',
  info: {
    title: 'Codex API ',
    description: 'This Codex API a project',
    version: '1.0.0',
    contact: {
      name: 'Fidela',
      email: 'fidelatuyizere4@gmail.com',
      url: 'https://my-brand-backend-production.up.railway.app/api/v1/api-docs',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },

  schemes: ['HTTP', 'HTTPS'],

  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'authorization',
      in: 'header',
    },
  },

  servers: [
    {
      url: 'https://my-brand-backend-production.up.railway.app',
      name: 'DEV',
    },
  ],

  paths,
  definitions
};

export default config;
