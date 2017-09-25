var trivia_game = require('../controllers/trivia_game.js');
var path = require('path');

module.exports = function(app) {

    app.post('/questions', function(req, res) {
        console.log("routes postQuestions ", req.body);
        trivia_game.postQuestions(req, res);
    })

    app.get('/questions', function(req, res) {
        trivia_game.getQuestions(req, res);
    })

    // app.delete("/players/:_id", (req, res) => {
    //     team_manager.deletePlayer(req, res);
    // });

    // Express Test
    app.get('/express', function(req, res) {
        console.log(`express / from node`);
        trivia_game.root(req, res);
    })

    // lets_play
    app.get('/lets_play', function(req, res) {
        console.log(`lets_play / from node`);
        res.render('index');
        // return ({success: "success"});
        // trivia_game.root(req, res);
        // res.sendFile(path.resolve("./mongoose.js"))
    })

    // Root Request
    app.get('/', function(req, res) {
        console.log(`root / from node`);
        trivia_game.root(req, res);
        // res.sendFile(path.resolve("./mongoose.js"))
    })

    app.all("*", (req,res,next) => {
        console.log(`app.all / from node`);
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}