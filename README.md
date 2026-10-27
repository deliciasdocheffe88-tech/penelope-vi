# Penelope IX — Meus Alimentos

Atualização focada no diário alimentar.

- Alimentos cadastrados manualmente passam a ser salvos em **Meus alimentos**.
- Na próxima vez, basta escolher o alimento e informar uma nova quantidade.
- Para alimentos em g ou ml, a Penelope guarda a referência por 100 g / 100 ml.
- Para alimentos cadastrados em unidade, guarda a referência por unidade.
- É possível usar ou excluir os alimentos personalizados na própria tela.
- A atualização tenta recuperar automaticamente alimentos manuais já lançados no histórico da Penelope VIII.
- O backup passa a incluir também a biblioteca de alimentos personalizados.
- Banco de alimentos, fotos agrupadas, meta de peso, treino e alarme do timer continuam preservados.
- O banco local é migrado de IndexedDB v2 para v3 apenas para criar a nova coleção `customFoods`; as coleções existentes não são apagadas.
