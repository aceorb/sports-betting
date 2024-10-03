import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '@/layout';
import SportsPage from '@/pages/sports';
import AIPage from '@/pages/ai';
import BetslipPage from '@/pages/betslip';
import MyBetsPage from '@/pages/my-bets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SportsPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/betslip" element={<BetslipPage />} />
          <Route path="/my-bets" element={<MyBetsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
