import { TextField } from '@mui/material'

export default function TextInput({ label, value, onChange, required }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
