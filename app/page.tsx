"use client";

import Image from "next/image";
// import styles from './page.module.css'
import {
  AppBar,
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { borderColor, primaryColor } from "@/style/color";
import { useZxing } from "react-zxing";
import { useContext, useEffect, useState } from "react";
import { OrderItem } from "@/components/molecules/order_item";
import { StoreVitalContext } from "@/components/contexts/storeVital";
import { Header } from "@/components/organisms/header";

export default function Home() {
  const point_rate = 0.01;
  const store_id = 1;

  const [result, setResult] = useState("");
  const [order, setOrder] = useState<Order>({
    id: undefined,
    items: [],
  });
  //from context
  const { products, users } = useContext(StoreVitalContext);
  // const [users, setUsers] = useState<User[]>([
  //   {
  //     id: 1,
  //     name: "山田太郎",
  //   },
  //   {
  //     id: 2,
  //     name: "鈴木花子",
  //   },
  //   {
  //     id: 3,
  //     name: "佐藤一郎",
  //   },
  //   {
  //     id: 4,
  //     name: "田中二郎",
  //   },
  // ]);
  // const [products, setProducts] = useState<Product[]>([
  //   {
  //     id: 1,
  //     name: "エスプレッソ",
  //     price: 560,
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "抹茶ラテ",
  //     price: 670,
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "カフェラテ",
  //     price: 580,
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "カプチーノ",
  //     price: 580,
  //     quantity: 1,
  //   },
  //   {
  //     id: 5,
  //     name: "アイスコーヒー",
  //     price: 500,
  //     quantity: 1,
  //   },
  //   {
  //     id: 6,
  //     name: "インスタントコーヒー",
  //     price: 500,
  //     quantity: 1,
  //   },
  //   {
  //     id: 7,
  //     name: "インド産コーヒー豆",
  //     price: 500,
  //     quantity: 1,
  //   },
  // ]);
  const [user, setUser] = useState<User | undefined>(undefined);

  const { ref } = useZxing({
    onDecodeResult(result) {
      actionById(parseInt(result.getText()));
    },
  });

  useEffect(() => {
    if (products.length > 0 && users.length > 0) {
      addItem(2);
      setUserById(1);
    }
  }, [products, users]);

  const actionById = (id: number) => {
    //if msb is 4 then it is a product id
    //if msb is 9 then it is a user id
    if (id.toString().startsWith("4")) {
      addItem(parseInt(id.toString().slice(1)));
    }
    if (id.toString().startsWith("9")) {
      setUserById(parseInt(id.toString().slice(1)));
    }
  };

  const setUserById = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setUser(user);
    }
  };

  const addItem = (id: number) => {
    const item = products.find((item) => item.id === id);
    item!.quantity = 1;
    if (item) {
      const newOrder = { ...order };
      const index = newOrder.items.findIndex((item) => item.id === id);
      if (index >= 0) {
        let p = newOrder.items[index]!;
        p.quantity += 1;
      } else {
        newOrder.items.push({ ...item });
      }
      setOrder(newOrder);
    }
  };

  const sum_price = order.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const sum_quantity = order.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const sum_point = sum_price * point_rate;

  const onSubmit = () => {
    const request = {
      store_id: store_id,
      user_id: user?.id,
      total_points: sum_point,
      order_items: order.items.map((item) => {
        return {
          product_id: item.id,
          quantity: item.quantity,
        };
      }),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(request),
    })
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        console.log(text);
      });
    setOrder({
      id: undefined,
      items: [],
    });
  };

  return (
    <main>
      <Stack direction={"row"}>
        <Stack gap={2} width="100%" mx={2} height={"100vh"}>
          <Header selected="/" />
          <Box>
            <video ref={ref} style={{ borderRadius: 32, width: "100%" }} />
          </Box>
          <TextField
            value={result}
            onChange={(v) => {
              setResult(v.target.value);
              //addItem(parseInt(v.target.value));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                actionById(parseInt(result));
                setResult("");
              }
            }}
            label="ID手動入力"
          />
        </Stack>
        <Stack
          width={360}
          minWidth={360}
          sx={{ borderLeft: 4, borderColor: borderColor, height: "100vh" }}
          direction={"column"}
        >
          <Stack px={2} height={"100%"}>
            {order.items.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            m={2}
            p={2}
            px={3}
            sx={{ background: primaryColor, color: "white", borderRadius: 2 }}
            component="div"
            onClick={() => onSubmit()}
          >
            <Typography sx={{ fontSize: 32, fontWeight: 700 }}>
              ￥{sum_price}
            </Typography>
            <Stack>
              <Typography
                sx={{ fontSize: 16, fontWeight: 700, alignSelf: "flex-end" }}
              >
                {sum_quantity}点
              </Typography>
              <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                {user?.name} お会計へ
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </main>
  );
}
