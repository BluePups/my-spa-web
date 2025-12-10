# My SPA Website - Next.js + MUI v7 (TypeScript)

Ứng dụng SPA mẫu cho Thẩm mỹ viện, dùng Next.js App Router + Material UI v7 + TypeScript.

## Chạy nhanh
1. `npm install`
2. `npm run dev`
3. Mở http://localhost:3000

## Ghi chú
- Dữ liệu không dùng database; booking lưu ở local state và log ra console.
- Theme chính dùng màu Primary: Pastel Pink `#ff9bb3`.
- SafeImage xử lý fallback khi ảnh lỗi.
- Mã nguồn tuân thủ quy tắc Server/Client Components: mọi file có event handler đều có `'use client'`.
public/
public/logo.png

(file ảnh, placeholder) — bạn thêm file hình logo.png tại đường dẫn này.

public/hero-banner.jpg

(file ảnh banner) — bạn thêm file ảnh.

public/services.jpg

(file ảnh services).

public/sample-before-after/combined1.jpg

(file ảnh before-after sample).

Ở output này tôi liệt kê tên file; bạn cần đặt ảnh thực tế trong public/ tương ứng. Nếu không có ảnh, SafeImage sẽ hiển thị placeholder khi ảnh thất bại.