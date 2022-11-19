import { message } from 'antd'

// import { useNavigate } from 'react-router-dom'

const { REACT_APP_BASE_URL } = process.env

export const useRequest = () => {
  // const navigate = useNavigate()

  const warning = (err) => {
    message.warning(err || `Something went wrong`)
  }
  const request = async ({
    me,
    url,
    method = 'GET',
    headers = {},
    body,
    token,
  }) => {
    // https://houzing-app.herokuapp.com/api/public/auth/login
    // ${REACT_APP_BASE_URL}${url}
    if (token) headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    try {
      let res = await fetch(
        `${
          me ? `https://houzing-app.herokuapp.com/api` : REACT_APP_BASE_URL
        }${url}`,

        {
          method,
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      ).then((res) => res.json())
      return res
    } catch (error) {
      console.log(error)
      warning(error)
      return error
    }
  }

  return request
}

export default useRequest
