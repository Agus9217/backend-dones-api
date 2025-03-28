import { Request, Response } from "express";
import { LeaderChecklistGetService, LeaderChecklistPostService } from "../services/leader-checklist.service";

export const LeaderChecklistGetController = async (
  _req: Request,
  res: Response
) => {
  try {
    const data = await LeaderChecklistGetService();
    if (data.length === 0) {
      res.send({ message: "No checklist found" }).status(204);
      return;
    }
    res.send({ status: "OK", questions: data }).status(200);
  } catch (error: any) {
    res.status(500).send({ status: "FAILED", data: error.message });
  }
};

export const LeaderChecklistPostController = async (req: Request, res: Response) => {
  const checklist = req.body;
    try {
      const data = await LeaderChecklistPostService(checklist);
      res.send({ status: "OK", questions: data }).status(200);
    } catch (error: any) {
      res.status(500).send({ status: "FAILED", data: error.message });
    }
}