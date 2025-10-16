
import { useParams } from 'react-router-dom';

const ReadingPage = () => {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">Reading Manga {id}</h1>
      <div className="bg-muted/30 rounded-lg p-8 text-center">
        <p className="text-muted-foreground">Reading interface coming soon...</p>
      </div>
    </div>
  );
};

export default ReadingPage;