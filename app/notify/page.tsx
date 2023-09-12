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

export default function Notify() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { products, users } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);

  return (
    <Container maxWidth="xs">
      <Stack m={4} gap={8} mt={12}>
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>{title}</Typography>
      </Stack>
    </Container>
  );
}
