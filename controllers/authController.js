const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
const User = require("../models/User");
const RefreshToken = require ("../models/RefreshToken");


const JWT_SECRET = "secret_key";
const JWT_EXPIRATION = "15m"; // Expira em 15 minutos 
const REFRESH_TOKEN_EXPIRATION = "7d"; // Expira em 7 dias


// função do login

exports.login = async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({where:{email}});

    if(! user)
        return res.status(400).json({message: "Usuário não encontrado"});
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword)
        return res.satatus(400).json({massege:"Senha incorreta"});

    const token = jwt.sign({id: user.id},JWT_SECRET,{expiresIn: JWT_EXPIRATION});
    const refreshToken = await RefreshToken.create({
        token:jwt.sign({id: user.id}, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION}),
        userId: user.id
    });
    res.json({token, refreshToken: refreshToken.token});
};
exports.refreshToken = async (req, res)=>{
    const {refreshToken} = req.body;
    if(!refreshToken) 
        return res.status(400).json({message: "Refresh token não fornecido"})

    const storedToken = await RefreshToken.findOne({where:{token:refreshToken}});
    if(!storedToken)
        return res.status(400).json({message:"Refresh token inválido"});
    try {
        const payload = jwt.verify(storedToken.token, JWT_SECRET);
        const newToken = jwt.sign({id: payload.id}, JWT_SECRET, {expiresIn: JWT_EXPIRATION})
        res.json({token:newToken});
    } catch (err) {
        res.status(403).json({message:"Token inválido ou expirado"});
    
    }
};