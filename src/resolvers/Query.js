const feed = async (
  root, 
  { filter, skip, first, orderBy }, 
  { prisma },
) => {
  const where = filter
    ? {
        OR: [
          { description_contains: filter },
          { url_contains: filter },
        ],
      }
    : {};
  
  const links = await prisma.links({ where, skip, first, orderBy })

  const count = await prisma.linksConnection({ where })
    .aggregate()
    .count()

  return {
    links,
    count,
  }
}
const users = (root, args, { prisma }) => prisma.users()
const user = (root, { id }, { prisma }) => prisma.user({ id })
const link = (root, { id }, { prisma }) => prisma.link({ id })

module.exports = {
  feed,
  users,
  user,
  link
};
