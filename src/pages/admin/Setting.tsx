import { PageHeader } from "pages/shared/PageHeader";
import { Paper } from "@mui/material";

export default function Setting() {
  return (
    <Paper
      elevation={3}
      sx={{ p: 3 }}
      style={{ display: "flex", height: "100%" }}
    >
      <PageHeader
        title="User"
        subTitle="Lập Trình Sư nói: “Khi ngươi biết cách lấy mã lỗi từ đoạn code bắt lỗi, ngươi có thể xuống núi.”"
      />
    </Paper>
  );
}
