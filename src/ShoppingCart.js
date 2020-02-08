class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    const newItem = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    };
    this.items.push(newItem);
  }

  clear() {
    this.items = [];
  }

  total() {
    return this.items
      .map(element => element.pricePerUnit * element.quantity)
      .reduce((acc, value) => acc + value, 0);
  }
}

module.exports = ShoppingCart;
