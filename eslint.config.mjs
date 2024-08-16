import { default as eslint } from "@eslint/js";
import { default as tslint } from "typescript-eslint";

export default tslint.config(
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  ...tslint.configs.stylistic,
  {
    ignores: ["node_modules", "build", "dist", ".next"],
  },
);
