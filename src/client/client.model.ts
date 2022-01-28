import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  email: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
