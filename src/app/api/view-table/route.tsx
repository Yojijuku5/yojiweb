import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export default async function testTable() {
    const newUser = await Prisma.user.create({
        data: {
            name: 'Yojijuku5',
        }
    })

    const users = await Prisma.user.findMany();
}