function Cross(dependencies){
    
    var _socket;
    var _mongoConnectionString;
    var _flingerSecretJWT;

    var getSocket = function(){
        return _socket;
    }

    var getMongoConnectionString = function(){
        return _mongoConnectionString;
    }

    var setMongoConnectionString = function(connectionString){
        _mongoConnectionString = connectionString;
    }

    var setSocket = function(socket){
        _socket = socket;
    }

    var getFlingerSecretJWT = function(){
        return _flingerSecretJWT;
    }

    var setFlingerSecretJWT = function(secret){
        _flingerSecretJWT = secret;
    }

    return{
        SetSocket : setSocket,
        GetSocket : getSocket,
        SetMongoConnectionString : setMongoConnectionString,
        GetMongoConnectionString : getMongoConnectionString,
        SetFlingerSecretJWT : setFlingerSecretJWT,
        GetFlingerSecretJWT : getFlingerSecretJWT
    }
}

module.exports = Cross;