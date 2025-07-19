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
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",

      // React rules
      "react/no-unescaped-entities": "warn",
      "react/display-name": "warn",
      "react-hooks/exhaustive-deps": "warn",

      // Next.js rules
      "@next/next/no-img-element": "warn",

      // Import rules
      "import/no-anonymous-default-export": "warn",

      // Accessibility
      "jsx-a11y/alt-text": "warn",
    },
  },
  {
    // Prevent creation of barrel files
    files: ["**/index.ts", "**/index.tsx"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Program[sourceType='module']:has(ExportAllDeclaration,ExportNamedDeclaration)",
          message:
            "Barrel files (index.ts/tsx) are not allowed. Use direct imports instead.",
        },
      ],
    },
  },
];

export default eslintConfig;
