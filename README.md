cd ~/Portifolio

# 1. Reconstroi a imagem (roda npm run build novamente)
docker compose build caiosite 

# 2. Substitui o contêiner antigo pelo novo
docker compose up -d