import { Moment } from "moment";

export default interface Todo {
  id: number
  description: string
  completed: boolean
  createdAt: Moment
}