'use client'

import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

type FormState = {
  name: string
  phone: string
  service: string
  datetime: string
  note: string
}

const services = [
  { value: 'Chăm sóc da mặt chuyên sâu' },
  { value: 'Trẻ hóa vùng mắt' },
  { value: 'Điều trị mụn chuyên sâu' },
  { value: 'Massage thư giãn' }
]

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    service: services[0].value,
    datetime: '',
    note: ''
  })
  const [open, setOpen] = useState(false)
  const [snackbarMsg, setSnackbarMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) {
      setSnackbarMsg('Vui lòng nhập họ tên')
      setOpen(true)
      return false
    }
    if (!form.phone.trim()) {
      setSnackbarMsg('Vui lòng nhập số điện thoại')
      setOpen(true)
      return false
    }
    if (!form.datetime.trim()) {
      setSnackbarMsg('Vui lòng chọn ngày giờ')
      setOpen(true)
      return false
    }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // Lưu tại local state / console
    console.info('Đơn đặt lịch (mock):', form)

    setSnackbarMsg('Đặt lịch thành công! Chúng tôi sẽ gọi xác nhận trong vòng 24h.')
    setOpen(true)

    // Reset form
    setForm({
      name: '',
      phone: '',
      service: services[0].value,
      datetime: '',
      note: ''
    })
  }

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Họ và tên" name="name" value={form.name} onChange={handleChange} required />
          <TextField label="Số điện thoại" name="phone" value={form.phone} onChange={handleChange} required />
          <TextField select label="Chọn dịch vụ" name="service" value={form.service} onChange={handleChange}>
            {services.map((s, idx) => (
              <MenuItem key={idx} value={s.value}>{s.value}</MenuItem>
            ))}
          </TextField>
          <TextField type="datetime-local" label="Ngày giờ" name="datetime" value={form.datetime} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
          <TextField label="Ghi chú (tùy chọn)" name="note" value={form.note} onChange={handleChange} multiline rows={3} />
          <Button type="submit" variant="contained" color="primary">Gửi yêu cầu</Button>
        </Stack>
      </form>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        {/* Alert không được để children là null; cung cấp message chắc chắn */}
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </>
  )
}
