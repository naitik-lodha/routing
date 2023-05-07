import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Company from "./components/Company";
import Team from "./components/Team";
import History from "./components/History";
import Products from "./components/Products";
import Computers from "./components/Computers";
import Phones from "./components/Phones";
import Tablets from "./components/Tablets";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
      component: Home,
      exact: true,
      metaTags: {
        title: "Welcome to my website",
        description: "Learn more about our products and services",
        keywords: "React, website, products, services",
      },
    },
    {
      name: "About",
      path: "/about",
      component: About,
      metaTags: {
        title: "About Us",
        description: "Learn more about our company and team",
        keywords: "React, website, company, team",
      },
      subRoutes: [
        {
          name: "Company",
          path: "/about/company",
          component: Company,
          metaTags: {
            title: "Our Company",
            description: "Learn more about our company",
            keywords: "React, website, company",
          },
        },
        {
          name: "Team",
          path: "/about/team",
          component: Team,
          metaTags: {
            title: "Our Team",
            description: "Meet our talented team",
            keywords: "React, website, team",
          },
        },
        {
          name: "History",
          path: "/about/history",
          component: History,
          metaTags: {
            title: "Our History",
            description: "Learn about our company's history",
            keywords: "React, website, history",
          },
        },
      ],
    },
    {
      name: "Products",
      path: "/products",
      component: Products,
      metaTags: {
        title: "Our Products",
        description: "Discover our amazing products",
        keywords: "React, website, products",
      },
      subRoutes: [
        {
          name: "Computers",
          path: "/products/computers",
          component: Computers,
          metaTags: {
            title: "Our Computers",
            description: "Browse our selection of computers",
            keywords: "React, website, computers",
          },
        },
        {
          name: "Phones",
          path: "/products/phones",
          component: Phones,
          metaTags: {
            title: "Our Phones",
            description: "Explore our range of phones",
            keywords: "React, website, phones",
          },
        },
        {
          name: "Tablets",
          path: "/products/tablets",
          component: Tablets,
          metaTags: {
            title: "Our Tablets",
            description: "Check out our latest tablets",
            keywords: "React, website, tablets",
          },
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      component: Contact,
      metaTags: {
        title: "Contact Us",
        description: "Get in touch with us",
        keywords: "React, website, contact",
      },
    },
    {
      name: "NotFound",
      path: "*",
      component: NotFound,
      metaTags: {
        title: "Page Not Found",
        description: "Sorry, the page you're looking for doesn't exist",
        keywords: "React, website, not found",
      },
    },
  ];
  function renderRoutes(routes) {
    return (
      <>
        {routes.map((route) => {
          if (route.subRoutes?.length>0) {
            return (
              <>
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              >
              </Route>
              {renderRoutes(route.subRoutes)}
              </>

            );
          } else {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          }
        })}
      </>
    );
  }
  return (
    <BrowserRouter>
    <nav>
    <Navbar data={routes} />
    </nav>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
};

export default App;
