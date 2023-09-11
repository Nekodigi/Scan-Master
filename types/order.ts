type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  id: number | undefined;
  items: Product[];
};
