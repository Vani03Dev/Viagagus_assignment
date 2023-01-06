import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { Task } from './entities/Task.entity';
import { TaskController } from './controller/task.controller';
import { TaskService } from './services/task.service';
import { TaskModule } from './module/task.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TaskModule],
})
export class AppModule {}
