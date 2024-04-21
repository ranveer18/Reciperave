import { Document } from 'mongoose';

export interface DynamicData extends Document {
  [key: string]: string | number | boolean | Date | any;
}
