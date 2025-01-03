import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserServce } from './users.service';


@Module({
  controllers: [UserController],
  providers: [UserServce],
  exports: [UserServce],
})
export class UsersModule { }
