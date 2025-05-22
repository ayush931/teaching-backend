import jwt from "jsonwebtoken"

export async function auth(req, res, next) {
  const token = req.cookies?.accessToken;
  console.log(token);

  if (!token) {
    return res.json({
      message: "Provide token"
    })
  }

  const decode = jwt.decode(token, process.env.JWT_PASSWORD);

  if (!decode) {
    return res.json({
      message: "Unauthorized access"
    })
  }

  req.userId = decode.id;
  next();
}