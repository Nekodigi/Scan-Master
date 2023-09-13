type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  created_at: string;
  updated_at: string;
};

type OrderItem = {
  product_id: number;
  order_id: number;
  name: string;
  quantity: number;
  created_at: string;
  updated_at: string;
};

type Order = {
  id: number | undefined;
  total_points: number;
  user_id: number | undefined;
  order_items: OrderItem[];
};

type HistoryRes = {
  orders: Order[];
};
