import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  UserLogin,
  UserSignup,
  Admin
} from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {


  return (
    <>
      <Router>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
        </div>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="bg-primary w-full overflow-hidden">
                  <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                      <Hero />
                      <Footer/>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/login" element={<UserLogin />} />

            <Route path="/signup" element={<UserSignup />} />

            <Route
              path="/features"
              element={
                <div
                  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
                >
                  <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Footer/>
                  </div>
                </div>
              }
            />
            <Route
              path="/product"
              element={
                <div
                  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
                >
                  <div className={`${styles.boxWidth}`}>
                    <Billing />
                    <CardDeal />
                    <Footer/>
                  </div>
                </div>
              }
            />
            <Route
              path="/clients"
              element={
                <div
                  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
                >
                  <div className={`${styles.boxWidth}`}>
                    <Clients />
                    <CTA />
                    <Footer/>
                  </div>
                </div>
              }
            />
            <Route path="/dashboard" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
