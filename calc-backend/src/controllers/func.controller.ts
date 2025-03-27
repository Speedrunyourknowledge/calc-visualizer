import { Request, Response } from "express";
import prisma from "../lib/prisma";
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
    if(!userId) {
        return res.status(404).json({message: "Function ID is required"})
    }
    
    try {
        const funcs = await prisma.func.findMany({
            where: {userId},
        });
        res.status(200).json(funcs);
    } catch (err) {
        res.status(500).json({message: "Failed to get funcs", error: err})
    }
}

export async function deleteUserFunc(req: Request, res: Response)
{
    const functionId = req.params.id;

    try {
        const deletedFunc = await prisma.func.delete({
            where: {
                id: functionId,
            },
        })
        res.status(200).json({message: "Function deleted!"})
    } catch (err) {
        res.status(500).json({message: "Failed to delete function", error: err})
    }
}