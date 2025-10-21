import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  // --- INÍCIO DA CORREÇÃO ---
  preview: {
    host: true, // Permite que o servidor seja acessado pela rede
    allowedHosts: ['caiomatheus.site'], // Adiciona seu domínio à lista de permissões
  },
  // --- FIM DA CORREÇÃO ---
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
}));
