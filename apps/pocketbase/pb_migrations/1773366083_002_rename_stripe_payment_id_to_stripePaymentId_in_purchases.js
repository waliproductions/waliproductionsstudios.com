/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("purchases");
  const field = collection.fields.getByName("stripe_payment_id");
  field.name = "stripePaymentId";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("purchases");
  const field = collection.fields.getByName("stripePaymentId");
  field.name = "stripe_payment_id";
  return app.save(collection);
})
