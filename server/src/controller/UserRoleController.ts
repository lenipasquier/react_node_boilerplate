import { Router, Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

export class UserRoleController {

    public router:Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async checkRole(req:Request, res:Response) {
        //TODO GET USER FROM DB AND RETURN ACTUAL ROLE
        return res.status(200).send("ROLE_USER");
    }

    public routes() {
        this.router.get(
            "/",
            (req, res, next) => this.verifyToken(req,res,next),
            (req, res) => this.checkRole(req,res)
        );
    }

    private verifyToken(req:Request, res:Response, next:NextFunction) {
        let token = req.header('x-access-token');
        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }
        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            // @ts-ignore
            req.userId = verified.id;
            next();
        } catch (error) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
    }

}