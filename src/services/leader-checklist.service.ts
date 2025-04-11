import { LeaderChecklistResult } from "../models/leader-checklist-result.model";
import { LeaderChecklist } from "../models/leader-checklist.model";
import { User } from "../models/user.model";

export interface LeaderData {
  status?: string | undefined;
  questions?: Question[] | undefined;
}

export interface Question {
  _id: string;
  title: string;
  clerkId: string;
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
  if (!checklist.questions || checklist.questions.length === 0) {
    throw new Error("No hay preguntas en el checklist.");
  }

  const data = await Promise.all(
    checklist.questions?.map(async (question) => {
      const user = await User.findOne({ clerkId: question.clerkId });

      if (!user) {
        throw new Error(
          `Usuario con clerkId ${question.clerkId} no encontrado`
        );
      }

      const itemDetails = question.items?.map((item) => {
        return {
          letter: item.letter,
          text: item.text,
          score: Number(item.score),
        };
      });
      return {
        user: user._id,
        title: question.title,
        items: itemDetails,
      };
    })
  );

  return LeaderChecklistResult.create(data);
};
