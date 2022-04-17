import { ForbiddenException, Injectable } from "@nestjs/common";
import {COURSES} from "./courses.mock";
import {User, Bookmark} from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable()
export class AuthService{
    constructor(private Prisma:PrismaService){}
    async login(dto:AuthDto){
         //find user by email
         
            const user = await this.Prisma.user.findUnique({
                where:{
                    email: dto.email,
                },
            });
        // if use exist, throw exemption
        if(!user)
            throw new ForbiddenException("incorrect Credentials")
        //compare password
        const pwmatches=await argon.verify(user.hash, dto.password)
        //if password incorrect throw exception
        if(pwmatches) throw new ForbiddenException("incorrect Credentials")
        // else login to the dashbaord
        delete user.hash;
        return user;
    }

    async register(dto:AuthDto){
        const hash=await argon.hash(dto.password);
        try{
            const user=await this.Prisma.user.create({
                data:{
                    email: dto.email,
                    hash,
                },
            });
            delete user.hash;
            return user;
        }
        catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code==="P2002"){
                    throw new ForbiddenException('Credential Taken')
                }
            }
            throw error;
        }
    }


    index(){
        return "This is my index page"
    }
}