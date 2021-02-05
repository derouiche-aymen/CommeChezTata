const jwt = require ('jsonwebtoken');

const User = require ('../Models/userModel');

const isAuth = async (req,res,next)=>{
    try {
        const token = req.headers['auth-token'];
        if (!token)
            return res.status(401).send({msg:'No token'});
        const decoded = await jwt.verify(token, config.get("SECRETKEY"));

        const user= await User.findById(decoded.id)
        if (!user){
            return res.status(401).send({msg:'denied'});
        }
        req.user=user;
        next();
    } catch (error) {
        return res.status(400).json({msg:'Token not valid'})
    }
};

module.exports = isAuth;