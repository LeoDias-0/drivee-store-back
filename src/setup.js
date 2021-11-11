import dotenv from 'dotenv'


const { NODE_ENV } = process.env

const path = (NODE_ENV === 'prod') ? '.env' : 

dotenv.config({
    path
})