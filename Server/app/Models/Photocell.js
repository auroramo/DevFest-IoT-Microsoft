function Click(dependencies){

    /// Dependencies
    var _mongoose;
    var _schema;

    /// Properties
    var _model;

    var constructor = function(){
        _mongoose   = dependencies.mongoose;
        _schema     = _mongoose.Schema;

        _model = _mongoose.model('Photocell', new _schema(
            {
                Brightness: Number
            }, {collection: 'Photocell'}
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