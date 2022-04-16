import { Injectable } from "@nestjs/common";

@Injectable({})
export class bookmarkService{
    login(){
        return {hello:"nice one"}
    }
}