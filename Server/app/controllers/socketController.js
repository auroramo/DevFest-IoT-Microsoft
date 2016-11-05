function Socket(dependencies){

    /// Dependencies
    var _console;
    var _io;
    var _database;

    var constructor = function(){
        _io         = dependencies.io;
        _database   = dependencies.database;
        _console        = dependencies.console;

        socketImplementation();
        _console.log('Socket module initialized', 'server-success');
    }

    var socketImplementation = function(){
        _io.sockets.on('connection', function(socket){
            _console.log('Client connected: ' + socket.id, 'socket-message');

            /// Welcome to the new client
            socket.emit('Welcome', {Message: 'Welcome to Coplest.Flinger', SocketId : socket.id});

            /// Request all insights queue
            socket.emit('Coplest.Flinger.ServerEvent', {Command : 'InsightsQueue'});

            socket.on('DevFest.IoT.PI', function(data){
                if (data.Command != undefined){
                    switch(data.Command){
                        case 'PhotocellPushData':
                            _database.Photocell().createPhotocell(data.Values, function(){
                                //console.log('Click Saved');
                            })
                            break;
                        case 'HumidityPushData':
                            _database.Humidity().createHumidity(data.Values, function(){
                                //console.log('Movement Saved');
                            })
                            break;
                    }
                }
            })
        });
    }

    return {
        Initialize: constructor
    }
}

module.exports = Socket;