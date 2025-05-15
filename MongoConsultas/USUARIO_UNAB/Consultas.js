db.clientes.insertMany([

  { nombre: "Ana", ciudad: "Lima", edad: 28, correo: "ana@gmail.com" },

  { nombre: "Carlos", ciudad: "Bogotá", edad: 34, correo: "carlos@yahoo.com" },

  { nombre: "María", ciudad: "Lima", edad: 22, correo: "maria@hotmail.com" },

  { nombre: "José", ciudad: "Quito", edad: 40, correo: "jose@gmail.com" },

  { nombre: "Lucía", ciudad: "Bogotá", edad: 19, correo: "lucia@outlook.com" },

  { nombre: "Pedro", ciudad: "Lima", edad: 35, correo: "pedro@gmail.com" } ])



db.clientes.find()

db.clientes.find({ ciudad: "Lima" })

db.clientes.find({ edad: { $gt: 30 } })

db.clientes.find({ edad: { $lte: 22 } })

db.clientes.find({ ciudad: { $ne: "Bogotá" } })


db.clientes.find({ ciudad: "Lima", edad: { $gt: 25 } })




db.clientes.find({ ciudad: { $in: ["Lima", "Bogotá"] } })

db.clientes.find({ ciudad: { $nin: ["Lima", "Quito"] } })

db.clientes.find({ $or: [ { edad: { $lt: 20 } }, { ciudad: "Quito" } ] })




db.clientes.find({}, { nombre: 1, ciudad: 1, _id: 0 })

db.clientes.find({}, { correo: 0 })



db.clientes.find().sort({ edad: 1 })

db.clientes.find().sort({ edad: -1 })

db.clientes.find().limit(3)

db.clientes.find().skip(2)




db.clientes.createIndex({ ciudad: 1 })

db.clientes.createIndex({ ciudad: 1, edad: -1 })

db.clientes.createIndex({ correo: 1 }, { unique: true })



db.clientes.find({ nombre: "Pedro" }).explain("executionStats")

db.clientes.createIndex({ nombre: 1 })

db.clientes.find({ nombre: "Pedro" }).explain("executionStats")



db.clientes.getIndexes()

db.clientes.dropIndex("nombre_1")