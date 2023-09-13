import {
  accentColor,
  backgroundColor,
  borderColor,
  grayColor,
} from "@/style/color";
import { Person } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import { StoreVitalContext } from "../contexts/storeVital";

export function HeaderApp({
  selected,
}: {
  selected: "/history" | "/recommend" | "/notification" | "/point_card";
}) {
  const tabs = [
    { name: "ポイント", url: "/point_card" },
    { name: "購入履歴", url: "/history" },
    { name: "おすすめ", url: "/recommend" },
    { name: "お知らせ", url: "/notification" },
  ];

  const { user, setUser, users } = useContext(StoreVitalContext);
  const [open, setOpen] = useState(false);

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
            <IconButton
              sx={{
                position: "absolute",
                left: 16,
                top: 6,
                flexDirection: "column",
              }}
              size="large"
              onClick={() => setOpen(true)}
            >
              <Person fontSize="inherit" />
              <Typography sx={{ fontSize: 14 }}>{user?.name}</Typography>
            </IconButton>
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
          <Box overflow={"scroll"} width={"100vw"}>
            <Stack direction={"row"} width={"max-content"}>
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
                  component={Link}
                  href={tab.url}
                >
                  {tab.name}
                </Button>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Toolbar>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ユーザー選択
          </Typography>
          <Select
            id="combo-box-demo"
            value={user?.id}
            onChange={(event) => {
              setUser(users.find((user) => user.id == event.target.value));
            }}
            sx={{ width: 300 }}
          >
            {users.map((user) => {
              return (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </Modal>
    </AppBar>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
