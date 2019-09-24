import { Task } from "./task";
import { User } from "src/app/user/User";

export class TaskViewModel {
    TaskID?: number
    TaskName?: string
    ProjectID?: number
    ProjectName?: string
    IsParentTask?: boolean
    Priority?: number
    ParentTaskID?: number
    ParentTaskName?: string
    StartDate?: Date
    EndDate?: Date
    UserID?: number
    UserName?: string
    Status?: string
    constructor() {
        this.IsParentTask = true;
    }
}
