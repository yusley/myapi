/*
  Warnings:

  - Added the required column `categoryId` to the `TransactionsMoney` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TransactionsMoney" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TransactionsMoney_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TransactionsMoney" ("created_at", "id", "price", "title", "updated_at") SELECT "created_at", "id", "price", "title", "updated_at" FROM "TransactionsMoney";
DROP TABLE "TransactionsMoney";
ALTER TABLE "new_TransactionsMoney" RENAME TO "TransactionsMoney";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
