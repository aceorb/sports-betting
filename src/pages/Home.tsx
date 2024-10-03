import Counter from '@components/Counter.tsx';
import TodayMatch from '@/pages/sports/TodayMatch.tsx';

function Home() {
  return (
    <div>
      <Counter />
      <div className="container mx-auto p-4 flex flex-col gap-6 pt-4 ">
        <TodayMatch />
      </div>
    </div>
  );
}

export default Home;
