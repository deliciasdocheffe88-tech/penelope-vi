# Penelope X — correção definitiva de cache da rotina

Esta atualização corrige a causa do abdominal não aparecer no aplicativo instalado.

## Causa

A ficha de treino é definida no `index.html`, enquanto o aplicativo também carrega `app.js`.
O service worker anterior trabalhava em modo **cache-first**, então o PWA podia abrir uma combinação inconsistente:
um `app.js` novo com um `index.html` antigo ainda armazenado em cache.

Nesse cenário, o código de sincronização funcionava, mas sincronizava o treino com uma versão antiga da ficha — sem o abdominal.

## Correções

1. `app.js` agora reforça, em tempo de execução, a configuração atual do abdominal:
   - Terça (B): 2x10–15, RIR 1–2, 75 s.
   - Quarta (C): 2x10–15, RIR 1–2, 75 s.
   - Sexta (E): 2x10–15, RIR 1–2, 75 s.
   - Segunda (A) e quinta (D): sem abdominal.

2. O service worker passou a usar **network-first** para `index.html`, `app.js`, `styles.css` e `manifest.webmanifest`.
   Assim, quando houver internet, a Penelope busca primeiro a versão publicada mais recente.

3. O registro do service worker agora também solicita `update()` no boot.

4. A sincronização de treinos em andamento continua preservando séries já registradas.

Nenhum dado do IndexedDB é apagado ou reinicializado.
