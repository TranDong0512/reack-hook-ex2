import { Suspense, useCallback, useState } from 'react';
import { dataArray } from '../src/data/data';
function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterItems = useCallback(
    (query: string) =>
      dataArray.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ),
    []
  );
  const filteredItems = filterItems(searchQuery);
  return (
    <>
      <label>
        Search :
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ul>
          {filteredItems.map((item, index) => (
            <div key={item.id}>
              <li>{item.name}</li>
              <li>{item.age}</li>
              <li>{item.status}</li>
            </div>
          ))}
        </ul>
      </Suspense>
    </>
  );
}

export default App;
