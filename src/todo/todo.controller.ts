import { Controller, Get, Post, Delete, Put, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Response } from './interface/response.interface';
import { Todo } from './schemas/todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Get(":id")
    findOne(@Param("id", ParseUUIDPipe) id): Promise<Todo> {
        return this.todoService.findOne(id);
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto) {
        this.todoService.create(createTodoDto);
    }

    @Put(":id")
    update(@Body() createTodoDto: CreateTodoDto, @Param("id", ParseUUIDPipe) id): Promise<Todo> {
        return this.todoService.update(createTodoDto, id);
    }

    @Delete(":id")
    delete(@Param("id", ParseUUIDPipe) id): Promise<Response> {
        return this.todoService.delete(id)
    }
}
