/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/basheka/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

// Validate required environment variables
if (!projectId || projectId === '') {
  throw new Error(
    'Missing required Sanity configuration. Please set NEXT_PUBLIC_SANITY_PROJECT_ID in your .env.local file.'
  )
}

export default defineConfig({
  basePath: '/basheka',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
