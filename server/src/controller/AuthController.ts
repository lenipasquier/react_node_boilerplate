import {Router, Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';
import 'dotenv/config';

export class AuthController {

    public router:Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async signup(req:Request, res:Response) {       
    }
   
    public async signin(req:Request, res:Response) {       
    }

    private async checkDuplicateEmail(req:Request, res:Response, next:NextFunction) {       
    }

    public routes() {
        this.router.post(
            "/signup",
            (req, res, next) => this.checkDuplicateEmail(req,res,next),
            (req, res) => this.signup(req,res)
        );
        this.router.post("/signin", (req, res) => this.signin(req,res));
    }
}