import { Controller, Post } from "@nestjs/common";
import { bookmarkService } from "./bookmark.service";

@Controller('bookmark')
export class bookmarkController{
    constructor(private bookmarkService:bookmarkService){}
    @Post('addbookmark')
    sign(){
        return this.bookmarkService.login()
    }
}