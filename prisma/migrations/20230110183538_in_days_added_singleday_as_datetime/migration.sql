/*
  Warnings:

  - You are about to drop the column `singleday` on the `day` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "day" DROP COLUMN "singleday";

-- AlterTable
ALTER TABLE "days" ADD COLUMN     "singleday" DATE;
