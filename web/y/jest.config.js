const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
}

const overrideNextJestConfig = async () => {
  // Override the transformIgnorePatterns in the config created by NextJS
  const nextJestConfig = await createJestConfig(customJestConfig)()
  nextJestConfig.transformIgnorePatterns = [
    'node_modules/(?!(rnwpoc-lib)/)',
    ...nextJestConfig.transformIgnorePatterns.filter(
      (c) => !c.includes('node_modules')
    ),
  ]
  return nextJestConfig
}

module.exports = overrideNextJestConfig
