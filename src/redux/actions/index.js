export const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN'
export const SET_POST_DATA = 'SET_POST_DATA'
export const ADD_LIKE_AND_KUDOS = 'ADD_LIKE_AND_KUDOS'
export const REMOVE_LIKE_AND_KUDOS = 'REMOVE_LIKE_AND_KUDOS'
export const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
export const SET_CATEGORIES_DATA = 'SET_CATEGORIES_DATA'
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
export const SET_CURRENT_CATEGORY_QUESTIONS = 'SET_CURRENT_CATEGORY_QUESTIONS'
export const SET_CURRENT_POST_COMMENTS = 'SET_CURRENT_POST_COMMENTS'
export const SET_LIKES_COUNT = 'SET_LIKES_COUNT'
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const ADD_NEWEST_POST = 'ADD_NEWEST_POST'
export const SET_CLICKED_CATEGORY = 'SET_CLICKED_CATEGORY'

export const setBearerTokenAction = (token) => ({
  type: SET_BEARER_TOKEN,
  payload: token
})
export const setPostDataAction = (data) => ({
  type: SET_POST_DATA,
  payload: data
})
export const setProfileDataAction = (body) => ({
  type: SET_PROFILE_DATA,
  payload: body
})
export const setCategoriesAction = (categories) => ({
  type: SET_CATEGORIES_DATA,
  payload: categories
})
export const setCurrentCategoryAction = (category) => ({
  type: SET_CURRENT_CATEGORY,
  payload: category
})
export const setCurrentCategoryQuestionsAction = (questions) => ({
  type: SET_CURRENT_CATEGORY_QUESTIONS,
  payload: questions
})
export const setCurrentPostCommentsAction = (comments) => ({
  type: SET_CURRENT_POST_COMMENTS,
  payload: comments
})
export const setLikesCountAction = (count) => ({
  type: SET_LIKES_COUNT,
  payload: count
})
export const addNewCommentAction = (comment) => ({
  type: ADD_NEW_COMMENT,
  payload: comment
})
export const addNewestPostAction = (post) => ({
  type: ADD_NEWEST_POST,
  payload: post
})
export const setClickedCategoryAction = (category) => ({
  type: SET_CLICKED_CATEGORY,
  payload: category
})
// export const addLikeAndKudosAction = (post) => ({
//   type: ADD_LIKE_AND_KUDOS,
//   payload: post
// })
// export const removeLikeAndKudosAction = (post) => ({
//   type: REMOVE_LIKE_AND_KUDOS,
//   payload: post
// })
