#!/bin/bash
# Este script é executado pelo Netlify durante o processo de "deploy".

echo "A iniciar o script de build: A injetar a configuração do Firebase..."

# Verifica se a variável de ambiente FIREBASE_CONFIG existe.
if [ -z "${FIREBASE_CONFIG}" ]; then
  echo "ERRO: A variável de ambiente FIREBASE_CONFIG não está definida no Netlify."
  exit 1
fi

# Substitui o placeholder no ficheiro index.html pelo valor real da variável de ambiente.
# Usamos o delimitador '#' no sed para evitar problemas com caracteres especiais no JSON.
sed -i "s#__FIREBASE_CONFIG_PLACEHOLDER__#${FIREBASE_CONFIG}#g" index.html

echo "Configuração do Firebase injetada com sucesso em index.html."
