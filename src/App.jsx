import Root from './components/Root';
import Home from './components/home/Home';
import About from './components/about/Info';
import Projects from './components/projects/Projects';
import ProjectPage from './components/projects/ProjectPage/ProjectPage';
import Contact from './components/contact/Contact';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />}>
      <Route path=":projectId" element={<ProjectPage />} />
    </Route>
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