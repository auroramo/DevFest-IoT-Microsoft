function DevFestPI(dependencies){

    var _app;

    // Modules
    var _cross;
    var _console;
    var _frontendController;
    var _routesController;
    var _socketController;
    var _databaseController;

    var constructor = function(){
        _app = dependencies.app;

        /// Own Console declaration
        _console = require('./consoleController')(dependencies);
        _console.Initialize();
        dependencies.console = _console;

        /// Cross declaration
        _cross = require('./crossController')({});
        _cross.SetServerUri("http://104.208.167.177:3500/");
        dependencies.cross = _cross;

         /// Socket declaration
        _socketController = require('./socketController')(dependencies);
        
        initializeControllers();

        _console.log('Server initialized', 'server-success');
    }

    var initializeControllers = function(){
        _socketController.Initialize();

        _console.log('Modules initialized', 'server-success');
    }

    return {
        Initialize: constructor
    }
}

module.exports = DevFestPI;