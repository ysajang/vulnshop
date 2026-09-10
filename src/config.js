// TEACHING MATERIAL: secrets must never live in source control.
// These are AWS's public documentation example values, not real credentials.
module.exports = {
  jwtSecret: 'supersecret123',
  awsAccessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  awsSecretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
  db: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'vulnshop'
  }
};
