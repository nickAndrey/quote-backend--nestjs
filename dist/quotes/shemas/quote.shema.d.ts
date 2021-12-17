/// <reference types="mongoose" />
declare type QuoteDocument = QuoteShemaDefinition & Document;
export declare class QuoteShemaDefinition {
    id: string;
    quote: string;
    author: string;
    isEditable: boolean;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
}
declare const QuoteShema: import("mongoose").Schema<import("mongoose").Document<QuoteShemaDefinition, any, any>, import("mongoose").Model<import("mongoose").Document<QuoteShemaDefinition, any, any>, any, any, any>, any>;
export { QuoteDocument, QuoteShema };
