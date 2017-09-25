// require mongoose
var mongoose = require('mongoose');

// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var PlayerSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    score:  { type: Number, required: true},
    percent:  { type: Number, required: true}
}, {timestamps: true });

// Store the Schema under the name 'Player'
mongoose.model('Player', PlayerSchema);
