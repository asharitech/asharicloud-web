import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      // Relax some rules for existing codebase
      "react/no-unescaped-entities": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react/display-name": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "import/no-anonymous-default-export": "warn",
      // Disable barrel file restriction for now
      "no-restricted-syntax": "off",
    },
  },
];

export default eslintConfig;
