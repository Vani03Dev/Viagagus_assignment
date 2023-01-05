import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('User')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100, nullable: true })
  createdAt: string;

  @Column({ length: 100, nullable: true })
  updatedAt: string;
}
