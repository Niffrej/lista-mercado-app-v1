import Storage from "./storage.js";

const Items = {
  items: Storage.getItems(),

  addItem: (produto, quantidade, preco) => {
    const novoItem = {
      id: Date.now(),
      produto,
      quantidade: Number(quantidade),
      preco: Number(preco),
      comprado: false
    };
    Items.items.push(novoItem);
    Storage.saveItems(Items.items);
    return novoItem;
  },

  removeItem: (id) => {
    Items.items = Items.items.filter(item => item.id !== id);
    Storage.saveItems(Items.items);
  },

  toggleCompra: (id) => {
    Items.items = Items.items.map(item =>
      item.id === id ? { ...item, comprado: !item.comprado } : item
    );
    Storage.saveItems(Items.items);
  },

  calcularTotal: () => {
    return Items.items.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
  }
};

export default Items;
