import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController, UserServce } from '@eventpanel-interview-task/users'
import { PrismaClientModule } from '@eventpanel-interview-task/prisma-client';

@Module({
  imports: [PrismaClientModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserServce],
})
export class AppModule { }
