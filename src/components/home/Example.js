import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

function Example() {
  const [mode, setMode] = useState('Pink');
  return (
    <>
    <DarkModeToggle
      mode={mode}
      dark="Pink"
      light="Light"
      size="lg"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="pink"
      activeThumbColor="#e2e8f0"
      onChange={(mode) => {
        setMode(mode);
      }}
    /> 
    <h2>hello</h2>
</>
    
  );
}
export default Example