# My SPA Website - Next.js + MUI v7 (TypeScript)

Project mẫu: Website thẩm mỹ viện (SPA) sử dụng Next.js App Router + MUI v7 + Dayjs.

## Chạy nhanh

1. `npm install`
2. `npm run dev`
3. Mở trình duyệt: http://localhost:3000

## Ghi chú
- App Router (src/app).
- Theme dùng pastel pink (#ff9bb3) làm primary.
- MUI X Date Pickers + Dayjs được cấu hình trong `BookingForm`.
- `providers.tsx` sử dụng `AppRouterCacheProvider` với `options={{ enableCssLayer: true }}` để tránh lỗi hydration.
- Thư mục `public/sample-before-after/` chứa ảnh gallery; server sẽ tự quét ảnh trong thư mục này.
