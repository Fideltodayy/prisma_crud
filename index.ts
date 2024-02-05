import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Read all users
  //   const allUsers = await prisma.user.findMany({
  //     include: { posts: true },
  //   });
  //   console.log(allUsers);
  // Crreste a new user
  //   const newUser = await prisma.user.create({
  //     data: {
  //       name: "Alice",
  //       email: "alice@gmail.com",
  //     },
  //   });
  //   console.log(newUser);
  //   Create an article and associate it with a user
  //   const newArticle = await prisma.post.create({
  //     data: {
  //       title: "Join the Prisma Slack",
  //       content: "https://slack.prisma.io",
  //       published: true,
  //       author: {
  //         connect: { id: 1 },
  //       },
  //     },
  //   });
  //   console.log(newArticle);
  // Read all published posts
  //   const allPublishedPosts = await prisma.post.findMany({
  //     where: { published: true },
  //   });
  //   console.log(allPublishedPosts);
  // create user and post and associate them
  //   const newUser = await prisma.user.create({
  //     data: {
  //       name: "Bob",
  //       email: "bob@gmail.com",
  //       posts: {
  //         create: {
  //           title: "Join the Prisma Slack",
  //           content: "https://slack.prisma.io",
  //           published: true,
  //         },
  //       },
  //     },
  //   });
  //   console.log(newUser);
  //   Get all users and their posts
  //   const allUsers = await prisma.user.findMany({
  //     include: { posts: true },
  //   });
  //   console.dir(allUsers, { depth: null });
  // create a new post
  //   const newPost = await prisma.post.create({
  //     data: {
  //       title: "Join the Prisma Slack",
  //       content: "https://slack.prisma.io",
  //       published: true,
  //       author: {
  //         connect: { id: 1 },
  //       },
  //     },
  //   });
  //   console.log(newPost);
  //   allUsers.forEach((user) => {
  //     console.log(`User ${user.name}, Email: ${user.email} has posts:`);
  //     console.log("Articles: ");
  //     user.posts.forEach((post) => {
  //       console.log(` -Title ${post.title}, Body: ${post.content}`);
  //     });
  //     console.log("\n");
  //   });

  //   Update a users data
  //   const user = await prisma.user.update({
  //     where: { id: 1 },
  //     data: { email: "unknown@gmail.com" },
  //   });
  //   console.log(user);

  // Remove data
  const article = await prisma.post.delete({
    where: { id: 1 },
  });
  console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
