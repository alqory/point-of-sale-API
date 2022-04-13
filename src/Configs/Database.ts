import { Sequelize } from 'sequelize'
import { config } from 'dotenv';


// config();

// Production db setting
export const posDB = new Sequelize('posdb', 'postgres','123456',{
    host : 'localhost',
    dialect : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
})

// Deployment setting
// export const DeploymentDB = new Sequelize(`${process.env.DATABASE_URI}`,{
//     dialectOptions : {
//         ssl : {
//             require : true,
//             rejectUnauthorized : false
//         }
//     }
// })
// `posgress://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_HOST}/${process.env.DB_NAME}`,

export const dbAuthenticate = async (): Promise<void> => {
    try {
        await posDB.authenticate();
        console.log('Database connected . . . ');
        
    } catch (error) {
        console.log(error);
        
    }
}