import {
  accentColor,
  backgroundColor,
  borderColor,
  grayColor,
} from "@/style/color";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";

export function HeaderApp({
  selected,
}: {
  selected: "/history" | "/recommend" | "/notification";
}) {
  const tabs = [
    { name: "購入履歴", url: "/history" },
    { name: "おすすめ", url: "/recommend" },
    { name: "お知らせ", url: "/notification" },
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        borderBottom: 1,
        borderColor: borderColor,
        boxSizing: "border-box",
      }}
      elevation={0}
    >
      <Toolbar sx={{ p: 0, justifyContent: "center" }}>
        <Stack>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
            alignContent="center"
          >
            <Typography
              sx={{
                fontSize: 24,
                color: accentColor,
                fontWeight: 700,
                fontFamily: "Cinzel",
              }}
            >
              S COFFEE
            </Typography>
          </Box>
          <Stack direction={"row"}>
            {tabs.map((tab) => (
              <Button
                key={tab.name}
                sx={{
                  color: selected == tab.url ? "black" : grayColor,
                  fontWeight: 700,
                  fontSize: 16,
                  px: 3,
                  py: 0.5,
                  borderRadius: 0,
                  // selected == tab.url ? accentColor : "transparent",
                  borderBottom: selected == tab.url ? 2 : 0,
                  borderColor: accentColor,
                }}
                href={tab.url}
              >
                {tab.name}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
