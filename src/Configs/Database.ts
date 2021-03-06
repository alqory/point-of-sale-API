import { Sequelize } from 'sequelize'
import { config } from 'dotenv';
config();

// Develpoment db setting
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

// Production setting
export const posDB = new Sequelize(`${process.env.DATABASE_URI}`,{
    dialectOptions : {
        ssl :  {
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