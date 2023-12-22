import { useEffect, useState } from "react";
import { getHyprValue, setHyprValue } from '../utils/hyprctl.js';

export const Slider = ({ min, max, name, type }) => {
  const [currentValue, setCurrentValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const value = await getHyprValue(name, type);
        setCurrentValue(value);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching hyprctl value:', error);
      }
    };

    fetchValue();
  }, []);

  const handleChange = async (e) => {
    const newValue = e.target.value;
    await setHyprValue(name, newValue);
    setCurrentValue(newValue);
    console.log('Value set to:', newValue);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center">Loading...</div>
      ) : (
        <>
          <div className="flex flex-row justify-between text-xs px-2">
            <input
              type="range"
              min={min}
              max={max}
              value={currentValue || min}  // Ensure a default value when currentValue is null
              className="range range-xs"
              step="1"
              onChange={handleChange}
              disabled={isLoading}
            />
            <span className="ml-2">{currentValue && currentValue.toString().slice(0, 3)}</span>
          </div>
        </>
      )}
    </>
  );
};

