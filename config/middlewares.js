module.exports = ({env}) => [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:'],
          'default-src': ["'self'"],
          'script-src': ["'self'"],
          'img-src': ["'self'", 'data:', 'blob:', 'http://omega-backoffice.nathangonzalez.fr'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://omega-backoffice.nathangonzalez.fr'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

