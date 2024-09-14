import admin from 'firebase-admin';

const credentials = {
  "type": "service_account",
  "project_id": "backdoor-pog",
  "private_key_id": "2b380e9eb6697f2d5ec9175c69303f751e81631f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCzNHGdiLDbahys\ncQq6TCDRkTjxYYpn0QBSr68ikVmRIbra3MWt05VZFvfJf8Y90F6kSGlpe0DOhyzg\nxJ1YIRUw8WUAFEt5zPZ6ULNQd1iZSwfO57WFo7TOTZW8im6YU2p9c6s8NkWSPcXe\nVi/8hNcHe9kgC0+oOLGecB0amC29Yu6cIIXkVrfdqYmEh2NftCQnblQ50wkgENPU\n+Pu2+X8or5NN9ovE0TD+OzMDrt9BwBN/NV59s4aXmTAYOcg4jrxVb+pWmdQHPW5A\nPZatUhVYHQ3Q4nVEI1BdiKCGkIQrSG6+eNvmpOM8SH8bGvIdkykMxjFRiJ2E+93N\n654MSdeJAgMBAAECggEAIGOZKVTcSjvqhMxFmRhLUjVCKnZrsonW2hsAt2m324BS\nKl5+qAU22AxLqrKaXO+9O0oPK05ojytlVBaVLamFD/yBObtxTMlbvw246xE3BTXH\naoD8kPPeqO7i4lnO1V82PwhZ6Z8RgfYCPkYrlCNaTfL3clA5DHl6uN0glX7tvW3H\nDUN821P6Cs2vl1Y+RPGhgaDeUDiutd4APOMVE4VMPtJlP2O+hK5Z5losunsTqL6Z\nppvaRu1TcuXW9I8ToRdyzGs2Nw1klSWO/HPNdBGNb2TC5dMGdboe6notrpxFPIM3\n6VVRB7AERBb5HmQqyF9iblFdYo5Sx3aI5SU6m4FiEQKBgQDzb0eKM5svN75NvWrF\nRw/ReSC5cU+1C2zjl+1alEXmYWWDMYZbu/bieHfgGhdjKArQZMM7+dVVsZa2VgeD\nEwByvI9cS3P94b3JvMIUA7bPcHEfM10mv6SsUCQ1YxxPSp1plXPx8wIvJEtmW648\nRQpVN83HT4A5jp9t39llZdSXtQKBgQC8dHAo826r97pheC/AzUgBm1dERDkXS16U\n6A7kyo7GLwl7uW57c/eUQDZdjaKBDbUfuBkdjIsKJHaq5ZNI1ru9rkX39e7MINPG\n9rQHc9WjNQ/MEN5HeixIiDbKhNzK8BbsE+ukGZuShvax4tHaYYLHvEAF0GqyzzFE\n8xqtV4H9BQKBgQDzR1dwZwiEVKoLmOvWQaEuT2YDzZjBrqxgexmKdzmv9c/0H49N\np/gf9hKe1JRg1MiR4NE35AJuhG7AxBL3zAqbn5OJwiImK+52aPxv8hJFFvMGIlfK\nfKV+Sw0UiXrmRwQvW1unBZs+L4Bmx+LFep3L8lvk/q9/VehAbwAclHq0LQKBgQCm\n1KlqBz7FLBQqLzyPAOuqyHrzqzWjQoyjY9+zeQH1vjQ1/E0rKtlUu5elMDpY5uqd\n/tr1BrMbsnX/CiddxwMCgyHbxjK1MKZqL4HmSwwoZFPswk4UlrpXJ4bht8bCPNL+\nARCNAEJx79q6VWKTYdllumgu/XdHfhZOxKusIpinhQKBgQCBQrErc1JBktanImRu\n/h8UnvtSmtvuG8g3h5hKPk0trYTXsD4qubStuL1uptW/UYRb2nZ2T1Y5VsDzwQkQ\ns6cYWvT5MKVts7cRqA9JFeyDCOU4em+kOZmjZJjSbpRGvtIk6fBCZKZYQZhcH3SF\n2yBdTxKznz96QfPqKlL0hIldDA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-upf32@backdoor-pog.iam.gserviceaccount.com",
  "client_id": "110574003652659571152",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-upf32%40backdoor-pog.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = firebaseApp.firestore()

export default firebaseApp
export {db}