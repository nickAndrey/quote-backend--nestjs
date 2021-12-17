import { QuoteBaseDto } from './quote-base.dto';

export class QuoteCreateDto extends QuoteBaseDto {
  createdAt: Date;
  _id: string;
}
