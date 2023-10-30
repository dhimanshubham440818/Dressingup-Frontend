import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux'
import CustomLoader from './components/CustomLoader';
const App = React.lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
            {/* <App /> */}
          
            <Suspense fallback={<CustomLoader/>}>
              <App/>
            </Suspense>
      </Provider>
);