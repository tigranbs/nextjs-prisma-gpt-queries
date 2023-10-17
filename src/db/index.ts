import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export let prisma: PrismaClient;

if (typeof window === "undefined") {
  const getPrismaClient = () => new PrismaClient({
    log: ['warn', 'info', 'error'],
  });

  if (process.env.NODE_ENV === 'production') {
    prisma = getPrismaClient();
  } else {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = getPrismaClient();
    }

    prisma = globalForPrisma.prisma;
  }
}
