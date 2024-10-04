import { Tab, Tabs } from '@components/Tabs';
import NoPosition from '@components/NoPosition';
import Stats from './Stats';

function MyBetsPage() {
  return (
    <div className="flex gap-2 flex-col w-full">
      <Stats />
      <Tabs>
        <Tab label="Open">
          <NoPosition showDescription={false} />
        </Tab>
        <Tab label="Closed">
          <NoPosition showDescription={false} />
        </Tab>
        <Tab label="Claimable">
          <NoPosition showDescription={false} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MyBetsPage;
