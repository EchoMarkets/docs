import withMarkdoc from "@markdoc/next.js";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
};

export default withMarkdoc({ schemaPath: "./markdoc" })(nextConfig);
