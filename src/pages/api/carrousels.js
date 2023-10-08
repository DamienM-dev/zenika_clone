import { PrismaClient } from "@prisma/client";
import { useEffect } from "react";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const carrousels = await prisma.carrousel.findMany();
      res.json(carrousels);
    } catch (error) {
      console.error("Erreur lors de la récupération des carrousels:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
