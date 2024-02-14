const customers = [
  { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
  { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
];

const orders = [
  { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
  { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
];


const customerEmails = customers.map(customer => customer.email);
console.log("Customer Emails:", customerEmails);  

const highValueOrders = orders.filter(order => order.quantity * order.price > 1000);
console.log("High-Value Orders:", highValueOrders);

const customerAlice = customers.find(customer => customer.name === "Alice");
if (customerAlice) {
  console.log("Alice Customer:", customerAlice);
} else {
  console.log("Customer named Alice not found.");
}

const orderIndex = orders.findIndex(order => order.orderId === 102);
if (orderIndex !== -1) {
  console.log("Index of order with orderId 102:", orderIndex);
} else {
  console.log("Order with orderId 102 not found.");
}

const usaOrders = orders.some(order => customers.find(customer => customer.id === order.customerId).location.country === "USA");
console.log("Are there any orders from USA customers? : ", usaOrders);

orders.forEach(order => {
  const customerName = customers.find(customer => customer.id === order.customerId).name;
  const totalPrice = order.quantity * order.price;
  console.log(`Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${totalPrice.toFixed(2)} each.`);
});

const sortedCustomers = customers.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted customers by name:", sortedCustomers);


