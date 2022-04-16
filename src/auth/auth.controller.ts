import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authservice:AuthService){}

    @Post('signin')
    sign (){
        return this.authservice.login()
    }

    @Post('signup')
    signup(){
        return this.authservice.register()
    }
    @Get('index')
        indexedDB(){
            return this.authservice.index()
        }
    }
