import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuoteCreateDto } from './dto/quote-create.dto';
import { QuoteUpdateDto } from './dto/quote-update.dto';
import { QuoteDocument, QuoteShemaDefinition } from './shemas/quote.shema';

@Injectable()
export class QuotesService {
  constructor(@InjectModel(QuoteShemaDefinition.name) private model: Model<QuoteDocument>) {}

  async getAllQuotes() {
    return {
      results: await this.model.find().exec(),
    };
  }

  async getQuoteById(id: string) {
    return {
      results: await this.model.findById(id).exec(),
    };
  }

  async createQuote(quote: QuoteCreateDto) {
    return {
      results: await new this.model({ ...quote, _id: quote.id, createdAt: new Date() }).save(),
    };
  }

  async updateQuoteById(id: string, updatedQuote: QuoteUpdateDto) {
    this.model.updateOne({ _id: id }, { ...updatedQuote, updatedAt: new Date() }).exec();
    return {
      results: await this.model.findOne({ _id: id }),
    };
  }

  async deleteQuoteById(id: string) {
    return {
      results: await this.model.deleteOne({ _id: id }).exec(),
    };
  }

  async deleteMenyQuotes(ids: string[]) {
    ids.forEach((id) => this.model.deleteOne({ _id: id }).exec());
    return {
      results: await this.model.find().exec(),
    };
  }
}
