# Penelope X — correção de sincronização do treino

Esta atualização corrige um comportamento dos treinos em andamento.

## Problema corrigido

A Penelope preserva um "rascunho" do treino do dia no IndexedDB. Se a ficha fosse atualizada depois que esse rascunho já havia sido criado, ele continuava usando a estrutura antiga — por isso o abdominal podia não aparecer mesmo com a nova ficha já publicada.

## Correção

Agora, ao abrir um treino em andamento, a Penelope sincroniza o rascunho com a ficha atual:

- adiciona exercícios novos, como o abdominal;
- atualiza séries, repetições, RIR e descanso;
- mantém cargas, repetições, RIR e séries já registradas;
- preserva exercícios antigos que já tenham séries salvas, para não perder dados;
- não altera treinos já finalizados no histórico.

Nenhum dado de alimentação, fotos, medidas, meta de peso, Meus Alimentos ou histórico finalizado é apagado.
