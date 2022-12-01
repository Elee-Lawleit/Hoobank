import styles from './style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

import getAllAdmins from "../hooks/getAllAdmins";
import { useState } from 'react';


const App = () => {

  const getAdmins = async () => {
    let admins = await getAllAdmins();
    console.log("returning this: ", admins.data)
    setAdmins(admins.data);
  }
  
  const [admins, setAdmins] = useState([]);

  //for map key, no other function -- Safe to delete this
  //but obviously, delete it form map() too then
  let a = 0;

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />

          <button className='p-5 bg-purple-400 rounded-md' onClick={getAdmins}>Get data from backend</button>

          {admins ? admins?.map((admin) => {
            return (
              <div className='min-h-20 bg-cyan-300' key={++a}>name: {admin?.name}</div>
            );
          }) : <div className='min-h-20 bg-cyan-300'>no data found</div>}


          <Footer />
        </div>
      </div>
    </div>
  )
}


export default App
