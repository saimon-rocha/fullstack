// console.log(process.env.DB_USERNAME);
module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    DB_PORT: process.env.DB_PORT,
    define:{
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
};