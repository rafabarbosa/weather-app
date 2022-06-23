export function formatTemperature(temperature: string | number | undefined) {
  if (temperature) {
    const temperatureHandled = temperature.toString();
    return parseInt(temperatureHandled);
  }
  return "";
}
