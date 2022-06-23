import api from "./api";
import { LocationProps, WeatherProps } from "../interfaces";
import { WEATHER_API_KEY } from "@env";

export const fetchWeatherData = async ({
  lat,
  lon,
}: LocationProps): Promise<WeatherProps> => {
  const endpoint = `/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
  const response = await api.get(endpoint);
  return response.data;
};
