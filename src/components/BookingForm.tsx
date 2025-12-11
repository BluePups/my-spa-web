'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';

type FormState = {
  name: string;
  phone: string;
  service: string;
  datetime: Dayjs | null;
  note: string;
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: '',
    datetime: dayjs().add(1, 'day').hour(9).minute(0),
    note: ''
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success'|'error'>('success');

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function validate() {
    if (!form.name.trim()) return 'Vui lòng nhập Họ tên.';
    if (!/^\d{7,15}$/.test(form.phone.replace(/\s+/g, ''))) return 'SĐT không hợp lệ (7-15 chữ số).';
    if (!form.service) return 'Vui lòng chọn dịch vụ.';
    if (!form.datetime || !dayjs(form.datetime).isValid()) return 'Vui lòng chọn ngày giờ hợp lệ.';
    return null;
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const err = validate();
    if (err) {
      setSnackbarMsg(err);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    // Lưu tạm: log ra console (theo yêu cầu không dùng DB)
    console.log('NEW BOOKING:', {
      name: form.name,
      phone: form.phone,
      service: form.service,
      datetime: form.datetime?.toString(),
      note: form.note
    });

    setSnackbarMsg('Đặt lịch thành công! Chúng tôi sẽ gọi lại xác nhận.');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);

    // Reset form (giữ ngày giờ ví dụ)
    setForm({
      name: '',
      phone: '',
      service: '',
      datetime: dayjs().add(1, 'day').hour(9).minute(0),
      note: ''
    });
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 680 }}>
        <Stack spacing={2}>
          <TextField label="Họ tên" value={form.name} onChange={(e) => handleChange('name', e.target.value)} required />
          <TextField label="Số điện thoại" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} required />
          <TextField select label="Dịch vụ" value={form.service} onChange={(e) => handleChange('service', e.target.value)} required>
            <MenuItem value="Chăm sóc da">Chăm sóc da chuyên sâu</MenuItem>
            <MenuItem value="Phun thêu mày">Phun thêu mày</MenuItem>
            <MenuItem value="Điều trị mụn">Điều trị mụn</MenuItem>
            <MenuItem value="Nâng cơ">Nâng cơ căng da</MenuItem>
          </TextField>

          <DateTimePicker
            label="Chọn ngày giờ"
            value={form.datetime}
            onChange={(v) => handleChange('datetime', v)}
            renderInput={(params) => <TextField {...params} />}
          />

          <TextField label="Ghi chú (tuỳ chọn)" value={form.note} onChange={(e) => handleChange('note', e.target.value)} multiline rows={3} />

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button type="submit" variant="contained">Gửi yêu cầu</Button>
            <Typography variant="body2" color="text.secondary">Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ.</Typography>
          </Box>
        </Stack>
      </Box>

      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}
