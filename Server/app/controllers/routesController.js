function Routes(dependencies) {

    /// Dependencies
    var _console;
    var _app;
    var _express;
    var _io;
    var _bodyParser;
    var _morgan;
    var _mongoose;
    var _jwt;
    var _checkInternet;
    var _database;
    var _cross;

    var _apiRoutes;

    var constructor = function () {
        _app = dependencies.app;
        _express = dependencies.express;
        _bodyParser = dependencies.bodyParser;
        _database = dependencies.database;
        _console = dependencies.console;
        _apiRoutes = _express.Router();
        _cross = dependencies.cross;
        _jwt = dependencies.jwt;

        createAPI();

        _console.log('API routes module initialized', 'server-success');
    }

    var createAPI = function () {

        /// Welcome
        /// -------------------------
        // route to show message (GET http://localhost:3000/api/Welcome)
        _apiRoutes.get('/Welcome', function (req, res) {
            res.json({ message: 'Welcome to the coolest API on earth!' });
        });

        /// Humidity api routes
        /// -------------------------
        //  (GET http://localhost:3000/api/Humidity/Id[ID])
        _apiRoutes.get('/Humidity/Id/:Id', function (req, res) {
            _database.Click().GetClickById(req.params.Id, function (result) {
                res.json({ message: 'GetClickById', result: result });
            })
        });

        //  (GET http://localhost:3000/api/Humidity)
        _apiRoutes.get('/Humidity/All', function (req, res) {
            _database.Click().GetAllClick(null, function (result) {
                res.json({ message: 'GetAllClick', result: result });
            })
        });

        /// Photocell api routes
        /// -------------------------
        //  (GET http://localhost:3000/api/Photocell/Id[ID])
        _apiRoutes.get('/Photocell/Id/:Id', function (req, res) {
            _database.Click().GetClickById(req.params.Id, function (result) {
                res.json({ message: 'GetClickById', result: result });
            })
        });

        //  (GET http://localhost:3000/api/Photocell)
        _apiRoutes.get('/Photocell/All', function (req, res) {
            _database.Click().GetAllClick(null, function (result) {
                res.json({ message: 'GetAllClick', result: result });
            })
        });

        
        // apply the routes to our application with the prefix /api
        _app.use('/api', _apiRoutes);
    }

    return {
        Initialize: constructor
    }
}

module.exports = Routes;