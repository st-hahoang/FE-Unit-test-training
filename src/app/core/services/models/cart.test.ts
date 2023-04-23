import { LineItem, Order } from './cart';

const lineItem1: LineItem = {
  product: {
    id: 1,
    name: 'apple',
    price: 5,
    discount: [
      {
        value: 0.15,
        quantity: 7,
      },
      {
        value: 0.1,
        quantity: 5,
      }
    ]
  },
  quantity: 6
};

const lineItem2: LineItem = {
  product: {
    id: 2,
    name: 'pear',
    price: 10,
    discount: [
      {
        value: 0.15,
        quantity: 5,
      },
      {
        value: 0.2,
        quantity: 7,
      }
    ]
  },
  quantity: 8
};

describe('Test cart', () => {
  describe('Get order', () => {
    const order = new Order([lineItem1]);
    const ord = order.getOrder();
    test('Get product success', () => {
      expect(ord).toHaveLength(1);
      expect(ord).toContain(lineItem1);
    });
  });

  describe('Get product in cart', () => {
    const order = new Order([lineItem1]);
    const product = order.getItem(1);
    test('Get product in cart success', () => {
      expect(product).toEqual(lineItem1);
    });
  });

  describe('Add to cart', () => {
    const order = new Order([lineItem1]);
    order.addToCart(lineItem2);
    test('Add to cart success', () => {
      expect(order.getOrder()).toHaveLength(2);
      expect(order.getOrder()).toContain(lineItem1);
      expect(order.getOrder()).toContain(lineItem2);
    });
  });

  describe('Delete product in cart', () => {
    const order = new Order([lineItem1]);
    order.deleteItem(1);
    test('remove product in order success', () => {
      expect(order.getOrder()).toHaveLength(0);
      expect(order.getOrder()).toEqual([]);
    });
  });

  describe('Remover all product in cart', () => {
    const order = new Order([lineItem1]);
    order.deleteOrder();
    test('Remover all product in cart success', () => {
      expect(order.getOrder()).toHaveLength(0);
      expect(order.getOrder()).toEqual([]);
    });
  });

  describe('getPrice', () => {
    const order = new Order([lineItem1]);
    test('getPrice success', () => {
      expect(order.getPrice()).toBe(27);
    });
    test('getPrice after add new product', () => {
      order.addToCart(lineItem2);
      expect(order.getPrice()).toBe(91);
    });
  });
});
