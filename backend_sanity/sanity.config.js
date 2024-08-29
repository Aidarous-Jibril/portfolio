import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'
import schemaTypes from './schemaTypes'; // Correct import statement


export default defineConfig({
  name: 'default',
  title: 'portfolio2022',

  projectId: 'r8r8f89x',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
