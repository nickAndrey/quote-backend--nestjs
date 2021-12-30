import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { QuoteCreateDto } from './dto/quote-create.dto';
import { QuoteUpdateDto } from './dto/quote-update.dto';

@Injectable()
export class QuotesService {
  elasticsearchIndex: string = this.configService.get('ELASTICSEARCH_INDEX');

  constructor(
    private readonly elasticsearchService: ElasticsearchService,
    private configService: ConfigService
  ) {}

  async createIndex() {
    const checkIndex = this.elasticsearchService.indices.exists({
      index: this.elasticsearchIndex,
    });

    if ((await checkIndex).statusCode === 404) {
      this.elasticsearchService.indices.create({
        index: this.elasticsearchIndex,
        body: {
          mappings: {
            properties: {
              id: { type: 'text' },
              quote: { type: 'text' },
              author: { type: 'text' },
              isEditable: { type: 'boolean' },
            },
          },
        },
      });
    }
  }

  async getAllQuotes() {
    const { body } = await this.elasticsearchService.search({
      index: this.elasticsearchIndex,
      size: 1000,
    });

    const hits = body.hits.hits;
    const results = [];

    hits.forEach((hit) => results.push(hit._source));

    return { results };
  }

  async getQuoteById(id: string) {
    const {
      body: { _source: quoteInfo },
    } = await this.elasticsearchService.get({
      index: this.elasticsearchIndex,
      id,
    });

    return quoteInfo;
  }

  async createQuote(quote: QuoteCreateDto) {
    return await this.elasticsearchService
      .index({
        index: this.elasticsearchIndex,
        id: quote.id,
        body: quote,
      })
      .then((response) => ({
        status: response.statusCode,
        message: 'The quote was successfully added.',
      }))
      .catch((error) => new HttpException(error, 500));
  }

  async updateQuoteById(id: string, updatedQuote: QuoteUpdateDto) {
    return await this.elasticsearchService
      .update({
        index: this.elasticsearchIndex,
        id: id,
        body: { doc: { quote: updatedQuote.quote } },
        refresh: true,
      })
      .then(async (response) => {
        const updatedQuote = await this.getQuoteById(id);

        return {
          status: response.statusCode,
          message: `The quote with id: ${response.body._id} was successfully updated.`,
          result: updatedQuote,
        };
      })
      .catch((error) => new HttpException(error, 500));
  }

  async deleteQuoteById(id: string) {
    return await this.elasticsearchService
      .delete({
        index: this.elasticsearchIndex,
        id: id,
        refresh: true,
      })
      .then(async (response) => {
        const { results } = await this.getAllQuotes();

        return {
          status: response.statusCode,
          message: `The quote with id: ${id} was successfully deleted.`,
          results,
        };
      })
      .catch((err) => err);
  }

  async deleteManyQuotes(ids: string[]) {
    return await this.elasticsearchService
      .deleteByQuery({
        index: this.elasticsearchIndex,
        refresh: true,
        body: {
          query: {
            terms: {
              id: ids,
            },
          },
        },
      })
      .then(async (response) => {
        const { results } = await this.getAllQuotes();

        return {
          status: response.statusCode,
          message: `The quotes with ids: ${ids.join(' ').split(' ')} was successfully deleted.`,
          results,
        };
      })
      .catch((err) => err);
  }
}
