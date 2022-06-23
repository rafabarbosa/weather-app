import styled from "styled-components/native";

export const Content = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const Information = styled.View`
  width: 80%;
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
`;

export const Location = styled.Text`
  font-size: 30px;
`;

export const Date = styled.Text`
  font-size: 20px;
`;

export const Temperature = styled.Text`
  font-size: 100px;
`;

export const TemperatureVariation = styled.Text`
  font-size: 20px;
`;

export const Loading = styled.View`
  justify-content: center;
  align-items: center;
`;
