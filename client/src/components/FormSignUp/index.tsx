import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, Person } from '@styled-icons/material-outlined';
import { FormWrapper, FormLink } from '../Form';
import TextField from '../Textfield';
import * as S from './styles';

type FormData = {
  username: string
  email: string
  password: string
  confirm_password: string
}

const initialFormData: FormData = {
  username: '',
  email: '',
  password: '',
  confirm_password: '',
}

const FormSignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Signup successful')
        navigate('/')
      } else {
        console.error('Signup failed')
      }
    } catch (error) {
      console.error('Error occurred during signup:', error)
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<Person />}
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Mail />}
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          value={formData.confirm_password}
          onChange={handleChange}
        />

        <S.Button type="submit">
          <span>Sign up now</span>
        </S.Button>

        <FormLink>
          Already have an account?
          <Link to="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp;
