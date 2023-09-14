import {
  accentColor,
  backgroundColor,
  borderColor,
  grayColor,
  whiteColor,
} from "@/style/color";
import { Person } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { StoreVitalContext } from "../contexts/storeVital";

export function HeaderApp({
  selected,
}: {
  selected:
    | "/history"
    | "/recommend"
    | "/notification"
    | "/point_card"
    | "/add_point"
    | "/notify";
}) {
  const tabs = [
    { name: "ポイント", url: "/point_card" },
    { name: "購入履歴", url: "/history" },
    { name: "おすすめ", url: "/recommend" },
    { name: "お知らせ", url: "/notification" },
  ];

  const { user, setUser, users, open, setOpen } = useContext(StoreVitalContext);
  const [modalWindow, setModalWindow] = useState("select");
  const [name, setName] = useState("");

  const createUser = () => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ name: name }),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, options)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let res = json as User;
        setUser(res);
        setOpen(false);
        setModalWindow("select");
      });
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          borderBottom: 1,
          borderColor: borderColor,
          boxSizing: "border-box",
          background: whiteColor,
        }}
        elevation={0}
      >
        <Toolbar sx={{ p: 0, justifyContent: "center" }}>
          <Stack>
            <Container
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                position: "relative",
              }}
              maxWidth="xs"
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
                <Typography sx={{ fontSize: 12 }}>{user?.name}</Typography>
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
            </Container>
            <Box
              overflow={"scroll"}
              width={"100vw"}
              sx={{
                width: "100vw",
              }}
            >
              <Stack direction={"row"} width={"max-content"} mx={"auto"}>
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
          onClose={() => {
            setOpen(false);
            setModalWindow("select");
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {modalWindow === "select" ? (
            <Stack sx={style} gap={2}>
              <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                ユーザー選択
              </Typography>
              <Select
                id="combo-box-demo"
                value={user?.id}
                onChange={(event) => {
                  setUser(users.find((user) => user.id == event.target.value));
                }}
              >
                {users.map((user) => {
                  return (
                    <MenuItem key={user.id} value={user.id}>
                      {user.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  alignSelf: "flex-end",
                }}
                onClick={() => setModalWindow("create")}
              >
                新規作成
              </Button>
            </Stack>
          ) : (
            <Stack sx={style} gap={2}>
              <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                ユーザー作成
              </Typography>
              <TextField
                label="名前を入力"
                value={name}
                onChange={(v) => setName(v.target.value)}
              />
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  alignSelf: "flex-end",
                }}
                onClick={() => createUser()}
              >
                ユーザー作成
              </Button>
            </Stack>
          )}
        </Modal>
      </AppBar>

      <Toolbar style={{ height: 107 }} />
    </>
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
