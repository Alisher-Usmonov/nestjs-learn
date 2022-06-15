import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image-upload')
export class ImageUploadController {
    @Post()
    @UseInterceptors(FileInterceptor("image"))
    uploadImage(@UploadedFile() img: Express.Multer.File) {
        console.log(img);
    }
}
