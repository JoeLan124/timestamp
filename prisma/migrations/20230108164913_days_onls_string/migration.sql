/*
  Warnings:

  - You are about to drop the column `singleday` on the `days` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "days" DROP COLUMN "singleday",
ADD COLUMN     "info" TEXT;
