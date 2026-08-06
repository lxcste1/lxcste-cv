import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import tseslint from "typescript-eslint";

const eslintConfig = tseslint.config(
  ...nextCoreWebVitals,
  ...nextTypescript,
  tseslint.configs.recommended,
);

export default eslintConfig;
