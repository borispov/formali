/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5nets1w94cphwg4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nhvslo8z",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5nets1w94cphwg4")

  // remove
  collection.schema.removeField("nhvslo8z")

  return dao.saveCollection(collection)
})
