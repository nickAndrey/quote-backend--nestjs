import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

type QuoteDocument = QuoteShemaDefinition & Document;

@Schema()
export class QuoteShemaDefinition {
  @Prop({ required: true })
  id: string;

  @Prop()
  _id: string;

  @Prop({ required: true })
  quote: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  isEditable: boolean;

  @Prop()
  createdAt?: Date;

  @Prop()
  deletedAt?: Date;

  @Prop()
  updatedAt?: Date;
}

const QuoteShema = SchemaFactory.createForClass(QuoteShemaDefinition);
export { QuoteDocument, QuoteShema };
