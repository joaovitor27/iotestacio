import React from 'react';
import database from './firebase';

const App = () => {
  const [soilMoisture, setSoilMoisture] = React.useState(0);
  const [pumpStatus, setPumpStatus] = React.useState('Desligado');

  React.useEffect(() => {
    const soilMoistureRef = database.ref('data_irigacao/umidadeSolo');
    soilMoistureRef.on('value', snapshot => {
      const newSoilMoisture = snapshot.val();
      setSoilMoisture(newSoilMoisture);
    });

    const pumpStatusRef = database.ref('data_irigacao/bombaAtiva');
    pumpStatusRef.on('value', snapshot => {
      const newPumpStatus = snapshot.val() ? 'Ligado' : 'Desligado';
      setPumpStatus(newPumpStatus);
    });
  }, []);

  return (
    <div>
      <h1>Mine Front</h1>
      <p>Umidade do Solo: {soilMoisture}%</p>
      <p>Status da Bomba: {pumpStatus}</p>
    </div>
  );
};

export default App;
