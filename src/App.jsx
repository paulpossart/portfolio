import Root from './components/Root';
import Home from './components/home/Home';
import About from './components/about/Info';

import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

// {/*<Route path="/:project" element={<ProjectPage />} />*/}
//

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />} />
    <Route path="contact" element={<Contact />} />
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App