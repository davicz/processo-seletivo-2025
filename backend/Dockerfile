# Etapa 1: Usar uma imagem base do Node.js (versão 18-alpine é leve e estável)
FROM node:18-alpine

# Etapa 2: Definir o diretório de trabalho dentro do contêiner
# Todos os comandos a seguir serão executados a partir deste diretório
WORKDIR /usr/src/app

# Etapa 3: Copiar os arquivos de definição de dependências para aproveitar o cache do Docker
# O 'COPY package*.json ./' copia tanto o package.json quanto o package-lock.json
COPY package*.json ./

# OBSERVAÇÃO: Não vamos rodar 'npm install' aqui. Faremos isso de forma mais inteligente
# no Docker Compose para que o hot-reload funcione perfeitamente com os volumes.

# Etapa 4: Copiar todo o resto do código da sua aplicação
COPY . .

# Etapa 5: Expor a porta que a aplicação NestJS usa por padrão
EXPOSE 3000

# Etapa 6: Comando padrão para iniciar a aplicação em modo de desenvolvimento
# (Este comando será o que o Docker Compose usará para rodar a aplicação)
CMD ["npm", "run", "start:dev"]