import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserServce } from './users.service';
import { Prisma } from '@eventpanel-interview-task/prisma-client';

@Controller('users')
export class UserController {
  constructor(private userService: UserServce) {}

  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  public createUser(@Body() userData: Prisma.UserDataCreateInput) {
    return this.userService.createUser(userData);
  }

  @Get('role')
  public getUserRoles() {
    return this.userService.getUserRoles();
  }
}