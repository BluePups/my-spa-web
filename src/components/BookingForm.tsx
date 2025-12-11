'use client'

import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

export default function BookingForm() {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [service, setService] = React.useState('');
  const [datetime, setDatetime] = React.useState<Dayjs | null>(dayjs().add(1, 'day').hour(10).minute(0));
  const [note, setNote] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const services = [
    { value: 'laser', label: 'Trẻ hóa da bằng Laser' },
    { value: 'filler', label: 'Fillers & Tiêm chất làm đầy' },
    { value: 'bridal', label: 'Trang điểm cô dâu' }
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone || !service || !datetime) {
      setOpenSnackbar(true);
      return;
    }

    const booking = {
      name,
      phone,
      service,
      datetime: datetime.toISOString(),
      note
    };

    // Lưu tạm: log ra console (theo yêu cầu không dùng DB)
    console.log('New booking:', booking);

    // Hiển thị snackbar thành công
    setOpenSnackbar(true);

    // Reset form
    setName('');
    setPhone('');
    setService('');
    setDatetime(dayjs().add(1, 'day').hour(10).minute(0));
    setNote('');
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <Typography variant="subtitle1">Vui lòng điền thông tin để chúng tôi liên hệ xác nhận</Typography>
          <TextField label="Họ & Tên" value={name} onChange={(e) => setName(e.target.value)} required />
          <TextField label="Số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <TextField select label="Chọn dịch vụ" value={service} onChange={(e) => setService(e.target.value)} required>
            {services.map((s) => (
              <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>
            ))}
          </TextField>
          <DateTimePicker
            label="Ngày & giờ"
            value={datetime}
            onChange={(v) => setDatetime(v)}
            renderInput={(params) => <TextField {...params} required />}
          />
          <TextField label="Ghi chú (tuỳ chọn)" value={note} onChange={(e) => setNote(e.target.value)} multiline rows={3} />
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained">Gửi yêu cầu</Button>
            <Button type="button" variant="outlined" onClick={() => { setName(''); setPhone(''); setService(''); setDatetime(dayjs().add(1, 'day').hour(10).minute(0)); setNote(''); }}>Xóa</Button>
          </Stack>
        </Stack>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity={name && phone && service && datetime ? "success" : "warning"} sx={{ width: '100%' }}>
            {name && phone && service && datetime ? 'Đặt lịch thành công! Chúng tôi sẽ liên hệ lại.' : 'Vui lòng điền đầy đủ thông tin bắt buộc.'}
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
}
