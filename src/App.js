import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Header from './Components/Header/Header';
import DetailView from './routes/DetailView';
//import TemplateProvider from './templates/TemplateProvider';
import Cart from './routes/Cart';
import { Box } from '@material-ui/core'
import CategoryView from './routes/CategoryView';
import { LanguageProvider } from './context/Language';

function App() {
  return (
    // <TemplateProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Switch>
              <Route exact path= '/' component={Home} />
              <Route exact path= '/cart' component={Cart} />
              {/* <Route exact path= '/product/:id' component={Product} /> */}
              <Route exact path= '/products/category/:category' component={CategoryView} />
              <Route exact path= '/products/category/all' component={CategoryView} />
              <Route exact path= '/product/:id' component={DetailView} />
              <Route component={NotFound} />
            </Switch>
          </Box>
        </BrowserRouter>
      </LanguageProvider>
    // </TemplateProvider>
  );
}

export default App;
