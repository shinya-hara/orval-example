import { defineConfig } from "orval";

/**
 * Orval Configuration
 * @see https://orval.dev/reference/configuration/overview
 */
export default defineConfig({
  petstore: {
    input: {
      target: "./docs/openapi.json",
    },
    output: {
      mode: "split",
      target: "./generated/api.ts",
      schemas: "./generated/model",
      client: "axios-functions",
      mock: true,
      clean: true,
    },
  },
});
