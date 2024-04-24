/*
  Warnings:

  - Added the required column `projectUlr` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectUlr" TEXT NOT NULL;
