const config = {
    db: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dbname',
        port: 3306,
        connectionLimit: 10,
        connectTimeout: 60000
    },
    listPerPage: 10,
  };
  
  module.exports = config;