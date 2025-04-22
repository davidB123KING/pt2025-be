import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreModule } from './genre/genre.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Genre} from "./entities/genre.entity";
import {ConfigModule} from "@nestjs/config";



@Module({
  imports: [GenreModule ,
      ConfigModule.forRoot({isGlobal: true}),
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Genre],
      synchronize: true,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
