/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Request, Response } from "express"
import { UserRepository } from "../repositories/UserRepository"

const bcrypt = require('bcrypt')

export const register = async (req: Request, res: Response) => {
  const {username, email, password} = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await UserRepository.create({
      id: '',
      username,
      email,
      password: hashedPassword
    })

    res.status(201).json({ user })

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await UserRepository.findByEmail(email)

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password)

    if (passwordMatches) {
      res.status(200).json({ id: user.id, username: user.username, email: user.email });
    } else {
      res.status(401).json({ error: 'Invalid credentials' })
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' })
  }
}
