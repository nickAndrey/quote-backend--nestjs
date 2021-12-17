import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    QuotesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
