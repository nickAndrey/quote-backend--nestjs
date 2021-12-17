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
      message: 'success',
      results: await this.model.find().exec(),
    };
  }

  async getQuoteById(id: string) {
    return {
      message: 'success',
      results: await this.model.findById(id).exec(),
    };
  }

  async createQuote(quote: QuoteCreateDto) {
    return {
      message: 'success',
      results: await new this.model({ ...quote, createdAt: new Date() }).save(),
    };
  }

  async updateQuoteById(id: string, updatedQuote: QuoteUpdateDto) {
    return {
      message: 'success',
      results: await this.model
        .findByIdAndUpdate(id, { ...updatedQuote, updatedAt: new Date() })
        .exec(),
    };
  }

  async deleteQuoteById(id: string) {
    return {
      message: 'success',
      results: await this.model.deleteOne({ _id: id }).exec(),
    };
  }

  async deleteMenyQuotes(ids: string[]) {
    ids.forEach((id) => this.model.deleteOne({ _id: id }).exec());

    return {
      message: 'success',
      results: await this.model.find().exec(),
    };
  }
}
