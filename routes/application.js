//this checks if its authenticated
exports. IsAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        next();
    }
    else {
        next(new Error(401));
    }
}
//this is to logout successfully
exports.destroySession = function(req, res, next) {
    req.logOut();
    req.Session.destroy()
    res.redirect('/');
}