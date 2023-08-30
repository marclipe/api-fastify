import 'dotenv/config'
import { z } from 'zod'

// process.env é um objeto
const envSchema = z.object({
  NODE_ENV: z.enum(['devolopment', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  // Para o código não continuar executando
  throw new Error('Invalid environment variables.')
}
// Aí se ele passar pelo if
export const env = _env.data
