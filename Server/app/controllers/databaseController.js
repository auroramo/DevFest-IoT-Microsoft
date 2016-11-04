function Database(dependencies){

    /// Dependencies   
    var _mongoose;
    var _cross;

    /// Properties
    var _db;
    var _dbConnected;

    /// Entities
    var _humidity;
    var _photocell;

    var constructor = function(){
        _mongoose = dependencies.mongoose;
        _cross = dependencies.cross;
        _console        = dependencies.console;

        databaseConnect(); 
    }

    var databaseConnect = function(){
        _mongoose.Promise = global.Promise;
        _mongoose.connect(_cross.GetMongoConnectionString());
        _db = _mongoose.connection;

        databaseHandler();
        _console.log('Database module initialized', 'server-success');
    }

    var databaseHandler = function(){
        _db.on('error', function(){
            _dbConnected = false;
        });

        _db.once('open', function () {
            _console.log('Database connected at ' + _cross.GetMongoConnectionString(), 'server-success');
            _dbConnected = true;

            entitiesControllers();
        });
    }

    var entitiesControllers = function(){
        _humidity = require('./humidityController')(dependencies);
        _humidity.Initialize();

        _photocell = require('./photocellController')(dependencies);
        _photocell.Initialize();
    }

    var isConnected = function(){
        return _dbConnected;
    }

    var getClickController = function(){
        return _click;
    }

    return {
        Initialize  : constructor,
        IsConnected : isConnected,
        Click       : getClickController
    }
}

module.exports = Database;