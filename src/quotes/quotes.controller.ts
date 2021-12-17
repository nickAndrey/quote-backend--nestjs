import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuoteCreateDto } from './dto/quote-create.dto';
import { QuoteUpdateDto } from './dto/quote-update.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get()
  getAllQuotes() {
    return this.quotesService.getAllQuotes();
  }

  @Get(':id')
  getQuoteById(@Param('id') id: string) {
    return this.quotesService.getQuoteById(id);
  }

  @Post()
  createQuote(@Body() createQuoteBody: QuoteCreateDto) {
    return this.quotesService.createQuote(createQuoteBody);
  }

  @Put(':id')
  updateQuoteById(
    @Param('id') id: string,
    @Body() updateQuoteBody: QuoteUpdateDto,
  ) {
    return this.quotesService.updateQuoteById(id, updateQuoteBody);
  }

  @Delete(':id')
  deleteQuoteById(@Param('id') id: string) {
    return this.quotesService.deleteQuoteById(id);
  }
}
