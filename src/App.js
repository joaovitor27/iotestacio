import React from 'react';
import database from './firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <div style={styles.container}>
      <h1>Informações da irrigação:</h1>
      <p>Umidade do Solo: {soilMoisture}%</p>
      <p>Status da Bomba: {pumpStatus}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
}


export default App;
