import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuoteCreateDto } from './dto/quote-create.dto';
import { QuoteUpdateDto } from './dto/quote-update.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get()
  async getAllQuotes() {
    return await this.quotesService.getAllQuotes();
  }

  @Get(':id')
  async getQuoteById(@Param('id') id: string) {
    return await this.quotesService.getQuoteById(id);
  }

  @Post()
  async createQuote(@Body() createQuoteBody: QuoteCreateDto) {
    return await this.quotesService.createQuote(createQuoteBody);
  }

  @Put(':id')
  async updateQuoteById(@Param('id') id: string, @Body() updateQuoteBody: QuoteUpdateDto) {
    return await this.quotesService.updateQuoteById(id, updateQuoteBody);
  }

  @Delete(':id')
  async deleteQuoteById(@Param('id') id: string) {
    return await this.quotesService.deleteQuoteById(id);
  }

  @Post('/delete_many')
  async deleteManyQuotes(@Body() idsToDelete: string[]) {
    return await this.quotesService.deleteManyQuotes(idsToDelete);
  }
}
