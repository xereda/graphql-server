const { prisma } = require('./generated/prisma-client');

async function main() {
  const deletedLink = await prisma.deleteLink({
    id: 'cjqmbgmhvx6fd0a12nacrsbsj'
  });
  console.log(`Deleted link: ${deletedLink.url} (ID: ${deletedLink.id})`);

  // Read all links from the database and print them to the console
  const allLinks = await prisma.links();
  console.log(allLinks);
}

main().catch(e => console.error(e));
