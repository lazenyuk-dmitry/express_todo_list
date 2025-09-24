import app from "@/app";
import prisma from "@/config/db";

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "API service is running 🚀" });
});

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log('✅ Connected to PostgreSQL');
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
});

const onExit = async (signal: NodeJS.Signals) => {
  await prisma.$disconnect();
  console.log(`🔌 Disconnected (${signal})`);
  process.exit(0);
}

process.on('SIGINT', () => onExit('SIGINT'));
process.on('SIGTERM', () => onExit('SIGTERM'));
