function Socket(dependencies){

    /// Dependencies
    var _console;
    var _io;
    var _database;

    var constructor = function(){
        _io         = dependencies.io;
        _database   = dependencies.database;
        _console    = dependencies.console;

        socketImplementation();
        _console.log('Socket module initialized', 'server-success');
    }

    var socketImplementation = function(){
        _io.sockets.on('connection', function(socket){
            _console.log('Client connected: ' + socket.id, 'socket-message');

            /// Welcome to the new client
            socket.emit('Welcome', {Message: 'Welcome to DevFest.PI', SocketId : socket.id});

            /* 
            ================
            Templates for Socket.io
            */
            /// Template for socket event
            //socket.on('', function(data){
            //  io.sockets.emit('Name', data);
            // socket.emit('ID', {Command: 'CommandID', Values:[{ID: socket.id}]});
            //});
        });
    }

    return {
        Initialize: constructor
    }
}

module.exports = Socket;