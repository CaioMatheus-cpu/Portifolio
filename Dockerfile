# --- ESTÁGIO 1: CONSTRUÇÃO (BUILD) ---
# Usa uma imagem base leve para node
FROM node:20-slim as builder

# Define o diretório de trabalho
WORKDIR /app

# Copia e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Constrói o projeto Vite (executa o script 'build' do seu package.json)
# O resultado estará na pasta 'dist'
RUN npm run build

# --- ESTÁGIO 2: SERVIÇO (RUNTIME) ---
# Usa uma imagem base ainda mais leve para servir o conteúdo estático
FROM node:20-slim
WORKDIR /usr/share/app/

# Copia a pasta 'dist' do estágio de construção
COPY --from=builder /app/dist /usr/share/app/dist

# O contêiner irá expor a porta 80 (para ser acessada pelo Nginx Proxy Manager)
EXPOSE 80

# Instala e usa um servidor HTTP simples (o 'serve')
# O 'serve' é a forma mais fácil de servir o conteúdo estático que o Vite gerou
RUN npm install -g serve
CMD ["serve", "-s", "/usr/share/app/dist", "-l", "80"]