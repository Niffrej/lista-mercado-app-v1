import Items from "./modules/items.js";
import UI from "./modules/ui.js";

$(document).ready(() => {
  UI.renderizarLista();

  $("#adicionar").click(() => {
    const produto = $("#item").val().trim();
    const quantidade = $("#quantidade").val();
    const preco = $("#preco").val();

    if (produto && quantidade > 0 && preco > 0) {
      const novoItem = Items.addItem(produto, quantidade, preco);
      UI.adicionarItemNaTabela(novoItem);
      UI.atualizarTotal();
      UI.limparCampos();
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  });

  $("#lista-itens").on("click", ".remover", function () {
    const id = $(this).closest("tr").data("id");
    Items.removeItem(id);
    UI.renderizarLista();
  });

  $("#lista-itens").on("change", ".toggle-compra", function () {
    const id = $(this).closest("tr").data("id");
    Items.toggleCompra(id);
    UI.renderizarLista();
  });
});
