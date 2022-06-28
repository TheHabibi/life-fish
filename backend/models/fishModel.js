const mongoose = require('mongoose')

const fishSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
},{
    timestamps: true
}
)

module.exports = mongoose.model('Fish', fishSchema)