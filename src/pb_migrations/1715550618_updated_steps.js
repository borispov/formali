/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s7zn25nbxes1uzc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdibachg",
    "name": "form",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "bsapiz79gmpzv31",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s7zn25nbxes1uzc")

  // remove
  collection.schema.removeField("pdibachg")

  return dao.saveCollection(collection)
})
