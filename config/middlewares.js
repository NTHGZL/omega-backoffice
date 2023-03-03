module.exports = ({env}) => [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'script-src': ["'self'"],
          'img-src': ["'self'", 'data:', 'blob:', 'http://omega-backoffice.nathangonzalez.fr'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://omega-backoffice.nathangonzalez.fr']
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

