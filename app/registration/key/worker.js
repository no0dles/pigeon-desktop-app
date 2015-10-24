var akeypair = require('akeypair');

process.on('message', function(keysize) {
    akeypair({bits: keysize}, function (err, result) {
        process.send({err:err, keyPair:result});
    });
});
