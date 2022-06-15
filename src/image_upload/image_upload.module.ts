import { Module } from '@nestjs/common';
import { ImageUploadController } from './image_upload.controller';

@Module({
    imports: [],
    controllers: [ImageUploadController]
})
export class ImageUploadModule {}
