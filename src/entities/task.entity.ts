import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";
import { UserEntity } from "./user.entity";

export enum TaskStatus {
  /**
   *  The task is yet to be started.
   */
  Pending = "pending",

  /**
   *  The task is currently being worked on.
   */
  InProgress = "inProgress",

  /**
   * The task has been finished.
   */
  Completed = "completed",

  /**
   * The task was due but not completed on time.
   */
  Overdue = "overdue",

  /**
   * The task has been cancelled and will not be completed.
   */
  Cancelled = "cancelled",
}

@Entity("task")
export class TaskEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ type: "varchar", nullable: true })
  title: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column()
  dueDate: Date;

  @Column({ type: "enum", enum: TaskStatus, default: TaskStatus.Pending })
  status: TaskStatus;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  user: UserEntity;
}
