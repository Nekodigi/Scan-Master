"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
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
  darkGrayColor,
  grayColor,
  primaryColor,
} from "@/style/color";
import { HeaderApp } from "@/components/organisms/headerApp";

export default function Notify() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { products, users } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

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
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommends/${user_id}`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          // console.log(json as OrderItem[]);
          setOrderItems(json as OrderItem[]);
        });
    };
    fetchData();
  }, []);

  return (
    <Box>
      <HeaderApp selected="/recommend" />

      <Container maxWidth="xs">
        <Grid container direction="row" m={2} spacing={2}>
          {orderItems.map((orderItem) => (
            <Grid item xs={6} key={orderItem.id}>
              <Stack
                sx={{
                  borderBottom: 1,
                  borderColor: borderColor,
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <img
                  width={"100%"}
                  style={{ objectFit: "cover", aspectRatio: 1 }}
                  src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg"
                />

                <Stack alignItems={"center"} width={"100%"} p={1}>
                  <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                    {products[orderItem.id].name}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: darkGrayColor }}>
                    ￥ {products[orderItem.id].price}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
          <Stack
            sx={{
              borderBottom: 1,
              borderColor: borderColor,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover", aspectRatio: 1 }}
              src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg"
            />

            <Stack alignItems={"center"} width={"100%"} p={1}>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                マグカップ店舗のみ
              </Typography>
              <Typography sx={{ fontSize: 14, color: darkGrayColor }}>
                ￥ 200
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              borderBottom: 1,
              borderColor: borderColor,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover", aspectRatio: 1 }}
              src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg"
            />

            <Stack alignItems={"center"} width={"100%"} p={1}>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                マグカップ店舗のみ
              </Typography>
              <Typography sx={{ fontSize: 14, color: darkGrayColor }}>
                ￥ 200
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
