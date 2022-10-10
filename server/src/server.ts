import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import chalk from 'chalk';
import 'dotenv/config';
import apiRoutes from './routes/apiRoutes.js';
import authRoutes from './routes/authRoutes.js';

class Server {

    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.SERVER_PORT);
        this.initializeModels().then(async () => {
            this.initializeMiddlewares();
            this.initializeRoutes();
        });
    }

    private async initializeModels() {
        //TODO
    }

    private initializeMiddlewares() {
        console.log('Environment is: '+process.env.NODE_ENV);
        let corsOptions = {};       
        if(process.env.NODE_ENV === 'production') {
            console.log('CORS origin lock enabled');
            corsOptions = {
                origin: process.env.PUBLIC_URL
            };
        }
        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.json());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        console.log(chalk.green('Express config is OK'));
    }

    private initializeRoutes() {
        this.app.use('/api', apiRoutes);
        this.app.use('/auth', authRoutes);
        console.log(chalk.green('Routes initialized OK'));
    }

    // Boots the application
    public listen() {
        this.app.listen(this.port, () => {
            console.log(chalk.greenBright('Server running on port ' +this.port));
        });
    }
}

const server = new Server();
server.listen();