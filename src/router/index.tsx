import { createBrowserRouter } from 'react-router-dom';
import ThemeConfigManage from '../components/ThemeConfigManage';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'theme-config',
        element: <ThemeConfigManage />,
      },
      
    ],
  },
]);