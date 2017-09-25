var mongoose = require('mongoose');

// Retrieve the Schema called 'Player' and store it to the variable Note
var Player = mongoose.model('Player');
var QuestionData = mongoose.model('QuestionData');

module.exports = {

    postQuestions: function(req, res) {
        console.log(`controllers postQuestions ${req.body.question}`);
        var questionData = new QuestionData(req.body);
        
            // Try to save that new question to the database (this is the method that actually inserts into the db)
            // and run a callback function with an error (if any) from the operation.
            questionData.save(function(err) {
                // if there is an error console.log that something went wrong!
                if(err) {
                    console.log('add question failed');
                    console.log(err);
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a question');
                    return res.json("added question");
                }
            })
        
    },

    getQuestions: function(req, res) {
        QuestionData.find({}, function(err, questions) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('Failed to get questions');
            } else { // else console.log that questions were retrieved
                console.log('successfully retrieved all questions');
                console.log(questions);
                return res.json(questions);
            }
        })
    },

    // deletePlayer: function (req, res) {
    //     Player.findByIdAndRemove(req.params._id, function (err, player) {
    //         console.log('deleting player id ', req.params._id);
    //         console.log('deleting player', player);
    //         if (err) {
    //             console.log('Failed to delete player');
    //             return;
    //         } else { // else console.log that player was deleted
    //             console.log('successfully deleted player');
    //             return res.json("success");
    //         }
    //     });
    // },

    // postNotes: function(req, res) {
    //     let taskInstance = new Note(req.body);
    //     taskInstance.save(function(err) {
    //         if (err) {
    //             return res.json(false);    
    //         }
    //         else {
    //             Note.find({}, function(err, notes) {
    //                 return res.json(notes);
    //             })
                
    //             return res.json(notes);
    //         }
            
    //     })
    // },

    root: function(req, res) {
        res.json("Express Root");
    }

}