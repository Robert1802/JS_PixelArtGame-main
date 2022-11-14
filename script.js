// Query selector retorna o primeiro elemento de um documento
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

// Ao clicar na paleta seleciona uma cor
const select = () => query('#color-palette').addEventListener('click', (e) => {
  query('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});

// Ao clicar no pixel board muda a cor do fundo
const fill = () => query('#pixel-board').addEventListener('click', (e) =>
  e.target.style.backgroundColor = query('.selected').style.backgroundColor);

// Botão que pinta todos os quadrados de branco
const clear = () => query('#clear-board').addEventListener('click', () => {
  for (const p of queryAll('.pixel')) p.style.backgroundColor = 'white';
});

select(), fill(), clear();
