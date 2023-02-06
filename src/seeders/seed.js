const db = require('../utils/database');
const Users = require('../models/users.models');
const Product = require('../models/product.models');
const Order = require('../models/Order.models');
const Cart = require('../models/Cart.models');
const ProductsInCart = require('../models/ProductInCart.models');
const ProductsInOrder = require('../models/ProductInOrder.models');
const initModels = require('../models/initModels');

initModels();

const users = [
  {
    username: 'name 1',
    email: 'user1@mail.com',
    password: '12345',
  },
  {
    username: 'name 2',
    email: 'user2@mail.com',
    password: '12345',
  },
  {
    username: 'name 3',
    email: 'user3@mail.com',
    password: '12345',
  },
  {
    username: 'name 4',
    email: 'user4@mail.com',
    password: '12345',
  },
];

const products = [
  {
    name: 'product 1',
    price: 10000,
    available_qty: 15,
    status: 'not_purchased',
    user_id: 1,
  },
  {
    name: 'product 2',
    price: 20000,
    available_qty: 25,
    status: 'not_purchased',
    user_id: 2,
  },
  {
    name: 'product 3',
    price: 30000,
    available_qty: 50,
    status: 'purchased',
    user_id: 3,
  },
  {
    name: 'product 4',
    price: 50000,
    available_qty: 60,
    status: 'purchased',
    user_id: 4,
  },
];

const orders = [
  {
    total_price: 20200,
    user_id: 1,
    status: 'purchased',
  },
  {
    total_price: 33000,
    user_id: 2,
    status: 'purchased',
  },
  {
    total_price: 40000,
    user_id: 3,
    status: 'purchased',
  },
  {
    total_price: 50000,
    user_id: 4,
  },
];

const carts = [
  {
    user_id: 1,
    total_price: 111.11,
  },
  {
    user_id: 2,
    total_price: 222.22,
  },
  {
    user_id: 3,
    total_price: 333.33,
  },
  {
    user_id: 4,
    total_price: 57000,
  },
];

const productsInCart = [
  {
    cart_id: 1,
    product_id: 1,
    quantity: 1,
    price: 1000,
    status: 'not_purchased',
  },
  {
    cart_id: 2,
    product_id: 2,
    quantity: 2,
    price: 2000,
    status: 'not_purchased',
  },
  {
    cart_id: 3,
    product_id: 3,
    quantity: 3,
    price: 3000,
  },
  {
    cart_id: 4,
    product_id: 4,
    quantity: 4,
    price: 4000,
    status: 'purchased',
  },
];

const productsInOrder = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 1,
    price: 1000,
    status: 'not_purchased',
  },
  {
    order_id: 2,
    product_id: 2,
    quantity: 2,
    price: 2000,
  },
  {
    order_id: 3,
    product_id: 3,
    quantity: 3,
    price: 3000,
    status: 'purchased',
  },
  {
    order_id: 4,
    product_id: 4,
    quantity: 4,
    price: 4000,
    status: 'not_purchased',
  },
];

db.sync({ force: true })
  .then(() => {
    console.log('starting seed');
    users.forEach((user) => {
      Users.create(user);
    });
    setTimeout(() => {
      products.forEach((product) => {
        Product.create(product);
      });
    }, 1000);
    setTimeout(() => {
      orders.forEach((order) => {
        Order.create(order);
      });
    }, 2000);
    setTimeout(() => {
      carts.forEach((cart) => {
        Cart.create(cart);
      });
    }, 3000);
    setTimeout(() => {
      productsInCart.forEach((product) => {
        ProductsInCart.create(product);
      });
    }, 4000);
    setTimeout(() => {
      productsInOrder.forEach((product) => {
        ProductsInOrder.create(product);
      });
    }, 5000);
  })
  .catch((error) => console.log(error));
