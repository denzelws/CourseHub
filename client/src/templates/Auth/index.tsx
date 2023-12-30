import { Link } from 'react-router-dom'
import * as S from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link to="/">
          <a>
            <span>voltar</span>
          </a>
        </Link>
        <div>
          <S.Heading>Find your Best Online Course & Learn</S.Heading>
          <S.Subtitle>
            <strong>SourceHub</strong> is the perfect platform for this.
          </S.Subtitle>
        </div>
        <S.Footer>Source Hub 2023 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <S.Heading>
          {title}
        </S.Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth