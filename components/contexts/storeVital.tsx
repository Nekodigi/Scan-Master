"use client";

import { createContext, useEffect, useRef, useState } from "react";

type StoreVitalProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  getProduct: (id: number) => Product | undefined;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  getUser: (id: number) => User | undefined;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [user, setUser_] = useState<User>();
  //check if first time
  const firstTime = useRef(true);
  const [open, setOpen] = useState(false);

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
          let users_ = json as User[];
          setUsers(users_);

          let user_id = localStorage.getItem("user_id");
          if (user_id) {
            let user_ = users_.find((user) => user.id === parseInt(user_id!));
            if (user_) {
              setUser(user_);
            }
          }
        });
    };
    if (firstTime.current) {
      firstTime.current = false;
      if (process.env.NEXT_PUBLIC_DATA === "DUMMY") {
        setProducts([
          {
            id: 1,
            name: "エスプレッソ",
            price: 560,
            image_url: "https://picsum.photos/200",
            is_ec: false,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 2,
            name: "抹茶ラテ",
            price: 670,
            image_url: "https://picsum.photos/200",
            is_ec: false,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 3,
            name: "カフェラテ",
            price: 580,
            image_url: "https://picsum.photos/200",
            is_ec: false,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 4,
            name: "カプチーノ",
            price: 580,
            image_url: "https://picsum.photos/200",
            is_ec: false,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 5,
            name: "アイスコーヒー",
            price: 500,
            image_url: "https://picsum.photos/200",
            is_ec: false,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 6,
            name: "インスタントコーヒー",
            price: 500,
            image_url: "https://picsum.photos/200",
            is_ec: true,
            created_at: new Date().toString(),
            updated_at: new Date().toString(),
          },
          {
            id: 7,
            name: "インド産コーヒー豆",
            price: 500,
            image_url: "https://picsum.photos/200",
            is_ec: true,
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

  const setUser = (user: User | undefined) => {
    setUser_(user);
    //local storage
    if (user) {
      localStorage.setItem("user_id", user.id.toString());
    }
  };

  return (
    <StoreVitalContext.Provider
      value={{
        products,
        setProducts,
        getProduct,
        users,
        setUsers,
        user,
        setUser,
        getUser,
        open,
        setOpen,
      }}
    >
      {products.length > 0 ? children : <p>Loading... </p>}
    </StoreVitalContext.Provider>
  );
};
