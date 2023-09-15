"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
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

export default function Notify() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { products, users, user } = useContext(StoreVitalContext);
  const [userId, setUserId] = useState<number>(0);
  const [recProducts, setRecProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      };
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recommends/${user?.id}`,
        options
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          //console.log(json as Product[]);
          //console.log(products);
          setRecProducts(json as Product[]);
        });
    };
    fetchData();
  }, []);

  return (
    <Box>
      <HeaderApp selected="/recommend" />

      <Container maxWidth="xs">
        <Grid container direction="row" mt={1} spacing={2}>
          {recProducts.map((recProduct) => (
            <Grid item xs={6} key={recProduct.id}>
              <Stack
                sx={{
                  borderBottom: 1,
                  borderColor: borderColor,
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <img
                  width={"100%"}
                  style={{
                    objectFit: "cover",
                    aspectRatio: 1,
                    borderRadius: 4,
                  }}
                  src={recProduct.image_url}
                />

                <Stack alignItems={"center"} width={"100%"} p={1}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      height: 40,
                      textAlign: "center",
                    }}
                  >
                    {recProduct.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: darkGrayColor }}>
                    ￥ {recProduct.price}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
