import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { QuoteShema, QuoteShemaDefinition } from './shemas/quote.shema';

@Module({
  controllers: [QuotesController],
  providers: [QuotesService],
  imports: [
    MongooseModule.forFeature([
      { name: QuoteShemaDefinition.name, schema: QuoteShema },
    ]),
  ],
})
export class QuotesModule {}
