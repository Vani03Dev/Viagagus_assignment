import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { User } from '../entities/User.entity';

@Entity('Team')
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  assignee: string;

  @Column('text')
  members: string;

  @Column({ length: 100, nullable: true })
  createdAt: string;

  @Column({ length: 100, nullable: true })
  updatedAt: string;
}
