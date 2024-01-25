export const baseUrl = "https://api.github.com/search/users?q=";

export async function getCards({ q }) {
  //   setLoading(true);
  const response = await fetch(`${baseUrl}${q}`, {
    method: "GET",
    headers: {
      accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error("ошибка сервера");
  }

  const data = await response.json();
  // console.log(data);
  return data;
}
