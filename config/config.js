// SECURITY WARNING - MONGO URL SHOULD BE AN ENVIRONMENT VARIABLE AT PRODUCTION

const config = {
  env: "development",
  port: 10000,
  jwtSecret: "YOUR_secret_key",
  mongoUri:
    "mongodb+srv://lriches1:elKfSPwQX7osZJV7@cluster0.lghk0pa.mongodb.net/OnlineShop?retryWrites=true&w=majority",
};
export default config;
