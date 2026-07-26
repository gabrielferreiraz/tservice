import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um build mínimo e autocontido em .next/standalone, usado pelo
  // Dockerfile — imagem final bem menor e boot bem mais rápido no EasyPanel.
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
