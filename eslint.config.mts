import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      // 1. This tells ESLint to expect standard browser variables (like window and document)
      globals: {
        window: "readonly",
        document: "readonly",
        // 2. This tells ESLint that THREE is a real thing loaded from outside!
        THREE: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-const-assign": "error",
      "no-unused-vars": "warn",
    },
  },
);