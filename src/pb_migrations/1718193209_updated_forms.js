/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhc4xb2v",
    "name": "endings",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  // remove
  collection.schema.removeField("mhc4xb2v")

  return dao.saveCollection(collection)
})
