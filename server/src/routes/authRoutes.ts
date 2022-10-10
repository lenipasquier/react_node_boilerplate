import express, {Request, Response, NextFunction} from "express";
import {AuthController} from '../controller/AuthController.js';
import {UserRoleController} from '../controller/UserRoleController.js';

const routes = express();
const authController = new AuthController();
const contentsController = new UserRoleController();

routes.use(function(req:Request, res:Response, next:NextFunction) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
routes.use("/", authController.router);
routes.use("/check/", contentsController.router);

export default routes;