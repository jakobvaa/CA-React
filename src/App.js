import './App.css';
import GameOfLife from './components/GameOfLife';
function App() {
    return (
        <div className="App">
            <GameOfLife n={80} withSettings={true} />
        </div>

    );
}

export default App;
