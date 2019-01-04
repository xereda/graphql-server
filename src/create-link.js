const { prisma } = require('./generated/prisma-client')

async function main () {

  // Create a new link
  const newLink = await prisma.createLink({
    url: 'www.xereda.io',
    description: 'Xereda IO',
  })
  console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

  // Read all links from the database and print them to the console
  const allLinks = await prisma.links()
  console.log(allLinks)
}

main().catch(e => console.error(e))