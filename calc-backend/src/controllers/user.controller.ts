import { NextFunction, Request, Response } from "express";

// This file would hold logic that gets executed when the users route is called

export function getUsers(req: Request, res: Response, next: NextFunction){
    console.log(req);
    res.send("All users route");
}

