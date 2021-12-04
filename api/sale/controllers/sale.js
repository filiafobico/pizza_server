'use strict';
const { sanitizeEntity } = require('strapi-utils');
const { update } = require('../../adress/controllers/adress');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const { client, adress, deliveryman, pizzas, promotion, ...sale } = ctx.request.body

    const payload = {
      ...sale,
      client: client?.id,
      adress: adress?.id,
      deliveryman: deliveryman?.id,
      pizzas: pizzas?.id,
      promotion: promotion?.id
    }

    const entity = await strapi.services.sale.create(payload);
    return sanitizeEntity(entity, { model: strapi.models.sale });
  },

  async update(ctx) {
    const { client, adress, deliveryman, pizzas, promotion, ...sale } = ctx.request.body

    const id = ctx.request.path.match(/sales.(\w+)/)[1]
    const payload = {
      ...sale,
      client: client?.id,
      adress: adress?.id,
      deliveryman: deliveryman?.id,
      pizzas: pizzas?.id,
      promotion: promotion?.id
    }

    const entity = await strapi.services.sale.update({ id }, payload)
    return sanitizeEntity(entity, { model: strapi.models.sale });
  }
};
