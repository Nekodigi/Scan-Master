"use client";

import Image from "next/image";
// import styles from './page.module.css'
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { borderColor } from "@/style/color";
import { useZxing } from "react-zxing";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <main>
      <Stack gap={6}>
        <AppBar
          position="static"
          color="transparent"
          sx={{ borderBottom: 4, borderColor: borderColor }}
          elevation={0}
        >
          <Toolbar>
            <Button sx={{ color: "black", fontWeight: 700, fontSize: 24 }}>
              スキャン
            </Button>
          </Toolbar>
        </AppBar>
        <Box mt={3}>
          <video ref={ref} style={{ borderRadius: 32 }} />
        </Box>
        <p>
          <span>Last result:</span>
          <span>{result}</span>
        </p>
      </Stack>
    </main>
  );
}
