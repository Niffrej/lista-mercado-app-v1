import Items from "./items.js";

const UI = {
  renderizarLista: () => {
    $("#lista-itens tbody").empty();
    Items.items.forEach(UI.adicionarItemNaTabela);
    UI.atualizarTotal();
  },

  adicionarItemNaTabela: (item) => {
    const row = `
      <tr data-id="${item.id}">
        <td><input type="checkbox" class="toggle-compra" ${item.comprado ? "checked" : ""}></td>
        <td class="${item.comprado ? "item-comprado" : ""}">${item.produto}</td>
        <td>${item.quantidade}</td>
        <td>R$ ${item.preco.toFixed(2)}</td>
        <td>R$ ${(item.quantidade * item.preco).toFixed(2)}</td>
        <td><button class="remover">🗑️</button></td>
      </tr>
    `;
    $("#lista-itens tbody").append(row);
  },

  atualizarTotal: () => {
    $("#total-geral").text(`Total: R$ ${Items.calcularTotal()}`);
  },

  limparCampos: () => {
    $("#item, #quantidade, #preco").val("");
  }
};

export default UI;
