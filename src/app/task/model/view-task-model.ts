import { Task } from "./task";
import { TaskViewModel } from "./task-view-model";

export class ViewTaskModel {
    ProjectID?: number
    ProjectName?: string
    TaskList : TaskViewModel[]
    SortBy? : string
    constructor() {
    }
}
