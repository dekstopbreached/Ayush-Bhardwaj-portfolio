declare module "node:url" {
  export function fileURLToPath(url: string | URL): string;
}

interface ImportMeta {
  readonly url: string;
}