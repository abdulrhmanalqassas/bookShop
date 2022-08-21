import axios from "axios";

const baseURL = "https://gutendex.com/books";

export const axiosPublic = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBookPage = async (pageParam = 1) => {
  const response = await axiosPublic.get(`/?page=${pageParam}`)
  return response
}