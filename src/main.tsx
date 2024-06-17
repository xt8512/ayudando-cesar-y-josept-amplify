import { Buffer } from 'buffer';
import process from 'process';

window.Buffer = Buffer;
window.process = process;

import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import App from './App.tsx'

import { handleStartConfig } from './amplify/actions/StartConfig.ts';
handleStartConfig();

import './index.css';

if (typeof global === 'undefined') {
  global = window;
}

const root = createRoot(document.getElementById('root')!);

root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>,
);
