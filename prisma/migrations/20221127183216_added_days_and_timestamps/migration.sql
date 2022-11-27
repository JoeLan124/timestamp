-- CreateTable
CREATE TABLE "day" (
    "id" TEXT NOT NULL,
    "singleday" TIMESTAMP(3) NOT NULL,
    "typeOfDay" TEXT,
    "targetWorkingTimeInSeconds" INTEGER,
    "workingTimeInSeconds" INTEGER,
    "breakTimeInSeconds" INTEGER,
    "dayId" TEXT NOT NULL,

    CONSTRAINT "day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timestamp" (
    "id" TEXT NOT NULL,
    "stamp" TIMESTAMP(3),
    "office" BOOLEAN,
    "timestampId" TEXT NOT NULL,

    CONSTRAINT "timestamp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "day" ADD CONSTRAINT "day_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timestamp" ADD CONSTRAINT "timestamp_timestampId_fkey" FOREIGN KEY ("timestampId") REFERENCES "day"("id") ON DELETE CASCADE ON UPDATE CASCADE;
