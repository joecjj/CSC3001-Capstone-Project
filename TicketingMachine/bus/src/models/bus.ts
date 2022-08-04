import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface BusAttrs {
  lat: number;
  long: number;
  neareststop: string;
  currentstop:string;
}

interface BusDoc extends mongoose.Document {
  lat?: number;
  long?: number;
  neareststop?: string;
  currentstop?:string;
}

interface TicketModel extends mongoose.Model<BusDoc> {
  build(attrs: BusAttrs): BusDoc;
}

const busSchema = new mongoose.Schema(
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
busSchema.set('versionKey', 'version');
busSchema.plugin(updateIfCurrentPlugin);

busSchema.statics.build = (attrs: BusAttrs) => {
  return new Bus(attrs);
};

const Bus = mongoose.model<BusDoc, TicketModel>('Bus', busSchema);

export { Bus };
