process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  process.env.PORT = 3000;
  process.env.LOGGER_LEVEL = 'debug';
  process.env.DB = 'DB_NAME_development';
  process.env.DB_URI = 'DB_URL_development';
} else if (process.env.NODE_ENV === 'production') {
  process.env.PORT = 5000;
  process.env.LOGGER_LEVEL = 'info';
  process.env.DB = 'DB_NAME_Production';
  process.env.DB_URI = 'DB_URL_Production';
}