const path = require("path");
const fs = require("fs");

const REGISTRY_PATH = path.join(process.cwd(), "/previews");

function getFilesRecursive(directory) {
  const files = [];
  const items = fs.readdirSync(directory);

  // Remove the check for index.tsx
  for (const item of items) {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getFilesRecursive(fullPath));
    } else if (item.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = getFilesRecursive(REGISTRY_PATH);

let index = `import dynamic from "next/dynamic";
 
export const PREVIEWS: Record<string, { name: string; component: any; code: string }> = {`;

// Previews
for (const file of files) {
  const relativePath = path.relative(REGISTRY_PATH, file);
  let componentName = relativePath
    .replace(/\.tsx$/, "")
    .replace(/\//g, "-")
    .replace("styles-", "")
    .replace(".preview", "");

  const fileContent = fs
    .readFileSync(file, "utf8")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");

  index += `"${componentName}": {
      name: "${componentName.split("-").pop()}",
      component: dynamic(
        () => import("@/previews/${relativePath.replace(".tsx", "")}"),
        {
          ssr: false,
        }
      ),
      code: \`${fileContent}\`,
    },
  `;
}

index += `
};

`;

fs.writeFileSync(path.join(process.cwd(), "__registry__/index.tsx"), index);
