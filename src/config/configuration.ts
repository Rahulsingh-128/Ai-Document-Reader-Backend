export default () => ({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:3001',

  databaseUrl: process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/AI_Doc',
  redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379',

  jwtSecret: process.env.JWT_SECRET ?? 'change-me-in-production',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',

  uploadDir: process.env.UPLOAD_DIR ?? './uploads',
  maxFileSizeMb: Number(process.env.MAX_FILE_SIZE_MB ?? 50),

  ollamaBaseUrl: process.env.OLLAMA_BASE_URL ?? 'http://localhost:11434',
  ollamaEmbeddingModel: process.env.OLLAMA_EMBEDDING_MODEL ?? 'nomic-embed-text',
  ollamaLlmModel: process.env.OLLAMA_LLM_MODEL ?? 'llama3.1:8b',

  vectorDimensions: Number(process.env.VECTOR_DIMENSIONS ?? 768),
  queueConcurrency: Number(process.env.QUEUE_CONCURRENCY ?? 3),
});
