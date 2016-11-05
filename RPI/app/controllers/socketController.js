function Socket(dependencies){
    /// Properties
    var _humidityPort;
    var _photocelPort;
    var _devFestServer;

    /// Dependencies
    var _console;
    var _io;
    var _database;
    var _serialport;
    var _ioClient;
    var _cross;

    var constructor = function(){
        _io         = dependencies.io;
        _database   = dependencies.database;
        _console    = dependencies.console;
        _serialport = dependencies.serialport;
        _ioClient   = dependencies.ioClient;
        _cross      = dependencies.cross

        setSerialPorts();
        socketImplementation();
        _console.log('Socket module initialized', 'server-success');
    }

    var setSerialPorts = function(){
        console.log(_serialport)
        _humidityPort = new _serialport.SerialPort("/dev/ttyACM0");
        _photocelPort = new _serialport.SerialPort("/dev/ttyACM1");
    }

    var socketImplementation = function(){
        /*_devFestServer = ioClient.connect(_cross.GetServerUri());

        _devFestServer.on('connect', function(){
            console.log('Connected to Kerberos');
        });
        
        _devFestServer.on('disconnect', function(){
            console.log('Kerberos is offline');
        });
        
        _devFestServer.on('Welcome', function(data){
            myKerberosId = data.SocketId;
        });
        
        _devFestServer.on('DevFest.IoT.Server', function(data){
            messageHub(data);
        });*/

        _humidityPort.on('open', function(){
            _console.log('Humidity Serial Port Opend', 'server-success');
            _humidityPort.on('data', function(data){
                _console.log('Humidity:' + data[0], 'socket-message');
                //_devFestServer.emit('DevFest.IoT.PI', {Command: 'HumidityPushData', Values:[{SensorData: data[0]}]} )
                
            });
        });

        _photocelPort.on('open', function(){
            _console.log('Photocell Serial Port Opend', 'server-success');
            _photocelPort.on('data', function(data){
                _console.log('Light' + data[0], 'socket-message');
                //_devFestServer.emit('DevFest.IoT.PI', {Command: 'PhotocellPushData', Values:[{SensorData: data[0]}]} )
                
            });
        });

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

    var messageHub = function (data){
        console.log('Kerberos catched: Clapp.Kerberos.Message');
        var values = data.Values;
        var command = data.Command;
        switch(command) {
            case "GiveYourHydraInformation":
                console.log(globals.HydraUUID);
                kerberos.emit('Clapp.Hydra.Information', {HydraSettings : globals.HydraSettings});
                break;
            case "GiveYourAllInformation":
                if(values.UUID == globals.HydraSettings.UUID){
                    kerberos.emit('Clapp.Hydra.Message', {Command: 'ThisIsMyOwnHydraInformation', Values : { HydraInformation : globals.HydraSettings, Beacons: globals.Beacons}});
                }
        }
    }

    return {
        Initialize: constructor
    }
}

module.exports = Socket;