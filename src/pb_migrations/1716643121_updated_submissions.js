/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4eunjmt713y42li")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwacyrpw",
    "name": "submissionData",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4eunjmt713y42li")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwacyrpw",
    "name": "field",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
