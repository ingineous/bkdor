import admin from 'firebase-admin';

const credentials = {
  "type": "service_account",
  "project_id": "backdoor-pog",
  "private_key_id": "45b8ba794b83e664ac74ef959143a056ccd342c3",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1xbb9V1RBftA5\nkntuP8fNCi3hse38ZLfnfU4degAUsAMh8nrNujRC8qmzr+6plW8ndvWH+rpb8z/B\nMO/tVL3m30nqJOEu4fupXehA30bb+4x3URo0uAxqLuCEuIeOyrRmDJZ7l7Y6Cu2P\ndHYoapMaIzEpCS6T5PRbimVhFwXfUvZsNCPHnVE66eYK1qps0RN4uKwguIHlBmHm\nm++GNOGeGrYH8FA380xhP/jk8aar8As7rUcV4fbiCku67tDmSWy9Sg3VobXIVUI6\nJ3cxDaGO+g4GIaZWo+8hFosTj8O/7teQ6ESeeLXbvtMUlXKnJKyUODlGMf0DVFwT\ncQebJvJdAgMBAAECggEAEfuG4GZI0BfvGpr6ugv2RLsakebr39nI9c5IMZNVubY2\nASA/dOXUcMEX985SYpWFgxZ6MOMll54ncwHX4pdNGC+D3PWcD2rM3lMLfIt6M54d\npdowqQGCPOj5TjgBNSeplCTvqDd4kCJvoQ8I93OfrOjJXsFpSblPUVUONX41FwQv\ngNZPy6o8Df1kZdNfh9F9U3Q3c1N8r4sB2yUYEPdujbvlw90doRBJOc/VwDuaZu2A\nf+bjmnmlkhhk9lb90CS9FriXYQWygn7ErbtxprpzAeZct40UCoPGzdJ0YDr4ZB7m\noojyuYtIon2tRodKkFZUNvpoJcPcm+niDbbJ2IElYwKBgQD4T89vW8UhQ3HGqbu1\ni5hgePWTRrHhBSdf9KS47dgGgR4CGGv6foUEdyQyxnjTD5HhJOyhgWo1eJUY4fIe\nwSZqb/r1kTXqmPAkn/S/fYaD60M55ixaLjlXivqx1O6a0fCyGIKc+WfD03f6c4Gx\n8+iUBc+/MKqp9TgzQI1o82LlVwKBgQC7Zn52oN8WqvMfT72y88dQEm/OvKbRZnKW\nEQrPJHmKdXl+qQV9dXD0V0gc52+U8nfkQ4NTnWGpdG+b932v1HKKw2Gb9ujIHhHk\n+yX39MC3AS4Rd8zhkJq2KdnSdzemzcL33ip/Df8wn+z86F1KJE3IeAj/YM5c1iP6\nkD61fFpBawKBgGrIL4VM6qYWUdxD66PzpxB9k+XEtgP1amxaUWfxaD/L0LLH+89a\nDyvPbHKlZRomjO5MKbJ+a8UY2M09hRhyqWmGRF7MFmqPYF3vp5mdinY6estwT0xs\nql4aNxq4Xe+YLrD311tX6aaNzv+WIoT7Rd457Y/jhtDV0lg//0/Nso67AoGAKVeR\nKqaO0Ldh71RuKx5wqA+JLvibbLLHMKgN1Gjdj1gfN3weQ/E2vBDNTeMY0Kk1Hdxv\nCnE77GBNhwDwb2vU4Rv9WqT78boAhJ2LYMpUAYt3GE9vmYuHNgzBixbV5iyaiIgw\no9r4o0eExr6UZhjgOAuTIJPAsuZjBZHw46TNXIUCgYEA9BP8zsJfAmqgjCPiWdn8\nc0sH00xfpxKmWXf3P+olg1cGIQs2e8fbdJ82lcHF/DujnmDgLTRmpK0qaBDovoMz\nDHkaRr3UOo6WBQLyp3AfFruwDBeE4Wfh7/eyWYmASmLG2tKPKH95Y4ZyDc7DFiYt\nvUrfEa+S1vJAaviNO8khyMw=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-upf32@backdoor-pog.iam.gserviceaccount.com",
  "client_id": "110574003652659571152",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-upf32%40backdoor-pog.iam.gserviceaccount.com"
}


const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = firebaseApp.firestore()

export default firebaseApp
export {db}