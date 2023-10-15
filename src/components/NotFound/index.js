import {
  BottomContainer,
  Image,
  RegisterHeading,
  RegisterPara,
} from '../../styledComponents/styling'

const NotFound = () => (
  <BottomContainer>
    <Image
      imageWidth="400px"
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <RegisterHeading>Page Not Found</RegisterHeading>
    <RegisterPara>
      We are sorry, the page you requested could not be found.
    </RegisterPara>
  </BottomContainer>
)

export default NotFound
