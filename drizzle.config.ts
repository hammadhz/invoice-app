import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: ".env.local",
});

if (typeof process.env.DB_URL !== "string") {
  throw new Error("Please set your db url");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DB_URL as string,
  },
} satisfies Config);
