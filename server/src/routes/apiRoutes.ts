import express, {Request, Response} from "express";

const routes = express();


routes.get("/", (req:Request, res:Response) => {
    res.send('Backend API index');
});

export default routes;