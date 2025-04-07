import { Request, Response } from "express";
import { IntegralData } from "../types";

import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Add Gemini api key to .env file");
}
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askIntegral(req: Request, res: Response) {
  const { func, lowerBound, upperBound }: { func: string; lowerBound: number; upperBound: number } = req.body;

  const prompt = `Explain to me how the integral of the following function works and the math behind it (Riemann Sum). My function is: ${func}, the lowerbound is: ${lowerBound}, the upperbound is: ${upperBound}. Limit yourself to 150 for me to better understand.`;

  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: prompt,
    config: {
      maxOutputTokens: 225,
      temperature: 0.3,
      systemInstruction: "You are a calculus 1 tutor. You will brielfy summarize the integral asked in the context of a Riemann Sum to a student. The student has a program to let them visualize their function that has their function graphed and they can move a slider to change the amount of rectangles in the Riemann Sum. Try to limit yourself to 150 words. You should use html tags for math symbols, instead of '^' use <sup></sup> and instead of '/' for fractions you can use &frasl;"
    },
  });

  res.status(201).json({ message: response.text });
  try {
  } catch (error: any) {
    console.error("Gemini API Error", error);
    res.status(500).json({ message: "Something went wrong with Gemini API" });
  }
}

export async function askDerivative(req: Request, res: Response) {
  return 1;
}
