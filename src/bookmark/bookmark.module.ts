import { Module } from '@nestjs/common';
import { bookmarkController } from './bookmark.controller';
import { bookmarkService } from './bookmark.service';

@Module({
    controllers:[bookmarkController],
    providers:[bookmarkService]
})
export class BookmarkModule {
    
}
