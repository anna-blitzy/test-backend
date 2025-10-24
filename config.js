module.exports = {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development',
    database: {
        url: process.env.DATABASE_URL || 'sqlite::memory:'
    }
};
