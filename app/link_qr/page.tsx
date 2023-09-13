"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import { useSearchParams } from "next/navigation";

export default function LinkQR() {
  //get query
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <Container maxWidth="xs">
      <Stack>
        <h1>Link QR</h1>
        <Typography>OrderId: {orderId}</Typography>
        <QRCode
          value={`${process.env.NEXT_PUBLIC_FRONT_URL}/add_point?orderId=${orderId}`}
          size={256}
        />
        <p>{`${process.env.NEXT_PUBLIC_FRONT_URL}/add_point?orderId=${orderId}`}</p>
        <Button sx={{ alignSelf: "flex-end" }} variant="contained" href="/">
          レジへ戻る
        </Button>
      </Stack>
    </Container>
  );
}
