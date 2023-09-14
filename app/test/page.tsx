"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

function MyApp() {}

export default function IntegrationNotistack() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant("success")}>
        Show success snackbar
      </Button>
    </SnackbarProvider>
  );
}
