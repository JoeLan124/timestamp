-- AlterTable
ALTER TABLE "day" ALTER COLUMN "singleday" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "timestamp" ALTER COLUMN "stamp" SET DATA TYPE TIME,
ALTER COLUMN "office" SET DEFAULT false;
