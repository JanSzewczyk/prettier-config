import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { type Config } from "prettier";

const logger = console;

function isPackageInstalled(packageName: string): boolean {
  const currentDir = process.cwd(); // Get the current working directory
  const packageJsonPath = findPackageJson(currentDir);

  // Read the package.json file
  try {
    const packageJson = readFileSync(packageJsonPath ?? "", "utf-8");
    const parsedPackageJson = JSON.parse(packageJson);

    // Check if the package is listed in dependencies or devDependencies
    const dependencies = parsedPackageJson.dependencies || {};
    const devDependencies = parsedPackageJson.devDependencies || {};

    return (
      dependencies.hasOwnProperty(packageName) ||
      devDependencies.hasOwnProperty(packageName)
    );
  } catch (error) {
    logger.error("Error reading package.json file:", error);
    process.exit(1);
  }
}

const PACKAGE_JSON = "package.json";
function findPackageJson(startDir: string) {
  let currentDir = startDir;

  while (true) {
    const packageJsonPath = join(currentDir, PACKAGE_JSON);

    if (existsSync(packageJsonPath)) {
      return packageJsonPath;
    }

    const parentDir = resolve(currentDir, "..");
    if (parentDir === currentDir) {
      // Reached the root of the filesystem
      break;
    }
    currentDir = parentDir;
  }

  return null;
}

const hasTailwindcss = isPackageInstalled("tailwindcss");

function showFeaturesTable() {
  const tableData = [
    { Name: "Package JSON", Status: "✔️" },
    { Name: "Tailwind", Status: hasTailwindcss ? "✔️" : "❌" },
  ].sort((a, b) => {
    // Check if Status contains the checkmark
    const aHasCheck = a.Status.includes("✔️");
    const bHasCheck = b.Status.includes("✔️");

    // Sort tasks with checkmarks first
    if (aHasCheck && !bHasCheck) {
      return -1;
    } else if (!aHasCheck && bHasCheck) {
      return 1;
    } else {
      return 0;
    }
  });

  logger.log("Hello There!");
  logger.log("Here are the features detected in your project:");
  logger.table(tableData);
  logger.log();
  logger.log(`Dear Developer`);
  logger.log();
  logger.log("Thanks a lot for using '@szum-tech/prettier-config'");
  logger.log(
    "If you like it, leave a star ⭐  👉 https://github.com/JanSzewczyk/prettier-config",
  );
  logger.log("And recommend to others");
  logger.log();
  logger.log(`May the SZUMRAK be with You 🚀🚀🚀`);
  logger.log();
  logger.log();
}

showFeaturesTable();

const baseConfig = {
  semi: true,
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 120,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  htmlWhitespaceSensitivity: "css",
  embeddedLanguageFormatting: "auto",
} satisfies Config;

const plugins = [
  "prettier-plugin-packagejson",
  hasTailwindcss ? "prettier-plugin-tailwindcss" : null,
].filter(Boolean) as Array<string>

const tailwindcssConfig = {
  tailwindAttributes: ["class", "className", "ngClass", ".*[cC]lassName"],
  tailwindFunctions: ["classNames", "clsx", "cn"],
} satisfies Config;

export default {
  ...baseConfig,
  plugins,
  ...(hasTailwindcss ? tailwindcssConfig : {}),
} satisfies Config


