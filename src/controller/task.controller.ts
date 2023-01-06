import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  Req,
  Put,
} from '@nestjs/common';

import { TaskService } from '../services/task.service';

import CreateTask from '../dtos/task.dto';
import { Task } from '../entities/Task.entity';

@Controller('v1/task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('')
  async GetAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Post('/add')
  async create(@Body() task: Task): Promise<Task> {
    console.log(task);
    return this.taskService.create(task);
  }

  @Put('/:taskId')
  async updateTask(
    @Param('taskId') id: number,
    @Body() task: CreateTask,
  ): Promise<Task> {
    return this.taskService.update(id, task);
  }
}
