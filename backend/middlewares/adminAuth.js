const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No Token" });

  try {
    const decoded = jwt.verify(token, process.env.MY_SUPER_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};
