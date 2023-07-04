import { PrismaClient } from "@prisma/client";

//Código pra evitar q o Prisma fique fazendo consultas no Banco de dados a cada save no Next 13, pq quando salvamos um arquivo no Next ele reinicia o servidor e consequentemente executa o Prisma dnv, que faz novamente uma consulta no Banco de dados.

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma;
