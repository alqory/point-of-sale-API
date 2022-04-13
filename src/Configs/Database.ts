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
export const posDB = new Sequelize('postgres://cvytsjvhvalani:c971554fbabdedc5001eefc0c50b04e7d760174a69970002927e1b6f416ed4b3@ec2-34-207-12-160.compute-1.amazonaws.com:5432/d4uucgtu5ved42',{
    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized : false
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