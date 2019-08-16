const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: 'N/A'
    },
    onDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    cardColor: {
        type: String,
        required: true,
        default: '#cddc39'
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    timestamps: {
        createdOn: {
            type: Date,
            required: true,
            default: Date.now
        },
        modifiedOn: {
            type: Date,
            required: true,
            default: Date.now
        },
        completedOn: {
            type: Date,
            default: null
        }
    }
});

module.exports = mongoose.model("Todo", todoSchema);