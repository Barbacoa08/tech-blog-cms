import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import {
  Icon,
  Posts,
  Program,
  Tags,
  TechPosts,
  Topics,
  Users,
} from "./collections";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  rateLimit: {
    trustProxy: true,
  },
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Icon, Posts, TechPosts, Tags, Topics, Users, Program],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // cors: [
  //   "http://localhost",
  //   "http://localhost:3000",
  //   "http://localhost:5137",
  //   "http://cms-fighter-advice.barbajoe.tech",
  //   "https://cms-fighter-advice.barbajoe.tech",
  //   "http://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
  //   "https://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
  // ],
  // csrf: [
  //   "http://localhost",
  //   "http://localhost:3000",
  //   "http://localhost:5137",
  //   "http://cms-fighter-advice.barbajoe.tech",
  //   "https://cms-fighter-advice.barbajoe.tech",
  //   "http://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
  //   "https://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
  // ],
})
