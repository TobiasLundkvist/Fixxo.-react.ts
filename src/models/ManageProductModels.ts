// när vi hämtar en produkt
export interface IProduct {
   tag: string
   id: any;
   imageName: string;
   name: string;
   category: string;
   price: number;
   articleNumber: string;
   rating: number;
}

// vill skapa denna produkt
export interface ICreateProduct {
   tag: string
   imageName: string;
   name: string;
   category: string;
   price: number;
   articleNumber: string;
   rating: number;
}