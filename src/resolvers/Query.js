const feed = async (root, { filter }, { prisma }) => {
  const where = filter
    ? {
        OR: [
          { description_contains: filter },
          { url_contains: filter },
        ],
      }
    : {};
  
  return await prisma.links({ where })
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
