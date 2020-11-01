import './App.css';
import Game from './components/Game';
function App() {
    return (
        <div className="App">
            <Game n={70} withSettings={true} />
        </div>

    );
}

export default App;
