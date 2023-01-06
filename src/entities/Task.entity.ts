import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('Task')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ length: 100 })
  description: string;

  @Column('date')
  due_date: string;

  @Column('text')
  assignee: string;

  @Column('tinyint')
  status: boolean;

  @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
