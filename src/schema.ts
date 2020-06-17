import * as path from 'path'
import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'

import * as allTypes from './graphql'

export default makeSchema({
  types: allTypes,
  typegenAutoConfig: {
    contextType: '{ prisma: PrismaClient.PrismaClient }',
    sources: [{ source: '.prisma/client', alias: 'PrismaClient' }],
  },
  outputs: {
    schema: path.join(__dirname, '../schema.graphql'),
    typegen: path.join(__dirname, '/generated/typings.ts'),
  },
  plugins: [
    nexusPrismaPlugin({
      experimentalCRUD: true,
    }),
  ],
  prettierConfig: path.join(__dirname, '../.prettierrc'),
})
