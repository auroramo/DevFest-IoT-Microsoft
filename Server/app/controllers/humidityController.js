function HumidityController(dependencies) {

    /// Dependencies   
    var _mongoose;

    /// Properties
    var _entity;

    var constructor = function () {
        _mongoose = dependencies.mongoose;

        _entity = require('../Models/Humidity')(dependencies);
        _entity.Initialize();
    }

    var createHumidity = function (data, callback) {

        var humidity = new _entity.GetModel()(
            {
                Temperature: data.Temperature,
                Humidity: data.Humidity
            });

        humidity.save().then(function (result) {
            // When database return a result call the return
            callback();
        })
    }

    var deleteHumidity = function (data, callback) {
        _entity.GetModel().findOneAndRemove(data, function (err, result) {
            callback(result);
        })
    }

    var getHumidityById = function (data, callback) {
        _entity.GetModel().findOne({ "_id": data }, function (err, result) {
            if (err) console.log(err);

            callback(result);
        })
    }


    var getAllHumidity = function (data, callback) {
        _entity.GetModel().find({}, function (err, result) {
            if (err) console.log(err);

            callback(result);
        })
    }

    var getEntity = function () {
        return _entity;
    }

    return {
        Initialize: constructor,
        CreateHumidity: createHumidity,
        DeleteHumidity: deleteHumidity,
        GetHumidityById: getHumidityById,
        GetAllHumidity: getAllHumidity,
        Entity: getEntity
    }
}

module.exports = HumidityController;