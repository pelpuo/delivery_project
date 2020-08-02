const verify = (req,res,next) =>{
    if(req.isAuthenticated()){
        return next();
    }
    res.json({message:"User not logged in"}) 
}

const verifyAdmin = (req,res,next) =>{
    if(req.isAuthenticated() && res.locals.user[0].dataValues.role == process.env.ADMIN){
        return next();
    }
    res.json({message:"User not logged in"}) 
}


module.exports.verify = verify;
module.exports.verifyAdmin = verifyAdmin;