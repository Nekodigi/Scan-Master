"use client";

import { createContext, useEffect, useRef, useState } from "react";

type StoreVitalProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
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
      fetchData();
    }
  }, []);

  return (
    <StoreVitalContext.Provider
      value={{ products, setProducts, users, setUsers }}
    >
      {children}
    </StoreVitalContext.Provider>
  );
};
