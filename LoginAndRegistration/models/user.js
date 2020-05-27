var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); // for storing username and password(hash formate)

var User = new Schema({

    // Here username and password field is bydefaul in passportLocalMongoose.so i can not add this in my user Schema.
    email: {
        type: String,
        // required:true,
        // maxlength:20
    },
    mobile: {
        type: Number,
        // required:true,
        // maxlength:10
    },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',User);