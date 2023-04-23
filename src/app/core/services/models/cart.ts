export type Discount = {
  value: number;
  quantity: number;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  discount: Discount[];
}

export type LineItem = {
  product: Product;
  quantity: number
}

interface IOrder {
  listProduct: LineItem[];
}

export class Order implements IOrder {
  listProduct: LineItem[] = [];

  constructor(data: LineItem[]) {
    this.listProduct = [...data];
  }

  getOrder() {
    return this.listProduct;
  }

  getItem(id: number) {
    return this.listProduct.find((item: LineItem) => item.product.id === id);
  }

  addToCart(lineItem: LineItem) {
    this.listProduct.push(lineItem);
  }

  deleteItem(id: number) {
    this.listProduct = this.listProduct.filter((item: LineItem) => item.product.id !== id );
  }

  deleteOrder() {
    this.listProduct = [];
  }

  getDiscountValue(item: LineItem) {
    let discountValue = 0;
    item.product.discount.sort((a,b) => a.quantity - b.quantity).forEach((discount: Discount) => {
      if (item.quantity >= discount.quantity) {
        discountValue = discount.value;
      }
    });
    return discountValue;
  }

  getPrice() {
    return this.listProduct.reduce((sum, item: LineItem) => {
      const discount = this.getDiscountValue(item);
      return sum + item.product.price * item.quantity * (1 - discount);
    }, 0);
  }
}
