import { Checklist } from "../models/checklist.model";
import { MemberChecklist } from "../models/member-checklist";
import { User } from "../models/user.model";

export interface Data {
  status?: string | undefined;
  questions?: Question[] | undefined;
}

export interface Question {
  _id: string;
  title: string;
  clerkId: string
  items: Item[] | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export interface Item {
  number: number;
  text: string;
  score: number[] | null;
}

export const ChecklistGetService = async () => {
  const data = await Checklist.find();

  if (!data) {
    throw new Error("Checklist not found");
  }

  return data;
};

export const ChecklistPostService = async (checklist: Data) => {

  if (!checklist.questions || checklist.questions.length === 0) {
    throw new Error("No hay preguntas en el checklist.");
  }

  const data = await Promise.all(
    checklist.questions?.map(async (question) => {
      const user = await User.findOne({ clerkId: question.clerkId });

      if (!user) {
        throw new Error(`Usuario con clerkId ${question.clerkId} no encontrado`);
      }

      const itemDetails = question.items?.map((item) => ({
        number: item.number,
        text: item.text,
        score: Number(item.score),
      }));

      return {
        user: user._id,
        title: question.title,
        items: itemDetails,
      };
    })
  );

  return MemberChecklist.create(data)
};
