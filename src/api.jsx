import axios from "axios";

export async function getCards({ endpoint }) {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        accept: "application/vnd.github+json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRepos({ endpoint }) {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        accept: "application/vnd.github+json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
