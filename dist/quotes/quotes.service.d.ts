import { Model } from 'mongoose';
import { QuoteCreateDto } from './dto/quote-create.dto';
import { QuoteUpdateDto } from './dto/quote-update.dto';
import { QuoteDocument, QuoteShemaDefinition } from './shemas/quote.shema';
export declare class QuotesService {
    private model;
    constructor(model: Model<QuoteDocument>);
    getAllQuotes(): Promise<{
        message: string;
        results: (import("mongoose").Document<any, any, QuoteDocument> & QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getQuoteById(id: string): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, QuoteDocument> & QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    createQuote(quote: QuoteCreateDto): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, QuoteDocument> & QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateQuoteById(id: string, updatedQuote: QuoteUpdateDto): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, QuoteDocument> & QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteQuoteById(id: string): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, QuoteDocument> & QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
