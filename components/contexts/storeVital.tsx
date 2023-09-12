"use client";

import { createContext, useEffect, useRef, useState } from "react";

type StoreVitalProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  getProduct: (id: number) => Product | undefined;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  getUser: (id: number) => User | undefined;
};

export const StoreVitalContext = createContext<StoreVitalProps>(
  {} as StoreVitalProps
);

export const StoreVitalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  //check if first time
  const firstTime = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setProducts(json as Product[]);
        });
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setUsers(json as User[]);
        });

      //setProducts(products as Product[]);
    };
    if (firstTime.current) {
      firstTime.current = false;
      if (process.env.NEXT_PUBLIC_DATA === "DUMMY") {
        setProducts([
          {
            id: 1,
            name: "エスプレッソ",
            price: 560,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 2,
            name: "抹茶ラテ",
            price: 670,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 3,
            name: "カフェラテ",
            price: 580,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 4,
            name: "カプチーノ",
            price: 580,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 5,
            name: "アイスコーヒー",
            price: 500,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 6,
            name: "インスタントコーヒー",
            price: 500,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 7,
            name: "インド産コーヒー豆",
            price: 500,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
        ]);
        setUsers([
          {
            id: 1,
            name: "山田太郎",
          },
          {
            id: 2,
            name: "田中花子",
          },
          {
            id: 3,
            name: "佐藤一郎",
          },
          {
            id: 4,
            name: "鈴木二郎",
          },
        ]);
      } else {
        fetchData();
      }
    }
  }, []);

  const getProduct = (id: number) => {
    return products.find((product) => product.id === id);
  };

  const getUser = (id: number) => {
    return users.find((user) => user.id === id);
  };

  return (
    <StoreVitalContext.Provider
      value={{ products, setProducts, getProduct, users, setUsers, getUser }}
    >
      {products.length > 0 ? children : <p>Loading... </p>}
    </StoreVitalContext.Provider>
  );
};
