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
import QRCode from "react-qr-code";

export default function History() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { products, getProduct, users, user, setUser } =
    useContext(StoreVitalContext);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/histories/${user?.id}`, options)
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
      <HeaderApp selected="/point_card" />

      <Container maxWidth="xs">
        <Stack mt={3}>
          <Box>
            <img
              width={"100%"}
              style={{
                aspectRatio: 16 / 9,
                objectFit: "contain",
                boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.2)",
                borderRadius: 8,
              }}
              src="https://prtimes.jp/i/27005/60/resize/d27005-60-fb0852c6b8ad2584ab56-4.jpg"
            />
          </Box>
          <QRCode
            value={`9${user?.id}`}
            size={256}
            style={{ alignSelf: "center" }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
