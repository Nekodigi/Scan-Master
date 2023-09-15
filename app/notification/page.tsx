"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
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
import { ThumbDown, ThumbUp } from "@mui/icons-material";

export default function Notify() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { products, getProduct, users, user } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);
  const [reminds, setReminds] = useState<Remind[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/reminds/${user?.id}`, options)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json as Remind[]);
          setReminds(json as Remind[]);
        });
    };
    if (user) fetchData();
  }, [user]);

  return (
    <Box>
      <HeaderApp selected="/notification" />

      <Container maxWidth="xs">
        <Stack mt={0}>
          {reminds.map((remind) => (
            <Stack
              key={`${remind.user_id},${remind.product_id}`}
              sx={{
                borderBottom: 1,
                borderColor: borderColor,
              }}
              p={3}
              gap={2}
            >
              <Stack
                direction={"row"}
                gap={1.5}
                sx={{ alignItems: "center" }}
                width={"100%"}
              >
                <Box
                  display={"flex"}
                  width={"100%"}
                  alignSelf={"stretch"}
                  position={"relative"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {getProduct(remind.product_id)?.name}は
                    <br />
                    気に入っていただけましたか？
                  </Typography>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    sx={{ position: "absolute", bottom: 0, width: "100%" }}
                  >
                    <Typography sx={{ fontSize: 14, color: darkGrayColor }}>
                      {new Date(remind.remind_at).toLocaleDateString()}
                      に通知
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>
                      ￥{getProduct(remind.product_id)?.price}
                    </Typography>
                  </Stack>
                </Box>
                <img
                  width={128}
                  style={{
                    aspectRatio: 1,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                  src={getProduct(remind.product_id)?.image_url}
                />
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignContent={"center"}
                px={3}
              >
                <IconButton size="small">
                  <ThumbUp fontSize="inherit" />
                </IconButton>
                <IconButton size="small">
                  <ThumbDown fontSize="inherit" />
                </IconButton>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 16,
                    p: 0,
                    width: 80,
                  }}
                >
                  再購入
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
