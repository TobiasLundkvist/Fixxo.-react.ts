// när vi hämtar en produkt
export interface IProduct {
   id: number;
   imageName: string;
   name: string;
   category: string;
   price: number;
   articleNumber: string;
   rating: number;
}

// vill skapa denna produkt
export interface ICreateProduct {
   imageName: string;
   name: string;
   category: string;
   price: number;
   articleNumber: string;
   rating: number;
}