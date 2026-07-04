/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("purchases");
  const field = collection.fields.getByName("user_id");
  field.name = "userId";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("purchases");
  const field = collection.fields.getByName("userId");
  field.name = "user_id";
  return app.save(collection);
})
