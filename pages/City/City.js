import ReactWeather, { useOpenWeather } from 'react-open-weather';

function City(){
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'f20a93028b65bc332d4524357ee92487',
    lat: '52.0406',
    lon: '0.7594',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
      <div>
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Milton Keynes"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
      </div>
    
  );
};

export default City;