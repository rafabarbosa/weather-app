import React, { createContext, useCallback, useEffect, useState } from "react";
import * as Location from "expo-location";
import {
  GeneralContextProps,
  LocationProps,
  WeatherProps,
} from "../interfaces";
import { fetchWeatherData } from "../services/weather";
import { formatTemperature } from "../helpers";

const GeneralContext = createContext({} as GeneralContextProps);
export const GeneralProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState<LocationProps>({
    lat: 0,
    lon: 0,
  });
  const [weatherData, setWeatherData] = useState<WeatherProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleWeatherData = useCallback(async (location: LocationProps) => {
    setLoading(true);
    fetchWeatherData(location)
      .then((response) => {
        setWeatherData({
          ...response,
          main: {
            temp: formatTemperature(response.main.temp),
            temp_min: formatTemperature(response.main.temp_min),
            temp_max: formatTemperature(response.main.temp_max),
          },
        });
      })
      .catch((error) => {
        console.log("error:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    handleWeatherData(location);
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <GeneralContext.Provider
      value={{ weatherData, location, handleWeatherData, loading }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
