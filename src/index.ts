import express, { Express } from 'express';
import {dbAuthenticate} from './Configs/Database';
import { config } from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors'
import { router } from './Routes/routes';
import { rateLimit } from 'express-rate-limit';

const app:Express = express();
const PORT:number | string = process.env.PORT || 8080 

function main(): void{


    config()

    dbAuthenticate();
    app.use(express.json())
    app.use(compression())
    app.use(helmet())
    app.use(cors({
        origin : '*'
    }))
    app.use(router)

    if(process.env.NODE_ENV !== 'production') {
        app.use(morgan("dev"))
    }else{
        return;
    }

    app.use(rateLimit({
        windowMs : 10000,
        max      : 10,
        message   : 'Too many request, try again letter'
    }))

    app.get('/', (req, res) => {
        res.status(200).send('Welcome to my API')
    })

    

    app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))
}

main();

