import mongoose from 'mongoose';

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    global.mongoose = mongoose.connect(process.env.DATABASE_URI, {
      bufferCommands: false,
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}
