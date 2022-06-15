import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: "todos", schema: TodoSchema }])],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {}