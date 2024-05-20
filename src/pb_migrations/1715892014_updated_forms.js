/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  collection.createRule = "@collection.users.id = @request.auth.id"
  collection.updateRule = "@collection.users.id = @request.auth.id"
  collection.deleteRule = "@collection.users.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
