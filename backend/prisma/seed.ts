import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    //Anime 1
    await prisma.anime.upsert({
        where: { id: 1 }, update: {},
        create: { titulo: 'Ranking of Kings', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b0e25e68ede7bd9f8d6a8f49812e88bc.jpe'}
    })
    //Anime 2
    await prisma.anime.upsert({
        where: { id: 2 }, update: {},
        create: { titulo: 'Bleach', url: 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/08/Bleach-Thousand-Year-Blood-War-anime-visual-2-1.jpg?resize=1280%2C1809&ssl=1'},
    })
    //Anime 3
    await prisma.anime.upsert({
        where: { id: 3 }, update: {},
        create: { titulo: 'JoJo`s Bizarre Adventure', url: 'https://jovemnerd.com.br/wp-content/uploads/2022/03/jogos-bizarre-adventure-stone-ocean.jpg'},
    })
    //Anime 4
    await prisma.anime.upsert({
        where: { id: 4 }, update: {},
        create: { titulo: 'Spy x Family', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe'},
    })
    //Anime 5
    await prisma.anime.upsert({
        where: { id: 5 }, update: {},
        create: { titulo: 'Chainsaw Man', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe'},
    })
    //Anime 6
    await prisma.anime.upsert({
        where: { id: 5 }, update: {},
        create: { titulo: 'Kimetsu no Yaiba', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe'}
    })
}

main()
  .then(async () => await prisma.$disconnect() )
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })