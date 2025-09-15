import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import './App.css';
import AIJournal from "./Components/AIJournal/AIJournal";
import AIJournalPage2 from "./Components/AIJournalPage2/AIJournalPage2";
import AIjournalwrite from "./Components/AIJournalWrite/AIjournalwrite";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/aijournal" element={<AIJournal/>}/>
        <Route exact path="/aijournalarchive" element={<AIJournalPage2/>}/>
        <Route exact path="/aijournalwrite" element={<AIjournalwrite/>}/>

      </Routes>
    </Router>
  );
}

export default App;
