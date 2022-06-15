import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuidV4 } from "uuid";

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop({ required: true, unique: true, default: uuidV4() })
    id: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);