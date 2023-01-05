import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('Task')
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  description: string;

  @Column('date')
  due_date: string;

  @Column('text')
  assignee: string;

  @Column('tinyint')
  status: boolean;

  @Column({ length: 100, nullable: true })
  createdAt: string;

  @Column({ length: 100, nullable: true })
  updatedAt: string;
}
