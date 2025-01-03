import { Injectable } from "@nestjs/common";
import { PrismaService, UserData, UserRole, Prisma } from '@eventpanel-interview-task/prisma-client';

@Injectable()
export class UserServce {
  constructor(private prismaService: PrismaService) {}

  public getUsers(): Promise<UserData[]> {
    return this.prismaService.userData.findMany();
  }

  public createUser(userData: Prisma.UserDataCreateInput): Promise<UserData> {
    return this.prismaService.userData.create({
      data: userData,
    });
  }

  public getUserRoles(): Promise<UserRole[]> {
    return this.prismaService.userRole.findMany();
  }
}