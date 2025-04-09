import { NextFunction, Request, Response } from "express";
import path from 'node:path';
import { spawn } from 'child_process';

// This file would hold logic that gets executed when the users route is called

export function createGraph(req: Request, res: Response, next: NextFunction){
    const func = req.body.func
    const lowerBound = req.body.lowerBound.toString()
    const upperBound = req.body.upperBound.toString()

    // run python file to generate graph data
    const process = spawn('.venv/bin/python', ['graph-gen/graph-integral.py', func, lowerBound, upperBound], 
      {
        cwd: path.resolve(__dirname, "../../")
      }
    );

    const chunks:any = []; // holds data stream

    process.on('error', function(e) {
      res.status(422).send(e);
    })

    // spawned process is asynchronous
    process.stdout.on('data', function(data: any) {

      chunks.push(data)
    })

    process.stdout.on('close', function(data: any) {

      const prettyStr: string = Buffer.concat(chunks).toString("utf-8")

      if(prettyStr === ''){
        res.status(422).send('error graphing function')
      }
      else{
        res.status(200).send(prettyStr);
      }
    })
}

export function createDerivGraph(req: Request, res: Response, next: NextFunction){
  const func = req.body.func
  const lowerBound = req.body.lowerBound.toString()
  const upperBound = req.body.upperBound.toString()

  // run python file to generate graph data
  const process = spawn('.venv/bin/python', ['graph-gen/graph-deriv.py', func, lowerBound, upperBound], 
    {
      cwd: path.resolve(__dirname, "../../")
    }
  );

  const chunks:any = []; // holds data stream

  process.on('error', function(e) {
    res.status(422).send(e);
  })

  // spawned process is asynchronous
  process.stdout.on('data', function(data: any) {

    chunks.push(data)
  })

  process.stdout.on('close', function(data: any) {

    const prettyStr: string = Buffer.concat(chunks).toString("utf-8")

    if(prettyStr === ''){
      res.status(422).send('error graphing function')
    }
    else{
      res.status(200).send(prettyStr);
    }
  })
}
