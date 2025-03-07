import { NextFunction, Request, Response } from "express";

// This file would hold logic that gets executed when the users route is called

function getUsersHandler(req: Request, res: Response, next: NextFunction){
    console.log(req);
    res.send("All users route");
}

export default getUsersHandler