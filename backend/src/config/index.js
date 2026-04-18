// Central config — all env vars read from one place
export const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',

  // FUTURE: database
  // databaseUrl: process.env.DATABASE_URL,

  // FUTURE: payment
  // stripeSecretKey: process.env.STRIPE_SECRET_KEY,

  // FUTURE: newsletter
  // mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
  // mailchimpListId: process.env.MAILCHIMP_LIST_ID,
}
