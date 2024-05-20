/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  collection.listRule = "user= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bsapiz79gmpzv31")

  collection.listRule = "@collection.users.id = @request.auth.id"

  return dao.saveCollection(collection)
})
