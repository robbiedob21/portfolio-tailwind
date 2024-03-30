import React from 'react';
import { RouterProvider , Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Root from './components/root';
import Homepage from './pages/homepage';
import AboutMe from './pages/aboutme-page';
import ContactPage from './pages/contact-page';
import ProjectPage from './pages/projects-page';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root /> }>
      <Route path=''  element={ <Homepage />}/>
      <Route path='/about-me' element={ <AboutMe />}/>
      <Route path='/projects' element={ <ProjectPage />}/>
      <Route path='/contact' element={ <ContactPage />}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  );
}
