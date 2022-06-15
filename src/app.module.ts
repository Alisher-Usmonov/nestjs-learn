import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from "@nestjs/mongoose";
import config from "./config/keys";
import { TodoMiddleware } from './todo/todo.middleware';
import { TodoController } from './todo/todo.controller';
import { ImageUploadController } from './image_upload/image_upload.controller';
import { ImageUploadModule } from './image_upload/image_upload.module';

@Module({
  imports: [TodoModule, MongooseModule.forRoot(config.mongoURL), ImageUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TodoMiddleware)
    .exclude({
      path: "todo",
      method: RequestMethod.POST
    }, {
      path: "todo",
      method: RequestMethod.PUT
    })
    .forRoutes(TodoController)
  }
}