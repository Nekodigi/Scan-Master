"use client";

import {
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

export default function AddPoint() {
  const [order, setOrder] = useState<Order>();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { products, users } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setOrder(json as Order);
        });
    };
    fetchData();
  }, []);

  const linkUser = async () => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    };
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/link?order_id=${orderId}&user_id=${userId}`,
      options
    )
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        console.log(text);
      });
    window.location.href = `/notify?title=ポイントが付きました`;
  };

  const title = useMemo(
    () =>
      order?.user_id ? (
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
          既にポイントが使われています
        </Typography>
      ) : (
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
          今からでも
          <br />
          {`${order?.total_points}ポイント付きます！`}
        </Typography>
      ),
    [order]
  );

  return order ? (
    <Container maxWidth="xs">
      <Stack m={4} gap={8}>
        {title}

        {order?.user_id ? (
          <Button variant="contained" href="/recommend">
            ホームに戻る
          </Button>
        ) : (
          <>
            <Stack>
              <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                Step1 アプリインストール
              </Typography>
              <Typography>
                お使いのスマートフォンにアプリをインストールしてください。
              </Typography>
              <Stack direction={"row"} gap={2}>
                <a href="https://play.google.com/store/apps/details?id=co.sarutahiko.app">
                  <img
                    height={64}
                    alt="Google Play で手に入れよう"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"
                  />
                </a>

                <a href="https://apps.apple.com/jp/app/%E3%82%B5%E3%83%AB%E3%82%BF%E3%83%92%E3%82%B3/id1540286707">
                  <img
                    height={64}
                    style={{ paddingTop: 8, paddingBottom: 8 }}
                    alt="App Store で手に入れよう"
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  />
                </a>
              </Stack>
            </Stack>
            <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
              Step2 ポイントを付ける
            </Typography>
            <Select
              id="combo-box-demo"
              value={userId}
              onChange={(event) => {
                setUserId(event.target.value as number);
              }}
            >
              {users.map((user) => {
                return (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                );
              })}
            </Select>
            <Button variant="contained" onClick={() => linkUser()}>
              ポイントを付ける
            </Button>
          </>
        )}
      </Stack>
    </Container>
  ) : (
    <Box>loading...</Box>
  );
}
