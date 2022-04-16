import { Injectable } from "@nestjs/common";
import {COURSES} from "./courses.mock";
import {User, Bookmark} from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService{
    constructor(private Prisma:PrismaService){}
    login(){
        return {'data':COURSES}
    }
    register(){
        return "Hello,i have Logged in"
    }
    index(){
        return "This is my index page"
    }
}