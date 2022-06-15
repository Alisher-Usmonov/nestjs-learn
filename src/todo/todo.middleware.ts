import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class TodoMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): string {
        if(!req.body) {
            return "Body is must have";
        }
        next();
    }
}