
import { FormWrapper, FormLink } from '../Form'

import {Lock} from '@styled-icons/material-outlined'
import TextField from '../Textfield'
import { Link } from 'react-router-dom'

import * as S from './styles'

const FormSignUp = () => {
  return (
    <FormWrapper>
      <form>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
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

export default FormSignUp