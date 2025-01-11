import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

interface ApiRequestParams {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
}

async function apiRequest<T>({
  url,
  method,
  body,
  headers,
  params,
}: ApiRequestParams): Promise<AxiosResponse<T>> {
  const config: AxiosRequestConfig = {
    url: `${BASE_API_URL}${url}`,
    method,
    headers,
    params,
    data: body,
    withCredentials: true,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios error
      console.error("Axios error:", error.response?.data || error.message);
      throw error.response?.data || error.message;
    } else {
      // Handle other errors
      console.error("Unexpected error:", error);
      throw error;
    }
  }
}

export default apiRequest;
