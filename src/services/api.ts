import axios, { AxiosResponse } from "axios";

const ACCESS_KEY = "bhr2cWM1lWUI_-ntji5sLULxMUAUw0TjuaDVDLpRF5s";

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export const requestImages = async (query: string = "", page: number = 1): Promise<UnsplashImage[]> => {
  try {
    const response: AxiosResponse<{ results: UnsplashImage[] }> = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
