import { Box, Container, Stack, Typography } from "@mui/material";

export default function AddPoint() {
  return (
    <Container maxWidth="xs">
      <Stack m={4} gap={8}>
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
          今からでも
          <br />
          21ポイント付きます！
        </Typography>
        <Stack>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            Step1 アプリインストール
          </Typography>
          <Typography>
            お使いのスマートフォンにアプリをインストールしてください。
          </Typography>
          <Stack direction={"row"} gap={2}>
            <a href="https://play.google.com/store/apps/details?id=com.saltahiko">
              <img
                height={64}
                alt="Google Play で手に入れよう"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"
              />
            </a>

            <a href="https://apps.apple.com/jp/app/%E3%82%B5%E3%83%AB%E3%82%BF%E3%83%92%E3%82%B3/id1540286707">
              <img
                height={64}
                style={{ paddingTop: 8, paddingBottom: 8 }}
                alt="App Store で手に入れよう"
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              />
            </a>
          </Stack>
        </Stack>
        <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
          Step2 ポイントを付ける
        </Typography>
      </Stack>
    </Container>
  );
}
