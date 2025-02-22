import { useState } from "react";

import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TerminalController = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="welcome">
      <h1>Advanced Awareness Assessment</h1>
    </TerminalOutput>,
    <TerminalOutput key="welcome">
      <p>Lo-Fi Operation Aptitude Test</p>
      <p>Please Login with your username and password.</p>
    </TerminalOutput>,
  ]);

  return (
    <div className="terminal-container">
      <Terminal
        name="React Terminal Usage Example"
        colorMode={ColorMode.Light}
        onInput={(terminalInput) =>
          console.log(`New terminal input received: '${terminalInput}'`)
        }
        height="100vh"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
