const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const sliderMain = await prisma.carrousel.createMany({
    data: [
      {
        img: "https://images.prismic.io/zenika-website/3f991a94-d2cf-4010-b89a-de5d065aba56_4.png?auto=compress,format&rect=0,0,550,400&w=550&h=400",
        alt: "Photo slider de personne 1 sur 7",
      },
      {
        img: "https://images.prismic.io/zenika-website/78c9219f-96ee-461b-b8a9-c721bc63537a_2.png?auto=compress,format&rect=0,0,550,400&w=550&h=400",
        alt: "Photo slider de personne 2 sur 7",
      },
      {
        img: "https://images.prismic.io/zenika-website/262f9a41-9d8b-4f38-9ffc-d1be86124949_3.png?auto=compress,format&rect=0,0,550,400&w=550&h=400",
        alt: "Photo slider de personne 3 sur 7",
      },
      {
        img: "https://images.prismic.io/zenika-website/813ee750-ebdd-4944-bed1-a91d36bbb52e_12.png?auto=compress,format&rect=0,0,550,400&w=550&h=400",
        alt: "Photo slider de personne 4 sur 7",
      },
      {
        img: "https://images.prismic.io/zenika-website/1495bf9f-cc2d-44ea-b7ea-054e11007c38_6.png?auto=compress,format&rect=0,0,550,400&w=550&h=400",
        alt: "Photo slider de personne 5 sur 7",
      },
      {
        img: "https://images.prismic.io/zenika-website/c75f5575-8153-45cc-beed-6dbcab74e46c_9.png?auto=compress,format&rect=0,0,550,400&w=550&h=400",
        alt: "Photo slider de personne 6 sur 7",
      },
      {
        img: "https://images.prismic.io/zenika-website/cbf39bde-c962-47a0-851c-624fa629eac7_8.png?auto=compress,format&rect=0,0,550,400&w=550&h=400",
        alt: "Photo slider de personne 7 sur 7",
      },
    ],
  });

  const expertise = await prisma.expertise.createMany({
    data: [
      {
        logo: "https://i.postimg.cc/bZ7Fjfx1/icon-agile.jpg",
        nom: "Agilité",
        alt: "picto Agilité",
      },
      {
        logo: "https://i.postimg.cc/w3wfjm5q/icon-architecture.jpg",
        nom: "Architecture",
        alt: "picto Architecture",
      },
      {
        logo: "https://i.postimg.cc/LqjQ9QDw/Cloud.jpg",
        nom: "Cloud",
        alt: "picto Cloud",
      },
      {
        logo: "https://i.postimg.cc/ppy0hLkD/icon-data.jpg",
        nom: "Data",
        alt: "picto Data",
      },
      {
        logo: "https://i.postimg.cc/zbjdWL9k/icon-design.jpg",
        nom: "Design",
        alt: "picto Design",
      },
      {
        logo: "https://i.postimg.cc/MX63wDQ3/icon-devops.jpg",
        nom: "DevOps",
        alt: "picto DevOps",
      },
      {
        logo: "https://i.postimg.cc/gL2gKzpb/icon-dev.jpg",
        nom: "Back End/ Front End",
        alt: "picto BackEnd et Front End",
      },
      {
        logo: "https://i.postimg.cc/zb5tVwPB/GreenIT.jpg",
        nom: "Green IT",
        alt: "picto Green IT",
      },
      {
        logo: "https://i.postimg.cc/68vYcbkq/Innovation.jpg",
        nom: "Innovation / IA",
        alt: "picto Innovation / IA",
      },
      {
        logo: "https://i.postimg.cc/HrcPKkyp/Mobile.jpg",
        nom: "Mobile",
        alt: "picto Mobile",
      },
      {
        logo: "https://i.postimg.cc/Xphsw6Dt/icon-security.jpg",
        nom: "Sécurité",
        alt: "picto Sécurité",
      },
    ],
  });
  const reference = await prisma.reference.createMany({
    data: [
      {
        img: "https://images.prismic.io/zenika-website/82ab357d-b9fa-4760-b2b4-a651c2a89ff7_ryan-plomp-0iPebSCgKoA-unsplash.jpg?auto=compress,format&rect=483,0,954,1281&w=338&h=454&quot",
        alt: "image écosystéme",
        paragraphe:
          "Pour une solution médicale connectée de monitoring d'électrocardiogrammes, nous implémentons pour Bioserenity une démarche DevSecOps et une campagne de tests d'intrusion (web, mobile, hardware). Nous les avons ensuite accompagnés dans les corrections à mettre en oeuvre, suivi d'un contre audit validant la correction des vulnérabilités",
        sous_titre: "Challenger un écosystème technique médical connecté",
        langage: "AWS, MQTT, STM32, Spring, Angular",
        lien_decouvrir: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/7f07836f-5562-4fbf-83cc-ab5ec2179034_tomasz-frankowski-kBUfvkbFIoE-unsplash.jpg?auto=compress,format&rect=484,0,953,1280&w=338&h=454&quot",
        alt: "image accélération",
        paragraphe:
          "Les KPIs Accelerate doivent être des indices de l'accélération dans une organisation mais ne doivent pas être des objectifs. Pour reprendre la main sur le déploiement d'Accelerate chez un géant Français du E-commerce, nous avons crée un parcours pour apprendre aux équipes à utiliser cette approche. Ce parcours est en cours de déploiement à l'échelle.",
        sous_titre: "Déployer une culture Accelerate en quelques mois",
        langage: "Accelerate, DevOps, Agilité, Coaching",
        lien_decouvrir: "",
      },
      {
        img: "https://i.postimg.cc/bZ7Fjfx1/icon-agile.jpg",
        alt: "anphythéatre",
        paragraphe:
          "Après un premier Audit de son SI, ICES a confié à Zenika le développement d'une solution spécifique adaptée, unifiée et flexible pour automatiser certaines tâches administratives, permettre de répondre à des pics de demandes tout au long de l'année universitaire, et faciliter la collaboration entre les services administratifs et les étudiants.",
        sous_titre:
          "Simplifier les processus administratifs pour permettre au personnel universitaire de se concentrer sur l'expérience des étudiants",
        langage: "Google Kubernetes Engine, Google Cloud, API Gateway, UX",
        lien_decouvrir: "",
      },
      {
        img: "https://i.postimg.cc/bZ7Fjfx1/icon-agile.jpg",
        alt: "sapin en fôret",
        paragraphe:
          "Arkéa a consulté Zenika pour mettre en place une démarche de co-R&D : sensibilisation au Green IT et à l'écoconception, production de prototypes fonctionnels, création d’application web d’inspiration LowTech, intégration d’outillages de mesure dans une plateforme d’intégration continue, constitution d’un référentiel de bonnes pratiques.",
        sous_titre:
          "Mutualiser les activités de R&D sur la thématique du GreenI",
        langage: "Green IT, formation, écoconception",
        lien_decouvrir: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/22fdf801-9c1d-4544-bead-0a32e8a8f088_Votre+entreprise+est-elle+vulne%CC%81rable+aux+attaques+physiques+_+-+REX+Red+Team+GPTW+%281%29.png?auto=compress,format&quot",
        alt: "pirate informatique",
        paragraphe:
          "<strong>Mon entreprise est-elle vulnérable aux attaques physiques ?</strong><br>C'est la question que s'est posée la DSI de Great Place To Work® Franceavant de faire appel à l'équipe ZenSec de Zenika pour un test grandeur nature.<br>Dans ce cas d'usage vous apprendrez plus sur :<br>❓Ce qu'est une Red Team<br>🚩 Les enjeux et objectifs de la mission<br>🎯 Les cibles de la Red Team et préparation<br>✔️ Les résultats de la mission<br>",
        sous_titre: "Red Team Chez Great Place to Work France",
        langage: "",
        lien_decouvrir: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/09ec9aee-8858-430a-aace-7cc4a6d8edbd_luka-vovk-EngLPePzg7U-unsplash.jpg?auto=compress,format&rect=0,17,1920,2579&w=338&h=454&quot",
        alt: "Un orage",
        paragraphe:
          "Une équipe de consultants a accompagné une célèbre compagnie d'assurances pour réaliser une première release du projet et sécuriser son déploiement. Parmi les missions réalisées : la mise en place de l'agilité dans l'équipe, d'une culture craftsmanship, la réalisation d'une interface web et la création d'API Rest.",
        sous_titre:
          "Faciliter la souscription de contrats d'assurance contre les aléas climatiques",
        langage: "Angular, Spring Boot, Gitlab, jenkins, reactiveX",
        lien_decouvrir: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/902c80e1-cea4-4628-8113-eac5fb86aedf_cover_ref.png?auto=compress,format&rect=0,0,580,779&w=338&h=454&quot",
        alt: "picto Agilité",
        paragraphe:
          "Dans un contexte réglementaire de plus en plus exigeant, RCI Banque se tourne vers les technologies du Cloud afin de pouvoir apporter des réponses rapides et fiables à l'ensemble des demandes réglementaires. C'est en s'appuyant sur Confluent Cloud que RCI Banque oriente cette transformation du monde du batch vers un monde centralisé sur la donnée en mouvement.",
        sous_titre:
          "S'assurer du bon suivi de ses clients dans le secteur bancaire",
        langage: "Confluent Cloud",
        lien_decouvrir: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/57fcb879-61de-4763-adfa-e250e9233d2f_Cr%C3%A9er+une+application+au+service+de+la+marque+-+Cas+d%E2%80%99usage+D%C3%A9cathlon+Canada.jpg?auto=compress,format&quot",
        alt: "Codeur de l'entreprise Decathlon ",
        paragraphe:
          "Décathlon Canada refond le site de son projet Décathlon Community et passe à React.js. Assez rapidement vient le besoin de se concentrer sur du natif avec une application mobile. La marque a fait appel à Zenika qui développe une première version sur iOS et Android en 6 mois avec React Native : mise en production en été 2019 pour le nouveau site et l’application.",
        sous_titre: "",
        langage: "React Native",
        lien_decouvrir: "",
      },
    ],
  });
  const partenaire = await prisma.partenaire.createMany({
    data: [
      {
        logo: "https://images.prismic.io/zenika-website/efb6f4ba-c957-4955-98f0-0d8ae9ca3e09_gcloud.jpg?auto=compress,format&rect=287,0,630,630&w=112&h=112",
        nom: "Google Cloud Platform",
        alt: "logo google",
      },
      {
        logo: "https://images.prismic.io/zenika-website/17e44d84-cb2c-42c0-a4ad-18eb91c94eb1_confluent.jpg?auto=compress,format&rect=442,55,316,316&w=112&h=112",
        nom: "Confluent",
        alt: "logo Confluent",
      },
      {
        logo: "https://images.prismic.io/zenika-website/2c4b513b-4c49-484b-bdb9-c5e54b1e92c7_elastic.jpg?auto=compress,format&rect=0,0,400,400&w=112&h=112",
        nom: "Elastic",
        alt: "logo Elastic",
      },
      {
        logo: "https://images.prismic.io/zenika-website/92d61deb-16fe-43e1-93e4-f99bda8b1534_logo+green+it+.png?auto=compress,format&rect=0,0,300,300&w=112&h=112",
        nom: "GreenIT.fr",
        alt: "logo GreenIT.fr",
      },
      {
        logo: "https://images.prismic.io/zenika-website/cd5ba688-edda-4d9f-8f47-5d12185059a3_Spring_Framework-Logo.wine.jpg?auto=compress,format&rect=0,0,3000,3000&w=112&h=112",
        nom: "Spring",
        alt: "logo Spring",
      },
      {
        logo: "https://images.prismic.io/zenika-website/41a774fc-ec1f-412d-95e5-29358f0b8f7c_scaledagile.jfif?auto=compress,format&rect=0,13,357,357&w=112&h=112",
        nom: "Scrum.org",
        alt: "logo Scrum.org",
      },
    ],
  });

  const evenement = await prisma.evenement.createMany({
    data: [
      {
        img: "https://images.prismic.io/zenika-website/39dcc530-5168-4c40-b95f-bd6e9da894a0_headway-F2KRf_QfCqw-unsplash.jpg?auto=compress,format&rect=0,58,5472,3542&w=380&h=246&quot",
        alt: "image d'une conférence",
        paragraphe:
          "Retours d'expériences clients, partenaires, découvrez en plus sur nos missions.",
        titre: "Matinales, webinars, conférences",
        lien_decouvrir: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/924f773c-81ee-45b0-8bd4-3a7b46b2768b_Meetup-Logo.jpg?auto=compress,format&rect=255,0,3337,2160&w=380&h=246&quot",
        alt: "image du meetup",
        paragraphe:
          "Participez aux Meetups de notre communauté, en physique ou à distance.",
        titre: "NightClazz et RemoteClazz",

        lien_decouvrir: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/26a8fa56-fac7-4d08-9016-a72d61c22783_patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg?auto=compress,format&rect=0,58,5472,3542&w=380&h=246&quot",
        alt: "Plein de livre",
        paragraphe:
          "Articles tech, agiles, bonnes pratiques, découverte, faites votre veille !",
        titre: "Le blog Zenika",
        lien_decouvrir: "",
      },
    ],
  });

  const agence = await prisma.agence.createMany({
    data: [
      {
        img: "https://images.prismic.io/zenika-website/b728d33f-40f5-4a67-87e8-61d09bc6f2a6_brest.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "mer de brest",
        titre: "brest",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/c3a86111-9bbe-485e-a820-c2d2905d114c_bordeaux.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "Une place à bordeaux",
        titre: "Bordeaux",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/b344f523-a789-4227-9fe6-216e94b01027_Casablanca.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot;",
        alt: "Une place à Casablanca",
        titre: "Casablanca",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/c9fadba9-7234-4f62-972d-336964bdbb6b_clermont-ferrand-petite.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "Les montagnes de clérmont-Ferrand",
        titre: "Clermont-Ferrand",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/54201053-5aa4-49fa-a73e-e566b01de717_grenoble.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "Les boules volantes de Grenobles",
        titre: "Grenobles",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/3cf5521e-d446-4d90-80b8-d2176754e1df_lille.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "Un batiment de Lille",
        titre: "Lille",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/66611bc6-db32-403b-8149-3dcf77e805a8_lyon.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "Lyon et ça rivière",
        titre: "Lyon",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/8b49c3ce-bb56-4856-9ea2-82846c7e472d_jorgen-hendriksen-8jGtaL9Kc6U-unsplash.jpg?auto=compress,format&rect=0,1461,4000,3048&w=210&h=160&quot",
        alt: "L'éléphant mectronique de Nantes",
        titre: "Nantes",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/bc688c0d-7bba-4a98-9859-1a293e23a8bd_Niort.png?auto=compress,format&rect=13,0,184,140&w=210&h=160&quot",
        alt: "Rivière de Niort",
        titre: "Niort",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/496f91d5-d8dd-47ac-a202-1f43291826fe_paris.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "La tour effel de Paris",
        titre: "Paris",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/aaa6804a-ded7-4a32-95f6-03683b8223bd_rennes.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "La cathrédale de Rennes",
        titre: "Rennes",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/645e1164-fcd0-496e-89c8-661d30b08d98_Toulouse-thanks-to-DAT-VO-unsplash.jpg?auto=compress,format&rect=120,0,1680,1280&w=210&h=160&quot",
        alt: "Rivière de Toulouse",
        titre: "Toulouse",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/97789f05-200b-4e62-a769-212294787126_canada.jpg?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "Une feuille d'érable",
        titre: "Canada",
        lien: "",
      },
      {
        img: "https://images.prismic.io/zenika-website/c65445c4-57b3-4355-b1d0-5c45a47fc18e_singapore.png?auto=compress,format&rect=0,0,210,160&w=210&h=160&quot",
        alt: "Un ciel de Singapour",
        titre: "Singapour",
        lien: "",
      },
    ],
  });

  const social = await prisma.social.createMany({
    data: [
      {
        logo: "https://images.prismic.io/zenika-website/da74bd36-c421-492a-ab9d-dc2030a2dfbf_linkedin+white.png?auto=compress,format&rect=0,0,20,20&w=20&h=20",
        alt: "Logo Linkedin",
        titre: "Linkedin",
        lien: "",
      },
      {
        logo: "https://images.prismic.io/zenika-website/82172688-3542-4634-ba65-d2485a8b1e11_twitter.blancpng.png?auto=compress,format&rect=0,0,20,20&w=20&h=20",
        alt: "Logo Twitter",
        titre: "Twitter",
        lien: "",
      },
      {
        logo: "https://images.prismic.io/zenika-website/666074c1-9037-43e0-a5e2-39e29ed150bc_instagram+blanc.png?auto=compress,format&rect=0,0,20,20&w=20&h=20",
        alt: "Logo Instagram",
        titre: "Instagram",
        lien: "",
      },
      {
        logo: "https://images.prismic.io/zenika-website/fa535600-75ad-4772-8e43-3e34f808b1c8_youtubeBLANC.png?auto=compress,format&rect=0,0,20,20&w=20&h=20",
        alt: "Logo Youtube",
        titre: "Youtube",
        lien: "",
      },
      {
        logo: "https://images.prismic.io/zenika-website/0fdf6e15-8b06-4f41-89e5-c284c67a8b3d_mediumBLANC.png?auto=compress,format&rect=0,0,20,20&w=20&h=20",
        alt: "Logo Medium",
        titre: "Medium",
        lien: "",
      },
      {
        logo: "https://images.prismic.io/zenika-website/e9386ff9-e113-49dc-ad84-27d05ab46149_twitch+BLANC.png?auto=compress,format&rect=0,0,20,20&w=20&h=20",
        alt: "Logo Twitch",
        titre: "Twitch",
        lien: "",
      },
      {
        logo: "https://images.prismic.io/zenika-website/6a9eeaf5-d243-4671-b065-07d756a5c0bb_githubblanc.png?auto=compress,format&rect=0,0,20,20&w=20&h=20",
        alt: "Logo Github",
        titre: "Github",
        lien: "",
      },
    ],
  });

  const mention = await prisma.mention.createMany({
    data: [
      {
        titre: "Nous contacter",
        lien: "",
      },
      {
        titre: "Mentions légales",
        lien: "",
      },
      {
        titre: "Espace Presse",
        lien: "",
      },
      {
        titre: "Gérer les cookies",
        lien: "",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("Seeding completed!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
