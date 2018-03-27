var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    db = require('../models')

//Serialize Sessions creates the cookie, maybe change?
passport.serializeUser(function(user, done) {
    done(null, user);
});

//Deserialize Sessions reads the cookie
passport.deserializeUser(function(user, done){
    db.User.fine({where: {id: user.id}}).success(function(user){
        done(null, user);
    }).error(function(err){
        done(err, null)
    });
});

//For Authentication Purposes
passport.use(new LocalStrategy(
    function(username, password, done){
        db.User.find({where: {username: username}}).success(function(user){
            passwd = user ? user.password : ''
            isMatch = db.User.validPassword(password, passwd, done, user)
        });
    }
));