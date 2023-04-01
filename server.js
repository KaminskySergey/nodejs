const app = require('./app')
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MANGO_URL).then(() => {
  app.listen(3000, () => {
    console.log("Database connection successful")
  })

}).catch((err) => {
console.log(err)
process.exit(1)
})



