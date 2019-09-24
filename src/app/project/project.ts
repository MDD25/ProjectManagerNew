import { User } from "../user/User";

export class Project {
  constructor(
    public Priority?: number,
    public ProjectTitle?: string,
    public UserID?: number,
    public FirstName?: string,
    public Startdate?: Date,
    public Enddate?: Date,
    public ProjectID?: number,
  ) {
  }
}