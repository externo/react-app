import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AuthorsPage from './components/author/AuthorsPage';
import CoursesPage from './components/course/CoursesPage';
import AboutPage from './components/about/AboutPage';
import ManageAuthorPage from './components/author/ManageAuthorPage'; //eslint-disable-line import/no-named-as-default
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/authors" component={AuthorsPage} />
      <Route path="/author" component={ManageAuthorPage} />
      <Route path="/author/:id" component={ManageAuthorPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/course" component={ManageCoursePage} />
      <Route path="/course/:id" component={ManageCoursePage} />
      <Route path="/about" component={AboutPage} />
      <Redirect from="about/*" to="about" />
      <Redirect from="about*" to="about" />
      <Route path="*" component={NotFoundPage} />
  </Route>
);
