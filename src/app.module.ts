import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    QuotesModule,
    MongooseModule.forRoot(
      'mongodb+srv://ahusiev:proxycrypto@cluster0.c69og.mongodb.net/quotes?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
