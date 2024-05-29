import { useEffect, useState } from 'react';
import { fetchBars, deleteBars } from '../apiClient';

const BarsList = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const loadBars = async () => {
      const barsData = await fetchBars();
      setBars(barsData);
    };
    loadBars();
  }, []);

  const handleDelete = async (id) => {
    await deleteBars(id);
    setBars(bars.filter(bar => bar.id !== id));
  };

  return (
    <div class="barList">
        <div class="oneBar">
            {reviews.map(bar => (
                <>
                    <div className="lineBarName">{bar.name}</div>
                    <div className="lineBarAddress">{bar.address}</div>
                    <button className="lineBarDetails">Détails</button>
                </>
            ))}
        </div>
    </div>
  );
};

export default BarsList;