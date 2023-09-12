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

export default function Notify() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { products, users } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);

  return (
    <Box>
      <AppBar position="static" sx={{ background: accentColor }} elevation={0}>
        <Container maxWidth="xs" sx={{ px: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
              Sコーヒー
            </Typography>
          </Stack>
        </Container>
      </AppBar>
      <Container maxWidth="xs">
        <Box p={2} borderBottom={1} borderColor={borderColor}>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            今週のおすすめ
          </Typography>
        </Box>
        <Stack mt={0}>
          <Stack direction={"row"} m={3} gap={1.5}>
            <img
              width={128}
              height={128}
              style={{ objectFit: "cover" }}
              src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/323594_2200-1200x628.jpg"
            />
            <Stack justifyContent={"space-between"} width={"100%"}>
              <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                マグカップ店舗のみ
              </Typography>
              <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography sx={{ fontSize: 16, color: grayColor }}>
                    2023/8/2
                  </Typography>
                  <Typography sx={{ fontSize: 16 }}>￥200</Typography>
                </Stack>
                <Typography sx={{ fontSize: 16 }}>1個</Typography>
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
                  購入
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
