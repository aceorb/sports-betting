import CardButton from '@/pages/ai/CardButton.tsx';
import { aiCardButtonData } from '@/data/aidata.ts';

function AIPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-4 pt-4 ">
      {aiCardButtonData.map((data) => (
        <CardButton
          key={data.id}
          icon={data.icon}
          title={data.title}
          description={data.description}
          buttonTitle={data.button}
        />
      ))}
    </div>
  );
}

export default AIPage;
