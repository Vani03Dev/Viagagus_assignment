import { Injectable, HttpStatus, Body, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTask } from '../dtos/task.dto';
import { Task } from '../entities/Task.entity';
import { UpdateTaskDto } from 'src/dtos/taskupdate.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async update(id: number, task: UpdateTaskDto): Promise<any> {
    console.log('ID ::', id);
    const existingTask = await this.taskRepository.findOneBy({
      id: id,
    });

    if (!existingTask) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    // existingTask = { ...existingTask, ...task, updatedAt: new Date() };
    return await this.taskRepository.save(existingTask);
  }

  async create(task: Task): Promise<Task> {
    const createdProduct = this.taskRepository.create(task);
    return await this.taskRepository.save(createdProduct);
  }
}
