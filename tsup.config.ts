import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  target: 'node20',
  external: [], // ← disables all externals (bundles everything)
   // Optional but recommended in monorepos:
   noExternal: ['@process.co/element-types', '@process.co/elements', '@process.co/compatibility'],

})