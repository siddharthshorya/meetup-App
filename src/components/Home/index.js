import {Link} from 'react-router-dom'
import DataStorageContext from '../../context/DataStorageContext'

import {
  PageMainContainer,
  BottomContainer,
  RegisterHeading,
  RegisterPara,
  RegisterButton,
  Image,
  Greeting,
} from '../../styledComponents/styling'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => (
  <DataStorageContext.Consumer>
    {value => {
      const {regStatus, username, selectedTopic} = value
      console.log(username)

      const navigateToRegister = () => {
        const {history} = props
        history.replace('/register')
      }

      const getTopicName = () => {
        const topicName = topicsList.filter(
          eachTopic => selectedTopic === eachTopic.id,
        )
        return topicName[0].displayText
      }

      const getRegisterView = () => (
        <>
          <RegisterHeading>Welcome to Meetup</RegisterHeading>
          <RegisterPara>Please register for the topic</RegisterPara>

          <Link to="/register">
            <RegisterButton type="button">Register</RegisterButton>
          </Link>
        </>
      )

      const getRegisteredView = () => (
        <>
          <Greeting>Hello {username}</Greeting>
          <RegisterPara>Welcome to {getTopicName()}</RegisterPara>
        </>
      )

      return (
        <PageMainContainer>
          <Header />
          <BottomContainer>
            {regStatus ? getRegisteredView() : getRegisterView()}
            <Image
              imageWidth="500px"
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </BottomContainer>
        </PageMainContainer>
      )
    }}
  </DataStorageContext.Consumer>
)

export default Home
