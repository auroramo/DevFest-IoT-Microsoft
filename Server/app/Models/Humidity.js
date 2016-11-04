function Click(dependencies){

    /// Dependencies
    var _mongoose;
    var _schema;

    /// Properties
    var _model;

    var constructor = function(){
        _mongoose   = dependencies.mongoose;
        _schema     = _mongoose.Schema;

        _model = _mongoose.model('Humidity', new _schema(
            {
                Temperature: Number,
                Humidity: Number
            }, {collection: 'Humidity'}
        ));
    }

    var getModel = function(){
        return _model;
    }

    return {
        Initialize : constructor,
        GetModel: getModel
    }
}

module.exports = Click;