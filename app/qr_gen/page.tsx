"use client";

import Image from "next/image";
// import styles from './page.module.css'
import {
  AppBar,
  Autocomplete,
  Box,
  Button,
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
import { OrderItem } from "@/components/molecules/order_item";
import { StoreVitalContext } from "@/components/contexts/storeVital";
import QRCode from "react-qr-code";
import { Header } from "@/components/organisms/header";

export default function Home() {
  const point_rate = 0.01;
  const [qrType, setQrType] = useState<"user" | "item">("user");
  const [result, setResult] = useState("");

  const { products, users } = useContext(StoreVitalContext);

  const [user, setUser] = useState<User | undefined>(undefined);

  const [label, setLabel] = useState<null | {label: string, id: number}>(null);

  useEffect(() => {
    setLabel(null);
    setResult("");
  }, [qrType]);

  return (
    <main>
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
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={
              qrType == "user"
                ? users.map((user) => {
                    return { label: user.name, id: user.id };
                  })
                : products.map((product) => {
                    return { label: product.name, id: product.id };
                  })
            }
            value={label}
            onChange={(event, newValue) => {
              if (newValue) {
                setResult(
                  `${qrType === "user" ? "9" : "4"}${newValue.id.toString()}`
                );
              }
              setLabel(newValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`${qrType === "user" ? "ユーザー" : "商品"}を選択`}
              />
            )}
          />
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
          <QRCode value={result} size={256} />
        </Stack>
      </Stack>
    </main>
  );
}
