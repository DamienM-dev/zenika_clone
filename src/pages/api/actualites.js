import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const actualites = await prisma.evenement.findMany();
      res.json(actualites);
    } catch (error) {
      console.error("Erreur lors de la récupération des actualites:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};
