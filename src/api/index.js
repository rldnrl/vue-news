import axios from 'axios'

const config = {
  baseURL: 'https://api.hnpwa.com/v0'
}

// async function fetchNewsList() {
//   const response = await axios.get(`${config.baseURL}/news/1.json`)
//   return response.data
// }

// async function fetchAskList() {
//   const response = await axios.get(`${config.baseURL}/ask/1.json`)
//   return response.data
// }

async function fetchList(pageName) {
  const response = await axios.get(`${config.baseURL}/${pageName}/1.json`)
  return response.data
}

async function fetchUserInfo(userName) {
  return await axios.get(`${config.baseURL}/user/${userName}.json`)
}

async function fetchAskDetail(itemId) {
  return await axios.get(`${config.baseURL}/item/${itemId}.json`)
}

export { fetchList, fetchUserInfo, fetchAskDetail }
