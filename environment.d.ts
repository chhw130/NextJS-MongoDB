declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MONGODB_KEY: string;
      NODE_ENV: "development" | "production";
    }
  }
}

declare module "*.png";

export {};
