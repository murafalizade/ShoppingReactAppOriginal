const jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {
    const token = req.header('Header-Token');
    if (!token) return res.status(401).send("Access Denied");
    try {
        const admin = await jwt.verify(token, process.env.SECRETKEY);
        if (!admin.role) return res.status(401).send("Access Denied");
        req.user = admin;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
}