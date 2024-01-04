import { AccountCircle, Notifications } from '@styled-icons/material-outlined'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
return (
    <S.Wrapper>
      <S.Logo>
        Source<span>Hub</span>
      </S.Logo>

      <S.SpanWrapper>
      <Link to='/'>
       <span>Home</span>
      </Link>
      
      <Link to='/'>
       <span>Courses</span>
      </Link>

      <Link to='/teachers'>
        <span>Teachers</span>
      </Link>
      </S.SpanWrapper>

      <S.UserNotificationWrapper>
        <AccountCircle/>
        <Notifications />
      </S.UserNotificationWrapper>
    </S.Wrapper>
  )
}

export default Header