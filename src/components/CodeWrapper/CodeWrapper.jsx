import { Code } from "bright";

function CodeWrapper({ children }) {
  return (
    <Code className="code-snippet" theme="dracula" lang="py">
      {children}
    </Code>
  );
}

export default CodeWrapper;
