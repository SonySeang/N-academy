import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData = {
  email: "unique-email@example.com", // Ensure this email is unique
  name: "John Doe",
  hashedPassword: "",
  posts: {
    create: [
      {
        title: "My first post",
        description: "This is my first post",
        imageUrl: "https://example.com",
      },
      {
        title: "My second post",
        description: "This is my second post",
        imageUrl: "https://example.com",
      },
      {
        title: "My third post",
        description: "This is my third post",
        imageUrl: "https://example.com",
      },
    ],
  },
};

async function main() {
  console.log(`Start seeding ...`);

  const hashedPassword = await bcrypt.hash("example", 10);
  userData.hashedPassword = hashedPassword;

  try {
    await prisma.user.create({
      data: userData,
    });
    console.log(`Seeding finished.`);
  } catch (error) {
    console.error(`Seeding failed: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
