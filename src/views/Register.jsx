'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import Logo from '@components/layout/shared/Logo'

// MobX Store Import
import { observer } from 'mobx-react-lite'
import authStore from '@/stores/authStores'
import { Grid } from '@mui/material'

const Register = observer(({ mode }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'

  const router = useRouter()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleSubmit = async e => {
    e.preventDefault()

    await authStore.register(username, email, password, firstName, lastName)

    if (!authStore.error) {
      router.push('/login')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href='/' className='flex justify-center items-start mbe-6'>
            <Logo />
          </Link>
          <Typography variant='h4'>Adventure starts here 🚀</Typography>
          <div className='flex flex-col gap-5'>
            <Typography className='mbs-1'>
              Sign up today and access electrical vehicles and affordable deliveries in your area
            </Typography>
            <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label='First Name'
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label='Last Name'
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </div>
              <TextField fullWidth label='Phone number' value={username} onChange={e => setUsername(e.target.value)} />
              <TextField fullWidth label='Email' value={email} onChange={e => setEmail(e.target.value)} />
              <TextField
                fullWidth
                label='Password'
                type={isPasswordShown ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
              <Button fullWidth variant='contained' type='submit' disabled={authStore.loading}>
                {authStore.loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
              {authStore.error && <Typography color='error'>{authStore.error}</Typography>}
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>Already have an account?</Typography>
                <Typography component={Link} href='/login' color='primary'>
                  Sign in instead
                </Typography>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

export default Register
