# My SPA Website - Thẩm mỹ viện (Next.js + MUI v7 + TypeScript)

## Mục tiêu
Project mẫu SPA cho thẩm mỹ viện, Next.js App Router (src/app), Material UI v7, TypeScript.
Tất cả nội dung hiển thị bằng Tiếng Việt. Không dùng database; dữ liệu lưu tại local state hoặc log console.

## Cài đặt & chạy
1. `npm install`
2. `npm run dev`
Mở trình duyệt tại `http://localhost:3000`.

## Ghi chú kỹ thuật
- Các component có sự kiện (onClick, onChange, onSubmit, onError) đều là Client Components (`'use client'`).
- `src/app/providers.tsx` chứa ThemeProvider và Emotion Cache (Client).
- Before/After gallery sử dụng `fs` để quét `public/sample-before-after/` tại Server Component.
- Hình ảnh fallback được xử lý bởi `src/components/SafeImage.tsx`.

## Cấu trúc thư mục
(Đã cung cấp đầy đủ trong yêu cầu)

## Thêm ảnh
Thêm `logo.png`, `hero-banner.jpg`, `services.jpg`, và folder `public/sample-before-after/` với ảnh before-after để hiển thị.

Bạn chỉ cần đặt các file ảnh sau vào thư mục public/:

public/logo.png (logo cửa hàng)

public/hero-banner.jpg (hero banner)

public/services.jpg (ảnh biểu diễn dịch vụ)

public/sample-before-after/combined1.jpg (ví dụ ảnh before/after)

(Do hạn chế văn bản, mình liệt kê tên file. Trong repository thực tế, thêm ảnh thực tế vào public.)