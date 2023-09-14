import { borderColor } from "@/style/color";
import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { StoreVitalContext } from "../contexts/storeVital";

type OrderItemProps = {
  item: OrderItem;
  removeItem: (id: number) => void;
};

export function OrderItem({ item, removeItem }: OrderItemProps) {
  let { products, getProduct } = useContext(StoreVitalContext);

  return (
    <Stack
      sx={{ p: 3, borderBottom: 1, borderColor: borderColor }}
      direction={"row"}
      justifyContent={"space-between"}
      onClick={() => removeItem(item.product_id)}
    >
      <Stack direction={"row"}>
        <Typography width={240}>{getProduct(item.product_id)?.name}</Typography>
        <Typography sx={{ fontWeight: 700 }}>x{item.quantity}</Typography>
      </Stack>
      <Typography sx={{ fontWeight: 700 }}>
        ￥ {getProduct(item.product_id)?.price}
      </Typography>
    </Stack>
  );
}
