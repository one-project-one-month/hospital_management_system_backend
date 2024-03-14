import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();
export const disconnect = async () => await db.$disconnect();
