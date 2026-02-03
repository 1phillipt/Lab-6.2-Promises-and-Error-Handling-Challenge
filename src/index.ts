import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";



const fetchAllData = async (): Promise<void> => {
  try {
    
    const products = await fetchProductCatalog();
    console.log("Products:");
    console.log(products);

    for (const product of products) {
      const reviews = await fetchProductReviews(product.id);
      console.log(`Reviews for ${product.name}:`);
      console.log(reviews);
    }

    const report = await fetchSalesReport();
    console.log("Sales Report:");
    console.log(report);

  } catch (error) {
        console.log("Error fecthing data", error);
     
  } finally {
    console.log("all api calls have been attempted.");
  }
};

fetchAllData();
