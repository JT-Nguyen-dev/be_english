const { Client } = require('pg');

export const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'englishcenter_management',
  user: 'postgres',
  password: 'postgres123',
});

client.connect((err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
  } else {
    console.log('✅ Successfully connected to database');
  }
});




