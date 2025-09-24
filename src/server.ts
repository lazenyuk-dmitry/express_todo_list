import app from "@/app";
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;

app.get("/", (req, res) => {
  res.json({ message: "API service is running 🚀" });
});

// Start server
(async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, async () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
})()

const onExit = async (signal: NodeJS.Signals) => {
  await mongoose.disconnect();
  console.log(`🔌 Disconnected (${signal})`);
  process.exit(0);
}

process.once('SIGINT', onExit);
process.once('SIGTERM', onExit);
