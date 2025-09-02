import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/employeesSlice'
import { Box, Button, Typography } from '@mui/material'
import TextInput from './CreateEmployeeInputs/TextInput'
import NumberInput from './CreateEmployeeInputs/NumberInput'
import DateInput from './CreateEmployeeInputs/DateInput'
import SelectInput from './CreateEmployeeInputs/SelectInput'
import Modal from './Modal'
import states from '../../data/states'
import departments from '../../data/departments'

export default function CreateEmployeeForm() {
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [department, setDepartment] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName || !lastName) return

    dispatch(
      addEmployee({
        id: Date.now(),
        firstName,
        lastName,
        department,
        dateOfBirth: dateOfBirth.toISOString(),
        startDate: startDate.toISOString(),
        street,
        city,
        state,
        zipCode,
      }),
    )

    setModalOpen(true)
    setFirstName('')
    setLastName('')
    setDepartment('')
    setDateOfBirth(null)
    setStartDate(null)
    setStreet('')
    setCity('')
    setState('')
    setZipCode('')
  }

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextInput
        label="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <TextInput
        label="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <DateInput
        label="Date de naissance"
        value={dateOfBirth}
        onChange={setDateOfBirth}
      />
      <DateInput
        label="Date de début"
        value={startDate}
        onChange={setStartDate}
      />

      <Typography variant="h6">Adresse</Typography>
      <TextInput
        label="Rue"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <TextInput
        label="Ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <SelectInput
        label="État"
        value={state}
        onChange={(e) => setState(e.target.value)}
        options={states}
      />
      <NumberInput
        label="Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <SelectInput
        label="Département"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        options={departments}
      />
      <Button type="submit" variant="contained">
        Ajouter
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message="L'employé a bien été ajouté !"
      />
    </Box>
  )
}
