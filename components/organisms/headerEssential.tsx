import { accentColor, borderColor } from "@/style/color";
import { Stack, Typography } from "@mui/material";

export function HeaderEssential() {
  return (
    <Stack
      py={2}
      width={"100%"}
      sx={{ borderBottom: 1, borderColor: borderColor }}
    >
      <Typography
        sx={{
          fontSize: 24,
          color: accentColor,
          fontWeight: 700,
          fontFamily: "Cinzel",
          textAlign: "center",
        }}
      >
        S COFFEE
      </Typography>
    </Stack>
  );
}
