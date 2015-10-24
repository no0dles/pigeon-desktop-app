var crypto = require('crypto');
var akeypair = require('akeypair');
var Promise = require("bluebird");
var cp = require('child_process');

var keyPairProcess = null;

module.exports.getKeyPair = function (keysize) {
    if(keyPairProcess != null) {
        keyPairProcess.kill('SIGINT');
    }

    var defer = Promise.defer();

    keyPairProcess = cp.fork('./app/registration/key/worker');

    keyPairProcess.on('message', function(result) {
        if(result.err) {
            defer.reject(result.err);
        } else {
            defer.resolve(result.keyPair);
        }
    });

    keyPairProcess.send(keysize);

    return defer.promise;
};
