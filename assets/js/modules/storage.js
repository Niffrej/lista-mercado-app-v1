const Storage = {
  getItems: () => JSON.parse(localStorage.getItem("lista-compras")) || [],

  saveItems: (items) => localStorage.setItem("lista-compras", JSON.stringify(items))
};

export default Storage;
