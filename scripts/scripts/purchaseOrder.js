export function getPurchaseOrders() {
  const purchaseOrders = JSON.parse(localStorage.getItem("purchaseOrders"));
  console.log(purchaseOrders);
  return purchaseOrders;
}

export function savePurchaseOrders() {
 
}