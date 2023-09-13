"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { StoreVitalContext } from "@/components/contexts/storeVital";
import {
  accentColor,
  borderColor,
  grayColor,
  primaryColor,
} from "@/style/color";
import { HeaderApp } from "@/components/organisms/headerApp";

export default function History() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { products, getProduct, users } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);
  const [orders, setOrders] = useState<Order[]>([]);

  const user_id = 1;

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/histories/${user_id}`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          let res = json as HistoryRes;
          setOrders(res.orders);
          console.log(res.orders);
        });
    };
    fetchData();
  }, []);

  return (
    <Box>
      <HeaderApp selected="/history" />

      <Container maxWidth="xs">
        <Stack mt={0}>
          {orders.map((order) =>
            order.order_items.map((item) => (
              <Stack
                direction={"row"}
                m={3}
                gap={1.5}
                key={`${order.id}${item.product_id}`}
              >
                <img
                  width={128}
                  height={128}
                  style={{ objectFit: "cover", borderRadius: 4 }}
                  src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg"
                />
                <Stack justifyContent={"space-between"} width={"100%"}>
                  <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                    {getProduct(item.product_id)?.name}
                  </Typography>
                  <Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography sx={{ fontSize: 16, color: grayColor }}>
                        {new Date(item.created_at).toLocaleDateString()}
                      </Typography>
                      <Typography sx={{ fontSize: 16 }}>
                        ￥{getProduct(item.product_id)?.price}
                      </Typography>
                    </Stack>
                    <Typography sx={{ fontSize: 16 }}>
                      {item.quantity}個
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        fontSize: 16,
                        mt: 1,
                        p: 0,
                        width: 80,
                        alignSelf: "flex-end",
                      }}
                    >
                      再購入
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            ))
          )}
        </Stack>
      </Container>
    </Box>
  );
}
