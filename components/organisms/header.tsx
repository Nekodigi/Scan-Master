import { backgroundColor, borderColor, grayColor } from "@/style/color";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";

export function Header({ selected }: { selected: "/" | "/qr_gen" }) {
  const tabs = [
    { name: "スキャン", url: "/" },
    { name: "QR作成", url: "/qr_gen" },
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ borderBottom: 4, borderColor: borderColor }}
      elevation={0}
    >
      <Toolbar>
        <Stack direction={"row"} gap={2} m={1.5}>
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              sx={{
                color: selected == tab.url ? "black" : grayColor,
                fontWeight: 700,
                fontSize: 24,
                px: 3,
                py: 0.5,
                borderRadius: 2,
                background:
                  selected == tab.url ? backgroundColor : "transparent",
              }}
              href={tab.url}
            >
              {tab.name}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
