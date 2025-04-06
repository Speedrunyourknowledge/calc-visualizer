import { Request, Response } from "express";
import { IntegralData } from "../types";

export async function askIntegral(req: Request, res: Response) {
    const { equation, lowerBound, upperBound }: IntegralData = req.body;

}

export async function askDerivative(req: Request, res: Response)
{
    return 1;
}