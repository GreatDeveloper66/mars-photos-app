import dotenv from 'dotenv'
dotenv.config()
export const URL = process.env.REACT_APP_APIURL || 'http://localhost:5000'
