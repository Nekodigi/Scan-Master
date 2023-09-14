import { backgroundColor, borderColor, grayColor } from "@/style/color";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";

export function Header({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected?: (tab: string) => void;
}) {
  const tabs = [
    { name: "アイテム", url: "/pos" },
    { name: "スキャン", url: "/pos" },
    { name: "QR作成", url: "/qr_gen" },
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ borderBottom: 4, borderColor: borderColor }}
      elevation={0}
    >
      <Toolbar sx={{ p: 0 }}>
        <Stack direction={"row"} gap={2} m={1.5}>
          {tabs.map((tab) => {
            let isSamePage =
              tabs.find((t) => t.name == selected)!.url == tab.url;
            return (
              <Button
                key={tab.name}
                sx={{
                  color: selected == tab.name ? "black" : grayColor,
                  fontWeight: 700,
                  fontSize: 24,
                  px: 3,
                  py: 0.5,
                  borderRadius: 2,
                  background:
                    selected == tab.name ? backgroundColor : "transparent",
                }}
                href={isSamePage ? undefined : tab.url}
                onClick={
                  isSamePage
                    ? () => {
                        setSelected!(tab.name);
                      }
                    : undefined
                }
              >
                {tab.name}
              </Button>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
