import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  rules: {
    // TypeScript — diaktifkan kembali (kode sudah bersih dari `any` & ts-ignore)
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/prefer-as-const": "error",

    // React — exhaustive-deps sebagai warning agar tidak memblokir build
    "react-hooks/exhaustive-deps": "warn",
    // set-state-in-effect sebagai warning: kasus di codebase ini adalah
    // sinkronisasi satu kali saat mount (deteksi mount, init viewport,
    // init carousel) yang disengaja agar aman dari hydration mismatch.
    "react-hooks/set-state-in-effect": "warn",

    // General — aturan kebenaran dasar
    "prefer-const": "error",
    // no-unused-vars versi JS dimatikan karena sudah digantikan versi TypeScript di atas
    "no-unused-vars": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "no-unreachable": "error",
    "no-fallthrough": "error",
    "no-case-declarations": "error",
    "no-redeclare": "error",
    "no-useless-escape": "warn",
    "no-empty": "error",

    // Tetap nonaktif: stylistic / ditangani manual, bukan masalah kebenaran
    "react-hooks/purity": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react-compiler/react-compiler": "off",
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
    "no-irregular-whitespace": "off",
    "no-mixed-spaces-and-tabs": "off",
    // no-undef dimatikan karena TypeScript sudah memeriksa variabel tak dikenal
    "no-undef": "off",
  },
}, {
  // fetch-icons.js adalah script utilitas Node (CommonJS) sekali jalan
  // untuk regenerate icons.json — require() di sini disengaja.
  files: ["fetch-icons.js"],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "examples/**", "skills"]
}];

export default eslintConfig;
