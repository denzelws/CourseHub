import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail } from '@styled-icons/material-outlined';
import { FormWrapper, FormLink } from '../Form';
import TextField from '../Textfield';
import * as S from './styles';

type FormData = {
  email: string
  password: string
}

const initialFormData: FormData = {
  email: '',
  password: '',
}

const FormSignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        navigate('/')
        console.log('Sign-in successful');
      } else {
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error occurred during sign-in:', error)
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
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

        <S.Button type="submit">
          <span>Sign in</span>
        </S.Button>

        <FormLink>
          Don't have an account?
          <Link to="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn;
