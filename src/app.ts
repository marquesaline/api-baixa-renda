import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import methodOverride from 'method-override';
import swaggerUi from 'swagger-ui-express';

import indexRouter from './routes/index.routes';
import calculationRouter from './routes/calculation.routes'; 
import db_connection from './database/init';

// const PORT = process.env.PORT || 3000;

class App {
    public app: express.Application;

    constructor () {
        this.app = express();

        db_connection.sync();
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(cors({
            allowedHeaders: [
                "Origin",
                "X-Requested-With",
                "Content-Type",
                "Accept",
                "X-Access-Token",
            ],
            origin: true,
            credentials: true,
            preflightContinue: false,
        }));
        this.app.use(express.json());
        this.app.use(methodOverride('_method'));
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.setHeader("Content-Type", "application/json");
            res.setHeader("Access-Control-Allow-Credentials", 'true');
            next();
        });

        this.app.use('/', indexRouter);
        this.app.use('/low-income-calc', calculationRouter);
        //this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    }

}

export default App;