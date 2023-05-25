import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        exclude: ['**/node_modules/**', '**/build/**'],
        include: ['./src/**/*.{spec,test}.ts'],
        globals: true
    },
})