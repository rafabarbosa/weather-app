export type LocationProps = {
  lat: number;
  lon: number;
};

export type WeatherProps = {
  coord: {
    lon: number;
    lat: number;
  };
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number | string;
    temp_min: number | string;
    temp_max: number | string;
  };
};

export type GeneralContextProps = {
  weatherData: WeatherProps | null;
  location: LocationProps;
  handleWeatherData: (location: LocationProps) => void;
  loading: boolean;
};
