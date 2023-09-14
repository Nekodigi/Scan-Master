"use client";

import Image from "next/image";
// import styles from './page.module.css'
import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  backgroundColor,
  borderColor,
  grayColor,
  primaryColor,
} from "@/style/color";
import { useContext, useEffect, useState } from "react";
import { OrderItem } from "@/components/molecules/orderItem";
import { StoreVitalContext } from "@/components/contexts/storeVital";
import QRCode from "react-qr-code";
import { Header } from "@/components/organisms/header";

export default function Home() {
  const point_rate = 0.01;
  const [result, setResult] = useState("");

  const { products, users } = useContext(StoreVitalContext);

  const [user, setUser] = useState<User | undefined>(undefined);

  const [label, setLabel] = useState<null | number>(null);

  return (
    <Stack direction={"row"}>
      <Stack gap={2} width="100%" mx={2} height={"100svh"}>
        <Header selected="QR作成" />
        <Select
          id="combo-box-demo"
          value={label}
          onChange={(event) => {
            if (event.target.value) {
              setResult(`${"4"}${event.target.value.toString()}`);
            }
            setLabel(event.target.value as number);
          }}
          sx={{ width: 300 }}
        >
          {products.map((product) => {
            return (
              <MenuItem key={product.id} value={product.id}>
                {product.name}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          value={result}
          onChange={(v) => {
            setResult(v.target.value);
            //addItem(parseInt(v.target.value));
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              //actionById(parseInt(result));
              setResult("");
            }
          }}
          label="IDを入力"
        />
        <QRCode value={result} size={256} style={{ alignSelf: "center" }} />
      </Stack>
    </Stack>
  );
}
