// TEACHING MATERIAL: secrets must never live in source control.
// These are AWS's randomly generated and non-functional.
module.exports = {
  jwtSecret: 'supersecret123',
  awsAccessKeyId: 'AKIA3XQK7TZQ9PLMWVBN',
  awsSecretAccessKey: 'kR8vT2mNqZ4bXwLpY7cA1sD6fG0hJ3eU9iO5rQxW',
  db: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'vulnshop'
  }
};
