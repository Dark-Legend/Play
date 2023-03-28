const RequestType = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PATCH: "PATCH",
  PUT: "PUT",
};

export const APIKEY = process.env.REACT_APP_API_KEY;
const apiCall = async (
  url = "",
  method = RequestType.POST,
  body = null,
  headers = { "Content-Type": "application/json" }
) => {
  return await fetch(url, { method, headers, body });
};

export const postReq = async (url, data, headers) => {
  const response = await apiCall(url, RequestType.POST, data, headers);
  return response;
};

export const getReq = async (url, headers) => {
  const response = await apiCall(url, RequestType.GET, headers);
  return response;
};
