import dotenvFlow from 'dotenv-flow';
(dotenvFlow as { config: () => void }).config();

console.log(process.env)

export default {
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  SERVER_URL: process.env.SERVER_URL
}
