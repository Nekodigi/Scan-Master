import { borderColor } from "@/style/color";
import { Stack, Typography } from "@mui/material";

type OrderItemProps = {
  item: Product;
};

export function OrderItem({ item }: OrderItemProps) {
  return (
    <Stack
      sx={{ p: 3, borderBottom: 1, borderColor: borderColor }}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"}>
        <Typography width={160}>{item.name}</Typography>
        <Typography sx={{ fontWeight: 700 }}>x{item.quantity}</Typography>
      </Stack>
      <Typography sx={{ fontWeight: 700 }}>￥ {item.price}</Typography>
    </Stack>
  );
}
