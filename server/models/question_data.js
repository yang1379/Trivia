// require mongoose
var mongoose = require('mongoose');

// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var QuestionDataSchema = new mongoose.Schema({
    question:  { type: String, required: true, minlength: 15},
    correct:  { type: String, required: true, minlength: 1},
    fake_one:  { type: String, required: true, minlength: 1},
    fake_two:  { type: String, required: true, minlength: 1}
}, {timestamps: true });

// Store the Schema under the name 'QuestionData'
mongoose.model('QuestionData', QuestionDataSchema);
