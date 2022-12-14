export const applyDiscount = (price: number, discount: number): any =>
  (price - price * (discount / 100)).toFixed(2);
