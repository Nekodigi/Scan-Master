"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import { useSearchParams } from "next/navigation";
import { HeaderEssential } from "@/components/organisms/headerEssential";
import { accentColor } from "@/style/color";
import Link from "next/link";

export default function LinkQR() {
  //get query
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <Container maxWidth="xs">
      <HeaderEssential />
      <Stack m={4} gap={2}>
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
          カメラで読み取る
        </Typography>
        <Typography>
          レシートのQRコードを読み取って、
          <br />
          後からポイントがつけられます。
        </Typography>
        <Typography>注文番号: {orderId}</Typography>
        <QRCode
          value={`${process.env.NEXT_PUBLIC_FRONT_URL}/add_point?orderId=${orderId}`}
          size={128}
          fgColor={accentColor}
          style={{ alignSelf: "center", margin: 32 }}
        />
        <Button
          sx={{ alignSelf: "stretch" }}
          variant="contained"
          href="/pos"
          component={Link}
        >
          レジへ戻る
        </Button>
      </Stack>
    </Container>
  );
}
