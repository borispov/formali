/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw8smeu9c9qyjgp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqx83gsr",
    "name": "period",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zw8smeu9c9qyjgp")

  // remove
  collection.schema.removeField("uqx83gsr")

  return dao.saveCollection(collection)
})
