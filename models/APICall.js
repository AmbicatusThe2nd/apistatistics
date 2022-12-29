const mongoose = require('mongoose');
const schema = mongoose.Schema;

const apiCallSchema = new schema({
    calledMethod: {
        type: String
    },
    method: {
        type: String
    },
    service: {
        type: String
    },
    calledAt: {
        type: Date
    },
}, { collection: 'apicalls' });

module.exports = mongoose.model('APICall', apiCallSchema);