const feed = (root, args, { prisma }) => prisma.links();
const users = (root, args, { prisma }) => prisma.users();
const user = (root, { id }, { prisma }) => prisma.user({ id });
const link = (root, { id }, { prisma }) => prisma.link({ id });

module.exports = {
  feed,
  users,
  user,
  link,
};
