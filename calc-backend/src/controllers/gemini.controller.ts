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

  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 500,
        temperature: 0.3,
        systemInstruction: "You are a calculus 1 tutor. You will brielfy summarize the integral asked in the context of a Riemann Sum to a student. The student has a program to let them visualize their function that has their function graphed and they can move a slider to change the amount of rectangles in the Riemann Sum. Try to limit yourself to 150 words. You should use html tags for math symbols, instead of '^' use <sup></sup>"
      },
    });
  
    res.status(201).json({ message: response.text });

  } catch (error: any) {
    console.error("Gemini API Error", error);
    res.status(500).json({ message: "Something went wrong with Gemini API" });
  }
}

export async function askDerivative(req: Request, res: Response) {
  const { func, lowerBound, upperBound }: { func: string; lowerBound: number; upperBound: number } = req.body;

  const prompt = `Explain to me how the derivative of the following function works and the math behind it (The tangent line). My function is: ${func}, the lowerbound is: ${lowerBound}, the upperbound is: ${upperBound}. Limit yourself to 150 for me to better understand.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 500,
        temperature: 0.3,
        systemInstruction: "You are a calculus 1 tutor. You will brielfy summarize the derivative asked in the context of a tangent line to a student. The student has a program to let them visualize their function that has their function graphed and they can move a slider to slide the tangent line around their function. Try to limit yourself to 150 words. You should use html tags for math symbols, instead of '^' use <sup></sup>"
      },
    });

    res.status(201).json({message: response.text})
  } catch (error) {
    console.error("Gemini API Error", error);
    res.status(500).json({ message: "Something went wrong with Gemini API" });
  }



}
