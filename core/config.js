let config = {
    dbHost: process.env.dbHost || 'localhost',
    dbPort: process.env.dbPort || '27017',
    dbName: process.env.dbName || 'test',
    serverPort: process.env.serverPort || 3000
}

export default config;