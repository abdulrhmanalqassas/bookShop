import axios from "axios";

const baseURL = "https://gutendex.com/books";

export const axiosPublic = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//NYbook api 

export const getBookPage = async (pageParam = 1) => {
  const response = await axiosPublic.get(`/?page=${pageParam}`)
  return response
}


export const axiosNY = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3/reviews.json?author=Haruki%20Murakami&api-key=C2ML18ksOuaQDwXbCu3IyYEeAOvp4d2x",
  headers: {
    "Content-Type": "application/json",
  },
});
// axiosNY.defaults.headers['X-API-KEY'] = 'C2ML18ksOuaQDwXbCu3IyYEeAOvp4d2x';