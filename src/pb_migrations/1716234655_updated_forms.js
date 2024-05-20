/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  collection.viewRule = "user= @request.auth.id"
  collection.createRule = "user= @request.auth.id"
  collection.updateRule = "user= @request.auth.id"
  collection.deleteRule = "user= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  collection.viewRule = "@collection.users.id = @request.auth.id"
  collection.createRule = "@request.auth.id != ''"
  collection.updateRule = "@collection.users.id = @request.auth.id"
  collection.deleteRule = "@collection.users.id = @request.auth.id"

  return dao.saveCollection(collection)
})
