export type Product = {
  id: number;
  name: string;
  price: number;
};

type Review = {
  reviewer: string;
  rating: number;
  comment: string;
};

export type SalesReport = {
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
};

const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject("Failed to fetch product catalog");
      }
    }, 1000);
  });
};

console.log(fetchProductCatalog)

const fetchProductReviews = (productId:number): Promise<Review[]> =>{

 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.75) {
        resolve([
          { reviewer: "Alice", rating: 5, comment: "Great product!" },
          { reviewer: "Bob", rating: 4, comment: "Worth the price." },
        ]);
      } else {
        reject(`Failed to fetch reviews for product ID ${productId}`)
        
      }
    }, 1500);
  });
};

