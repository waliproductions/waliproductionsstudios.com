/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("purchases");
  const field = collection.fields.getByName("sound_pack_id");
  field.name = "soundPackId";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("purchases");
  const field = collection.fields.getByName("soundPackId");
  field.name = "sound_pack_id";
  return app.save(collection);
})
