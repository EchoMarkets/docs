import withMarkdoc from "@markdoc/next.js";
import withSearch from "./markdoc/search.mjs";

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
  turbopack: {},
};

export default withMarkdoc({ schemaPath: "./markdoc" })(withSearch(nextConfig));
