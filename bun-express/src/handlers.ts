import type { Request, Response } from "express";

export async function hello(req: Request, res: Response) {
  res.status(200).send({
    status: "Success",
    message: "Success get data",
    data: "Hello from express with bun",
  });
}
