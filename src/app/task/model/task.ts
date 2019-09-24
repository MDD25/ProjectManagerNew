export class Task {
    constructor(
        public TaskID?: number,
        public Task?: string,
        public ParentID?: number,
        public ParentName?:string,
        public ProjectID?: number,
        public ProjectName?: string,
        public StartDate?: Date,
        public EndDate?: Date,
        public Priority?: number,
        public Status?: string
    ){}
}