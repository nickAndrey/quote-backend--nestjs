import { QuoteCreateDto } from './dto/quote-create.dto';
import { QuoteUpdateDto } from './dto/quote-update.dto';
import { QuotesService } from './quotes.service';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getAllQuotes(): Promise<{
        message: string;
        results: (import("mongoose").Document<any, any, import("./shemas/quote.shema").QuoteDocument> & import("./shemas/quote.shema").QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getQuoteById(id: string): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, import("./shemas/quote.shema").QuoteDocument> & import("./shemas/quote.shema").QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    createQuote(createQuoteBody: QuoteCreateDto): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, import("./shemas/quote.shema").QuoteDocument> & import("./shemas/quote.shema").QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    updateQuoteById(id: string, updateQuoteBody: QuoteUpdateDto): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, import("./shemas/quote.shema").QuoteDocument> & import("./shemas/quote.shema").QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteQuoteById(id: string): Promise<{
        message: string;
        results: import("mongoose").Document<any, any, import("./shemas/quote.shema").QuoteDocument> & import("./shemas/quote.shema").QuoteShemaDefinition & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
