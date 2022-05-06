import ReactWeather, { useOpenWeather } from 'react-open-weather';

function City(){
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'f20a93028b65bc332d4524357ee92487',
    lat: '48.137154',
    lon: '11.576124',
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
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
      </div>
    
  );
};

export default City;