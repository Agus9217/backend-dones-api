import { Request, Response } from "express";
import {
  ChecklistGetService,
  ChecklistPostService,
} from "../services/checklist.services";

export const ChecklistGetController = async (_req: Request, res: Response) => {
  try {
    const data = await ChecklistGetService();
    if (data.length === 0) {
      res.send({ message: "No checklist found" }).status(204);
      return;
    }
    res.send({ status: "OK", questions: data }).status(200);
  } catch (error: any) {
    res.status(500).send({ status: "FAILED", data: error.message });
  }
};

export const ChecklistPostController = async (req: Request, res: Response) => {
  const checklist = req.body;
  try {
    const data = await ChecklistPostService(checklist);
    res.send({ status: "OK", questions: data }).status(200);
  } catch (error: any) {
    res.status(500).send({ status: "FAILED", data: error.message });
  }
};
