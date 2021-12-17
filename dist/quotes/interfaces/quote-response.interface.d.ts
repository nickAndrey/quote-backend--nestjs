import { Quote } from './quote.interface';
export interface QuoteResponse {
    message: string;
    results: Quote[];
}
