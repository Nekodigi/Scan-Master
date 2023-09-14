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
import { Header } from "@/components/organisms/header";
import { accentColor, borderColor } from "@/style/color";

export default function AddPoint() {
  const [order, setOrder] = useState<Order>();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { products, users } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);

  return (
    <Container maxWidth="xs">
      <Stack
        py={2}
        width={"100%"}
        sx={{ borderBottom: 1, borderColor: borderColor }}
      >
        <Typography
          sx={{
            fontSize: 24,
            color: accentColor,
            fontWeight: 700,
            fontFamily: "Cinzel",
            textAlign: "center",
          }}
        >
          S COFFEE
        </Typography>
      </Stack>
      <Stack m={4} gap={8}>
        <Stack gap={2}>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            トップページ
          </Typography>
          <Typography>
            このサイトはSTORES techcampの一環として作成されたものです。
            <br />
            店舗向けのページと、店舗の利用者向けのページに移動できます。
          </Typography>
        </Stack>
        <Stack gap={2}>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            店舗向けページ
          </Typography>
          <Typography>
            iPadなどに表示して、擬似的なレジとして使用できます。
            <br />
            商品のQRコード作成ツールも含まれています。
          </Typography>
          <Button variant="contained" href="/pos">
            レジを開く
          </Button>
        </Stack>
        <Stack gap={2}>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            利用者向けページ
          </Typography>
          <Typography>
            お店のブランドアプリを再現したWebページです。
            <br />
            ポイントカード、購入履歴、リコメンド、お知らせが利用できます。
          </Typography>
          <Button variant="contained" href="/point_card">
            アプリを開く
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
