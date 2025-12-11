// src/components/BookingForm.tsx
'use client';

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const SERVICES = [
  { value: 'care', label: 'Chăm sóc da chuyên sâu' },
  { value: 'brows', label: 'Phun mày tán bột' },
  { value: 'rejuv', label: 'Trẻ hóa da' }
];

export default function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [datetime, setDatetime] = useState<Dayjs | null>(dayjs().add(1, 'day').hour(10).minute(0));
  const [note, setNote] = useState('');
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !service || !datetime) {
      setSnackMsg('Vui lòng điền đầy đủ thông tin bắt buộc.');
      setOpenSnack(true);
      return;
    }

    const booking = {
      name,
      phone,
      service,
      datetime: datetime.toISOString(),
      note
    };

    // Lưu tại local state (ví dụ localStorage) hoặc gửi đi. Ở đây chúng ta log ra console.
    console.info('Đặt lịch mới:', booking);
    try {
      const stored = localStorage.getItem('bookings');
      const list = stored ? JSON.parse(stored) : [];
      list.push(booking);
      localStorage.setItem('bookings', JSON.stringify(list));
    } catch (err) {
      // ignore
    }

    setSnackMsg('Đặt lịch thành công! Nhân viên sẽ gọi xác nhận.');
    setOpenSnack(true);

    // reset form
    setName('');
    setPhone('');
    setService('');
    setDatetime(dayjs().add(1, 'day').hour(10).minute(0));
    setNote('');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
        <Stack spacing={2}>
          <TextField label="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} required />
          <TextField label="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <TextField select label="Chọn dịch vụ" value={service} onChange={(e) => setService(e.target.value)} required>
            {SERVICES.map(s => (<MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>))}
          </TextField>

          <DateTimePicker
            label="Ngày & giờ"
            value={datetime}
            onChange={(v) => setDatetime(v)}
            slotProps={{ textField: { fullWidth: true, required: true } }}
            minDate={dayjs().startOf('day')}
          />

          <TextField label="Ghi chú (không bắt buộc)" value={note} onChange={(e) => setNote(e.target.value)} multiline rows={3} />

          <Button variant="contained" type="submit" sx={{ width: 160 }}>
            Gửi đặt lịch
          </Button>
        </Stack>
        <Snackbar open={openSnack} autoHideDuration={4000} onClose={() => setOpenSnack(false)}>
          <Alert onClose={() => setOpenSnack(false)} severity="success" sx={{ width: '100%' }}>
            {snackMsg}
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
}
