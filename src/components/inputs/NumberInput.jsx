import { TextField } from '@mui/material'

export default function NumberInput({ label, value, onChange }) {
  return (
    <TextField label={label} type="number" value={value} onChange={onChange} />
  )
}
