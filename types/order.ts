type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  id: number | undefined;
  total_points: number;
  user_id: number | undefined;
  items: Product[];
};
