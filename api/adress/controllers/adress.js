'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let { client, ...payload } = ctx.request.body
    if (client?.id) {
      payload = {
        ...payload,
        client: client.id
      }
    }
    const entity = await strapi.services.adress.create(payload);
    return sanitizeEntity(entity, { model: strapi.models.adress });
  },
};
