function PhotocellController(dependencies) {

    /// Dependencies   
    var _mongoose;

    /// Properties
    var _entity;

    var constructor = function () {
        _mongoose = dependencies.mongoose;

        _entity = require('../Models/Photocell')(dependencies);
        _entity.Initialize();
    }

    var createPhotocell = function (data, callback) {

        var photocell = new _entity.GetModel()(
            {
                Brightness: data.Brightness
            });

        photocell.save().then(function (result) {
            // When database return a result call the return
            callback();
        })
    }

    var deletePhotocell = function (data, callback) {
        _entity.GetModel().findOneAndRemove(data, function (err, result) {
            callback(result);
        })
    }

    var getPhotocellById = function (data, callback) {
        _entity.GetModel().findOne({ "_id": data }, function (err, result) {
            if (err) console.log(err);

            callback(result);
        })
    }


    var getAllPhotocell = function (data, callback) {
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
        CreatePhotocell: createPhotocell,
        DeletePhotocell: deletePhotocell,
        GetPhotocellById: getPhotocellById,
        GetAllPhotocell: getAllPhotocell,
        Entity: getEntity
    }
}

module.exports = PhotocellController;