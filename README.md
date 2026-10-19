# Penelope VI — Nutrição & Treino

Mantém a ficha da Penelope IV e todos os módulos da Penelope V.

## Metas nutricionais iniciais
- 1.850 kcal/dia
- 145 g proteína
- 180 g carboidratos
- 60 g gorduras
- 30 g fibras
- 2.800 ml água

As metas podem ser alteradas dentro do app.

## Foto da refeição
O módulo de alimentação permite tirar/escolher uma foto da refeição e armazená-la junto do registro.
A foto é comprimida antes de ser salva.

A estimativa automática de calorias e macronutrientes por foto NÃO está ativada nesta versão:
- um PWA totalmente offline não possui, sozinho, um modelo de visão confiável para isso;
- uma análise automática útil exigiria internet e um serviço de IA por meio de um backend seguro;
- mesmo com IA, porções, óleos, molhos e ingredientes ocultos tornam o resultado uma estimativa, não uma medição exata.

## Privacidade e persistência
Dados locais em IndexedDB. Sem login. Backup JSON disponível.
