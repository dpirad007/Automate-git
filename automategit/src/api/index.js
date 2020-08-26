import axios from "axios";

const url = "https://api.github.com/repos/";

export const fetchcommit = async (username, repo) => {
  let changeableUrl = url;

  if (username && repo) {
    changeableUrl = `https://api.github.com/repos/${username}/${repo}/commits`;
  }

  try {
    const data = await axios.get(changeableUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};
