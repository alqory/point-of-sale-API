import { Sequelize } from 'sequelize'
import { config } from 'dotenv';


config();

// Production db setting
// export const posDB = new Sequelize('posdb', 'postgres','123456',{
//     host : 'localhost',
//     dialect : "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//       },
// })

// Deployment setting
export const posDB = new Sequelize(
    process.env.NODE_ENV === 'production' ? `${process.env.DATABASE_URL}` :
    `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
    ,
    
    // If development mode, remove or ignore dialectOptions
    {
        dialectOptions : {
         ssl: {
             require: true,
             rejectUnauthorized: false
         }
        }
    })



export const dbAuthenticate = async (): Promise<void> => {
    try {
        await posDB.authenticate();
        console.log('Database connected . . . ');
        
    } catch (error) {
        console.log(error);
        
    }
}