import logo from './logo.svg';
import './App.css';

import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="User-window">
          <h1>Hello, User!</h1>
          <div>
            <div className="Text-field">
              <TextField id="standard-basic" label="Сумма бюджета" />
            </div>
            <div className="Text-field">
              <TextField id="standard-basic" label="Количество дней" />
            </div>
          </div>
          <p id="DA">Доступная сумма в день: 1000₽</p>
        </div>
      </div>
    </div>
  );
}

export default App;
