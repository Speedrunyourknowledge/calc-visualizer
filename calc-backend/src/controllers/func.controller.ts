import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";
import { IntegralData } from "../types";

// will need middleware to check if func is valid and unique to specific topic
export async function createIntegral(req: Request, res: Response)
{   
    const { equation, lowerBound, upperBound, topic }: IntegralData = req.body;
    const userId = req.params.id;

    try {
        const newFunc = await prisma.func.create({
            data: {
                equation,
                lowerBound,
                upperBound,
                topic,
                userId,
            },
        })
        res.status(201).json(newFunc);
    } catch (err) {
        res.status(500).json({message: "Failed to create function", error: err})
    }
}

export async function getUserFuncs(req: Request, res: Response)
{
    const userId = req.params.id;
    
    try {
        const funcs = await prisma.func.findMany({
            where: {userId},
        });
        res.status(200).json(funcs);
    } catch (err) {
        res.status(500).json({message: "Failed to funcs", error: err})
    }
}