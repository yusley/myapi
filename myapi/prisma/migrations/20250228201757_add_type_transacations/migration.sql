/*
  Warnings:

  - Added the required column `type` to the `TransactionsMoney` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TransactionsMoney" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TransactionsMoney_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TransactionsMoney_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TransactionsMoney" ("categoryId", "created_at", "id", "price", "title", "updated_at", "userId") SELECT "categoryId", "created_at", "id", "price", "title", "updated_at", "userId" FROM "TransactionsMoney";
DROP TABLE "TransactionsMoney";
ALTER TABLE "new_TransactionsMoney" RENAME TO "TransactionsMoney";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
