import mongoose from 'mongoose';

mongoose.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret: any) => {
    delete ret._id;
    return {
      id: ret.id,
      ...ret
    }
  },
});
