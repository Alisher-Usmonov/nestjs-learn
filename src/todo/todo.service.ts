import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Response } from './interface/response.interface';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel("todos") private readonly todoModel: Model<TodoDocument>) {}

    async create(todo: CreateTodoDto): Promise<TodoDocument> {
        return await this.todoModel.create(todo);
    }

    async findAll(): Promise<TodoDocument[]> {
        return await this.todoModel.find();
    }

    async findOne(id: string): Promise<TodoDocument> {
        return await this.todoModel.findOne({
            id
        });
    }

    async update(todo: CreateTodoDto, id: number): Promise<TodoDocument> {
        return await this.todoModel.findOneAndUpdate({
            id
        }, {
            ...todo
        });
    }

    async delete(id: number): Promise<Response> {
        await this.todoModel.findOneAndDelete({
            id
        });
        return {
            ok: true,
            message: `Item by id ${id} deleted`
        }
    }
}
