import './App.css';
import Header from './component/Header';
import Primitives from './component/Primitives';
import Tuples from './component/Tuples';
import Unions from './component/Unions';
import Enums from './component/Enums';
import Objects from './component/Objects';
import Interfaces from "./component/Interfaces";
import Classes from './component/Classes';
import Generics from './component/Generics';

function App() {    
    return (
        <div className="App">
            <Header title='TypeScript Basics' />
            <Primitives />
            <Tuples />
            <Unions />
            <Enums />
            <Objects />
            <Interfaces />
            <Classes />
            <Generics />
        </div>
    );
}

export default App;
