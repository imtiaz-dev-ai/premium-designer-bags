export type CartItem = {
  id: string;
  title: string;
  price: string;
  tag: string;
  img: string;
  size: string;
  quantity: number;
};

export type Order = {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: string;
  shipping: string;
  total: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
  };
  paymentMethod: string;
  status: "confirmed" | "processing" | "shipped" | "delivered" | "cancelled";
  note?: string;
};

const CART_KEY = "cart_items";
const ORDERS_KEY = "orders";

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("storage"));
}

export function addToCart(item: Omit<CartItem, "quantity"> & { quantity?: number }) {
  const cart = getCart();
  const existing = cart.find((c) => c.id === item.id && c.size === item.size);
  const qty = item.quantity && item.quantity > 0 ? item.quantity : 1;
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...item, quantity: qty });
  }
  saveCart(cart);
}

export function removeFromCart(id: string, size: string) {
  saveCart(getCart().filter((c) => !(c.id === id && c.size === size)));
}

export function updateQty(id: string, size: string, qty: number) {
  const cart = getCart();
  const item = cart.find((c) => c.id === id && c.size === size);
  if (item) item.quantity = qty;
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

export function saveOrder(order: Order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function getOrders(): Order[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function updateOrderStatus(id: string, status: Order["status"], note?: string) {
  const orders = getOrders();
  const order = orders.find((o) => o.id === id);
  if (order) {
    order.status = status;
    if (note !== undefined) order.note = note;
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }
}

export function deleteOrder(id: string) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(getOrders().filter((o) => o.id !== id)));
}

export function getCartCount(): number {
  return getCart().reduce((sum, c) => sum + c.quantity, 0);
}

export function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((sum, c) => sum + parsePrice(c.price) * c.quantity, 0);
}
