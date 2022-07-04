const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    mail: {
        type: String,
        required: [true, 'Please add a text value']
    }
}
)

module.exports = mongoose.model('Contact', contactSchema)