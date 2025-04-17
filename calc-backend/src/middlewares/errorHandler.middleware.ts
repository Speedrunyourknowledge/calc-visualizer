// Here would go middleware that handles error checking

import { NextFunction, Request, Response } from "express";

// at the end of every function in here should be a function call of next()
// this lets the middleware pass to the next piece of logic after its done

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    try {
        let error = {...err};

        error.message = err.message;
        console.error("middleware error: " + err);

        // check for specific error types
        // set error message, maybe error code and throw the new error


    } catch(error) {
        next(error);
    }

};

export default errorMiddleware