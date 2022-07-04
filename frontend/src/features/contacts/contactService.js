import axios from 'axios'

const API_URL = '/api/contacts/'

// Create new fishes
const createContact = async (contactData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, contactData, config)

  return response.data
}

// Get user fishes
const getContacts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user fish
const deleteContact = async (contactId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + contactId, config)

  return response.data
}

const contactService = {
  createContact,
  getContacts,
  deleteContact,
}

export default contactService