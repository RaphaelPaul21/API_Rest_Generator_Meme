import React, { useEffect, useState } from 'react';
import './MemeGenerator_css.css';

export default function MemeGenerator() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch("https://apimeme.com/meme?meme=Advice-Tam&top=Top+text&bottom=Bottom+text", {
          method: "GET",
          mode: "no-cors"
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <div className='titreGenerator'>
      <h1>Générateur de memes</h1>
    </div>
      {data ? (
        <div className='memeGenerated'>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
