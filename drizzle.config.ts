import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: 'singlestore',
  tablesFilter: ["drive-tutorial_*"],
    dbCredentials: {
    host: env.SINGLESTORE_HOST,
    port: parseInt(env.SINGLESTORE_PORT),
    user: env.SINGLESTORE_USERNAME,
    password: env.SINGLESTORE_PASSWORD,
    database: env.SINGLESTORE_DB,
    ssl: {},
  },
} satisfies Config;
