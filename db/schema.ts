import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  boolean,
  uuid,
  serial,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  role: text("role"),
  banned: boolean("banned"),
  banReason: text("ban_reason"),
  banExpires: timestamp("ban_expires"),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  impersonatedBy: text("impersonated_by"),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const testimonial = pgTable("testimonial", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .notNull(),
  email: text("email"),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  public: boolean("public").default(false).notNull(),
  archived: boolean("archived").default(false).notNull(),
  name: text("name").default("").notNull(),
  position: text("position").default(""),
  image: text("image").default(""),
});

export const webhookEvents = pgTable("webhookEvent", {
  id: integer("id").primaryKey(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  eventName: text("eventName").notNull(),
  processed: boolean("processed").default(false),
  body: jsonb("body").notNull(),
  processingError: text("processingError"),
});

export const plans = pgTable("plan", {
  id: serial("id").primaryKey(),
  productId: integer("productId").notNull(),
  productName: text("productName"),
  variantId: integer("variantId").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  price: text("price").notNull(),
  isUsageBased: boolean("isUsageBased").default(false),
  interval: text("interval"),
  intervalCount: integer("intervalCount"),
  trialInterval: text("trialInterval"),
  trialIntervalCount: integer("trialIntervalCount"),
  sort: integer("sort"),
});

export const subscriptions = pgTable("subscription", {
  id: serial("id").primaryKey(),
  lemonSqueezyId: text("lemonSqueezyId").unique().notNull(),
  orderId: integer("orderId").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  status: text("status").notNull(),
  statusFormatted: text("statusFormatted").notNull(),
  renewsAt: text("renewsAt"),
  endsAt: text("endsAt"),
  trialEndsAt: text("trialEndsAt"),
  price: text("price").notNull(),
  isUsageBased: boolean("isUsageBased").default(false),
  isPaused: boolean("isPaused").default(false),
  subscriptionItemId: serial("subscriptionItemId"),
  variantId: integer("variantId")
    .notNull()
    .references(() => plans.variantId),
  cardLastFour: text("cardLastFour"),
  cardBrand: text("cardBrand"),
  variantName: text("variantName").notNull(),
  userId: text("userId").notNull(),
});

export const orders = pgTable("order", {
  id: serial("id").primaryKey(),
  orderId: text("orderId").unique().notNull(),
  refunded: boolean("refunded").default(false),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  status: text("status").notNull(),
  variantId: integer("variantId")
    .notNull()
    .references(() => plans.variantId),
  productName: text("productName").notNull(),
  userId: text("userId").notNull(),
});

export type NewPlan = typeof plans.$inferInsert;
export type NewWebhookEvent = typeof webhookEvents.$inferInsert;
export type NewSubscription = typeof subscriptions.$inferInsert;
export type NewOrder = typeof orders.$inferInsert;
