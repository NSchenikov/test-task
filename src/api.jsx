import axios from "axios";

export const baseUrl = "https://api.github.com/search/users?q=";

export async function getCards({ q }) {
  const endpoint = `${baseUrl}${q}`;
  // console.log("endpoint", endpoint);
  try {
    const response = await axios.get(endpoint, {
      headers: {
        accept: "application/vnd.github+json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("ошибка сервера");
  }
}
