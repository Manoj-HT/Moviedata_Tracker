export const useHttp = () => {
  const token = localStorage.getItem("token");
  const post = async (url: string, body: any, options?: any) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: [["Authorization", `Bearer ${token}`]],
      ...options,
    }).then((response) => response.json());
  };

  const get = async (url: string, options?: any) => {
    return fetch(url, {
      method: "GET",
      headers: [["Authorization", `Bearer ${token}`]],
      ...options,
    }).then((response) => response.json());
  };

  const put = async (url: string, body: any, options?: any) => {
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: [["Authorization", `Bearer ${token}`]],
      ...options,
    }).then((response) => response.json());
  };

  const del = async (url: string, options?: any) => {
    return fetch(url, {
      method: "DELETE",
      headers: [["Authorization", `Bearer ${token}`]],
      ...options,
    }).then((response) => response.json());
  };

  return {post, get, put, del}
};
