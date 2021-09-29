import mongoose from 'mongoose';

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  try {
    if (global.mongoose.conn) {
      return global.mongoose.conn;
    }

    if (!global.mongoose.promise) {
      global.mongoose = mongoose.connect(process.env.DATABASE_URI, {
        bufferCommands: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // sets the name of the DB that our collections are part of
        dbName: 'tw3Stats',
      });
    }

    global.mongoose.conn = await global.mongoose.promise;
    console.log('mongoose connected!');
    return global.mongoose.conn;
  } catch (err) {
    console.log(err);
  }
}
