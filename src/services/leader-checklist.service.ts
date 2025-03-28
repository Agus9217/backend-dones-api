import { LeaderChecklistResult } from "../models/leader-checklist-result.model";
import { LeaderChecklist } from "../models/leader-checklist.model";

export interface LeaderData {
  status?: string | undefined;
  questions?: Question[] | undefined;
}

export interface Question {
  _id: string;
  title: string;
  items: Item[] | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export interface Item {
  letter: string;
  text: string;
  score: number[] | null;
}

export const LeaderChecklistGetService = async () => {
  const data = await LeaderChecklist.find();
  return data;
};

export const LeaderChecklistPostService = async (checklist: LeaderData) => {
  const data = checklist.questions?.map((question) => {
    const itemDetails = question.items?.map((item) => {
      return {
        letter: item.letter,
        text: item.text,
        score: Number(item.score),
      };
    });
    return {
      title: question.title,
      items: itemDetails,
    };
  });

  return LeaderChecklistResult.create(data);
};
