db.personas.updateOne(
    { usuario: "Amartinez" }, 
    {
      $set: {
        telefono: "77777777",
        correo: "ana_actualizado@gmail.com"
      }
    }
  )
  