import Axios from "axios";

const fetchUser = () => {
  console.log("fetching user ...");
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const fetchPost = () => {
  console.log("fetching post ...");
  return axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default 