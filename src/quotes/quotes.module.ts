import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

@Module({
  controllers: [QuotesController],
  providers: [QuotesService],
  imports: [
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get('ELASTIC_SEARCH_NODE'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class QuotesModule implements OnModuleInit {
  constructor(private readonly quotesService: QuotesService) {}

  async onModuleInit() {
    await this.quotesService.createIndex();
  }
}
