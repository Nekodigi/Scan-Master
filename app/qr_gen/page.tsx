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
  const [qrType, setQrType] = useState<"user" | "item">("user");
  const [result, setResult] = useState("");

  const { products, users } = useContext(StoreVitalContext);

  const [user, setUser] = useState<User | undefined>(undefined);

  const [label, setLabel] = useState<null | number>(null);

  useEffect(() => {
    setLabel(null);
    setResult("");
  }, [qrType]);

  return (
    <Stack direction={"row"}>
      <Stack gap={2} width="100%" mx={2} height={"100vh"}>
        <Header selected="/qr_gen" />
        <Box></Box>
        <ToggleButtonGroup
          value={qrType}
          exclusive
          onChange={(event, newQrType) => {
            if (newQrType !== null) setQrType(newQrType);
          }}
        >
          <ToggleButton value="user">ユーザー</ToggleButton>
          <ToggleButton value="item">商品</ToggleButton>
        </ToggleButtonGroup>
        <Select
          id="combo-box-demo"
          value={label}
          onChange={(event) => {
            if (event.target.value) {
              setResult(
                `${
                  qrType === "user" ? "9" : "4"
                }${event.target.value.toString()}`
              );
            }
            setLabel(event.target.value as number);
          }}
          sx={{ width: 300 }}
        >
          {qrType == "user"
            ? users.map((user) => {
                return (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                );
              })
            : products.map((product) => {
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
