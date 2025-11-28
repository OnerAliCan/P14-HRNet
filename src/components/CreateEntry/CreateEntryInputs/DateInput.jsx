import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { fr } from 'date-fns/locale'

export default function DateInput({ label, value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <DatePicker
        value={value}
        onChange={onChange}
        slotProps={{ textField: { label, fullWidth: true } }}
      />
    </LocalizationProvider>
  )
}
