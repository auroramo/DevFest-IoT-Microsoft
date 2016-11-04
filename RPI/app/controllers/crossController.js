function Cross(dependencies){
    
    var _serverUri;

    var getServerUri = function(){
        return _serverUri;
    }

    var setServerUri = function(uri){
        _serverUri = uri;
    }

    return{
        SetServerUri : setServerUri,
        GetServerUri : getServerUri
    }
}

module.exports = Cross;