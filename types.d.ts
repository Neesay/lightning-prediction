declare namespace NodeJS {
  interface ProcessEnv {
    GOES_BUCKET: string;
    REDIS_REST_URL: string;
    REDIS_REST_TOKEN: string;
    MAPBOX_TOKEN?: string;
  }
}
