const mongoose = require('mongoose')

const devSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
}
})


module.exports = mongoose.model('Dev', devSchema)
