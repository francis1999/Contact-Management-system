import { Body, Controller, Get, Post } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private authservice:AuthService){}

    @Post('signin')
    sign (@Body() dto:AuthDto){
        return this.authservice.login(dto)
    }

    @Post('signup')
    signup(@Body() dto:AuthDto){
        return this.authservice.register(dto)
    }
    @Get('index')
        indexedDB(){
            return this.authservice.index()
        }
    }
