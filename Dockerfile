
# Imagem base leve com Node.js LTS
FROM node:20

# Cria diretório da aplicação
WORKDIR /app

# Copia package.json e tenta usar package-lock se existir para installs reproduzíveis
COPY package*.json ./

# Instala apenas dependências de produção (fallback para npm install se não houver lockfile)
RUN npm install --production

# Copia o restante do código
COPY . .

# Porta padrão (o app usa process.env.PORT || 3000)
EXPOSE 3000

# Comando de start
CMD ["node", "app.js"]

