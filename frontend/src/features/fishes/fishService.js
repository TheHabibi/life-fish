import axios from 'axios'

const API_URL = '/api/fishes/'

// Create new fishes
const createFish = async (fishData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, fishData, config)

  return response.data
}

// Get user fishes
const getFishes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user fish
const deleteFish = async (fishId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + fishId, config)

  return response.data
}

const fishService = {
  createFish,
  getFishes,
  deleteFish,
}

export default fishService