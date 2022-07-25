import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import PostMainContainer from './PostMainContainer'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  setCurrentCategoryAction,
  setCurrentCategoryQuestionsAction
} from '../redux/actions'

const Categories = () => {
  const currentCategory = useSelector((state) => state.currentCategory)
  const catQuestions = useSelector((state) => state.currentCategoryQuestions)

  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const location = useLocation()
  const dispatch = useDispatch()

  const fetchCategoryQuestions = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_CATEGORY_QUESTIONS}${location.state.name}`,
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      console.log('category questions', body)
      dispatch(setCurrentCategoryQuestionsAction(body))
    }
  }

  const fetchCategory = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_SINGLE_CATEGORY}${location.state.name}`,
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      console.log('category current body', body)
      dispatch(setCurrentCategoryAction(body))
    }
  }

  useEffect(() => {
    fetchCategory()
    fetchCategoryQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          {console.log('categories new', currentCategory)}
          <Jumbotron fluid>
            <Container>
              <h1>{location.state.name}</h1>
              <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
              </p>
            </Container>
          </Jumbotron>
          {catQuestions.map((q) => (
            <PostMainContainer post={q} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}
export default Categories
