import {Component} from 'react'
import {
  PageMainContainer,
  BottomContainer,
  RegisterHeading,
  RegisterNowButton,
  Image,
  ImageFormContainer,
  LabelInputContainer,
  Label,
  Input,
  Form,
  Select,
  Option,
  ErrorMsg,
} from '../../styledComponents/styling'

import DataStorageContext from '../../context/DataStorageContext'
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

class Register extends Component {
  state = {name: '', topic: topicsList[0].id}

  render() {
    const {name, topic, isError} = this.state
    return (
      <DataStorageContext.Consumer>
        {value => {
          const {regStatus, updateRegistrationStatus} = value
          console.log(regStatus)

          const navigateToHome = () => {
            const {history} = this.props
            history.replace('/')
          }

          const onFormSubmit = e => {
            e.preventDefault()

            if (name !== '') {
              updateRegistrationStatus(name, topic)
              navigateToHome()
            } else {
              this.setState({
                isError: true,

                name: '',
              })
            }
          }

          const updateName = e => {
            this.setState({name: e.target.value})
          }

          const updateTopic = e => {
            const selectedOption = e
            console.log(selectedOption)
            this.setState({topic: e.target.value})
          }

          return (
            <PageMainContainer>
              <Header />
              <BottomContainer>
                <ImageFormContainer>
                  <Image
                    imageWidth="50%"
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                    alt="website register"
                  />
                  <Form onSubmit={onFormSubmit}>
                    <RegisterHeading>Let us join</RegisterHeading>
                    <LabelInputContainer>
                      <Label htmlFor="name">NAME</Label>
                      <Input
                        value={name}
                        onChange={updateName}
                        id="name"
                        type="text"
                      />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="topics">TOPICS</Label>
                      <Select id="topics" onChange={updateTopic}>
                        {topicsList.map(eachTopic => (
                          <Option
                            default={eachTopic.id === topicsList[0].id}
                            value={eachTopic.id}
                            key={eachTopic.id}
                          >
                            {eachTopic.displayText}
                          </Option>
                        ))}
                      </Select>
                    </LabelInputContainer>
                    <RegisterNowButton type="submit">
                      Register Now
                    </RegisterNowButton>
                    {isError && <ErrorMsg>Please enter your name</ErrorMsg>}
                  </Form>
                </ImageFormContainer>
              </BottomContainer>
            </PageMainContainer>
          )
        }}
      </DataStorageContext.Consumer>
    )
  }
}

export default Register
