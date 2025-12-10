'use client';

import React from 'react';
import { Box, TextField, MenuItem, Button, Snackbar, Alert } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

type BookingData = {
  name: string;
  phone: string;
  service: string;
  datetime: Date | null;
  note: string;
};

export default function BookingForm() {
  const [form, setForm] = React.useState<BookingData>({
    name: '',
    phone: '',
    service: '',
    datetime: null,
    note: ''
  });

  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState('');
  const services = ['Trị liệu da', 'Tiêm filler', 'Giảm béo', 'Tẩy tế bào chết'];

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Vui lòng nhập họ tên';
    if (!form.phone.trim()) return 'Vui lòng nhập số điện thoại';
    if (!form.service.trim()) return 'Vui lòng chọn dịch vụ';
    if (!form.datetime) return 'Vui lòng chọn ngày giờ';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setSnackMsg(err);
      setOpenSnack(true);
      return;
    }

    // Demo: lưu local (state) và log ra console (không dùng DB)
    console.log('Booking submitted:', form);

    setSnackMsg('Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận.');
    setOpenSnack(true);

    // Reset form
    setForm({
      name: '',
      phone: '',
      service: '',
      datetime: null,
      note: ''
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 640 }}>
      <TextField
        fullWidth
        label="Họ tên"
        value={form.name}
        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Số điện thoại"
        value={form.phone}
        onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
        required
        sx={{ mb: 2 }}
      />
      <TextField
        select
        fullWidth
        label="Chọn dịch vụ"
        value={form.service}
        onChange={(e) => setForm((s) => ({ ...s, service: e.target.value }))}
        required
        sx={{ mb: 2 }}
      >
        {services.map((srv) => (
          <MenuItem key={srv} value={srv}>
            {srv}
          </MenuItem>
        ))}
      </TextField>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Ngày giờ"
          value={form.datetime}
          onChange={(newVal) => setForm((s) => ({ ...s, datetime: newVal }))}
          renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 2 }} required />}
        />
      </LocalizationProvider>

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Ghi chú"
        value={form.note}
        onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
        sx={{ mb: 2 }}
      />

      <Button type="submit" variant="contained" color="primary">Gửi yêu cầu đặt lịch</Button>

      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => setOpenSnack(false)}
      >
        <Alert onClose={() => setOpenSnack(false)} severity="success" sx={{ width: '100%' }}>
          {snackMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
