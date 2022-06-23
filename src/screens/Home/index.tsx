import React from "react";

import RefreshButton from "../../components/RefreshButton";
import BackgroundImage from "../../assets/images/background.jpg";
import Background from "../../components/Background";

import { useGeneralContext } from "../../hooks/useGeneralContext";
import { format } from "date-fns";
import * as S from "./style";
import { ActivityIndicator, View } from "react-native";

export default function HomeScreen() {
  const { weatherData, location, handleWeatherData, loading } =
    useGeneralContext();

  return (
    <Background source={BackgroundImage}>
      <S.Content>
        <S.Information>
          {loading ? (
            <S.Loading>
              <ActivityIndicator size="large" color="#000" />
            </S.Loading>
          ) : (
            <>
              <S.Location>
                {weatherData?.name}, {weatherData?.sys.country}
              </S.Location>
              <S.Date>{format(new Date(), "dd/MM/yyyy hh:mm")}</S.Date>
              <S.Temperature>{weatherData?.main.temp}º</S.Temperature>
              <S.TemperatureVariation>
                {`Min: ${weatherData?.main.temp_min}º / Max: ${weatherData?.main.temp_max}º`}
              </S.TemperatureVariation>
            </>
          )}
        </S.Information>
        <RefreshButton onPress={() => handleWeatherData(location)} />
      </S.Content>
    </Background>
  );
}
