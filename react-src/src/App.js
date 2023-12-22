import { useEffect, useState } from 'react'
import { filesystem, os, window } from "@neutralinojs/lib"
import { Header } from './components/Header';
import { Settings } from './components/Settings';
import { RContainer } from './components/Container';
import settingsData from './data/settings.json';


const floatCommand = `hyprctl dispatch togglefloating neutralino-linux_x64`;
const centerCommand = `hyprctl dispatch centerwindow neutralino-linux_x64`;

const useFloatAndCenterWindow = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    if (!isFloating) {
      os.execCommand(floatCommand)
        .then(() => setIsFloating(true))
        .catch((error) => console.error("Error floating window:", error));
      os.execCommand(centerCommand)
        .catch((error) => console.error("Error centering window:", error));
    }
  }, []);

  return isFloating;
};


function App() {
  const isFloating = useFloatAndCenterWindow();
  // Log current directory or error after component is mounted
  useEffect(() => {
    filesystem.readDirectory('./').then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div className="min-h-screen overflow-y-hidden bg-neutral" data-theme="wireframe">
      <Header />
      <RContainer>
        {settingsData.map((setting) => (
          <Settings key={setting.name}
            title={setting.title || setting.name}
            description={setting.description}
            type={setting.type}
            defaultValue={setting.default}
            name={setting.name}
          />
        ))}
      </RContainer>
    </div>

  );
}

export default App;

