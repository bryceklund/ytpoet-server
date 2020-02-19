module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || 'swag420',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://bryce@localhost/ytpoet',
    CLIENT_ORIGIN: 'https://ytpoet.now.sh/'
}