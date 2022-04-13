import express, { Express } from 'express';
import {dbAuthenticate} from './Configs/Database';
import { config } from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors'
import { router } from './Routes/routes';
import { limitRequest } from './Security/rateLimit';

const app:Express = express();
const PORT:number | string = process.env.PORT || 8080 

function main(): void{


    config()

    dbAuthenticate();
    app.use(express.json())
    app.use(compression())
    app.use(morgan("dev"))
    app.use(helmet())
    app.use(cors({
        origin : '*'
    }))
    app.use(router)

    app.use(limitRequest)

    app.get('/', (req, res) => {
        res.status(200).send('Welcome to my API')
    })

    app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))
}

main();

