import { Router } from "express";
import {
  UserCreateController,
  UserDeleteController,
  UserFindByIdController,
  UserGetController,
  UserUpdateController,
} from "../controllers/user.controller";
import {
  ChecklistGetController,
  ChecklistPostController,
} from "../controllers/checklist.controller";
import {
  LeaderChecklistGetController,
  LeaderChecklistPostController,
} from "../controllers/leader-checklist.controller";

export const router = Router();

router
  .get("/user", UserGetController)
  .get("/user/:id", UserFindByIdController)
  .post("/user", UserCreateController)
  .put("/user/:id", UserUpdateController)
  .delete("/user/:id", UserDeleteController)
  .get("/checklist", ChecklistGetController)
  .post("/checklist", ChecklistPostController)
  .get("/leaderchecklist", LeaderChecklistGetController)
  .post("/leaderchecklist", LeaderChecklistPostController);
