import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface CardAttrs {
  lat: number;
  long: number;
  neareststop: string;
  currentstop:string;
}

interface CardDoc extends mongoose.Document {
  lat?: number;
  long?: number;
  neareststop?: string;
  currentstop?:string;
}

interface TicketModel extends mongoose.Model<CardDoc> {
  build(attrs: CardAttrs): CardDoc;
}

const cardSchema = new mongoose.Schema(
  {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    neareststop: {
      type: String,
      required: true,
    },
    currentstop: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);
cardSchema.set('versionKey', 'version');
cardSchema.plugin(updateIfCurrentPlugin);

cardSchema.statics.build = (attrs: CardAttrs) => {
  return new Card(attrs);
};

const Card = mongoose.model<CardDoc, TicketModel>('Card', cardSchema);

export { Card };
