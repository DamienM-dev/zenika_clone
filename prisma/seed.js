const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const sliderMain1 = await prisma.carrousel.create({
    data: {
      alt: "Photo slider de personne 1 sur 7",
      img: "https://i.postimg.cc/yk7RKNn6/1.jpg",
    },
  });
  const sliderMain2 = await prisma.carrousel.create({
    data: {
      alt: "Photo slider de personne 2 sur 7",
      img: "https://i.postimg.cc/RNGHZzb7/2.jpg",
    },
  });
  const sliderMain3 = await prisma.carrousel.create({
    data: {
      alt: "Photo slider de personne 3 sur 7",
      img: "https://i.postimg.cc/Wd3JDfQQ/3.jpg",
    },
  });
  const sliderMain4 = await prisma.carrousel.create({
    data: {
      alt: "Photo slider de personne 4 sur 7",
      img: "https://i.postimg.cc/68m4CfKT/4.jpg",
    },
  });
  const sliderMain5 = await prisma.carrousel.create({
    data: {
      alt: "Photo slider de personne 5 sur 7",
      img: "https://i.postimg.cc/xkNJ5Nj5/5.jpg",
    },
  });
  const sliderMain6 = await prisma.carrousel.create({
    data: {
      alt: "Photo slider de personne 6 sur 7",
      img: "https://i.postimg.cc/ygFJ4qZS/6.jpg",
    },
  });
  const sliderMain7 = await prisma.carrousel.create({
    data: {
      alt: "Photo slider de personne 7 sur 7",
      img: "https://i.postimg.cc/r06dPyKk/7.jpg",
    },
  });

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
