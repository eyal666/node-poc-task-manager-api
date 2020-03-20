module.exports = {
  port: process.env.PORT,
  sendgridAPIKey: process.env.SENDGRID_API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  mongodbUrl: process.env.MONGODB_URL
}