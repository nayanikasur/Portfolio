import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // The parent folder (my-app) has its own package-lock.json; pin the root to this project.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
