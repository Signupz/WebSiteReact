import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/head";
import About from "./components/about";
import Form from "./components/form";
import Galery from "./components/galery"
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <div className="col">
            <Header />
          </div>
          <div className="container-fluid">
            <div className="col">
              <div className="col">
                <Navbar />
              </div>
            </div>
          </div>
            <Footer />  
        </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <div className="container min-vw-100">
//           <div className="col">
//             <Header />
//           </div>
//           <div className="container mw-100">
//             <div className="row">
//               <div className="col-3">
//                 <Navbar />
//               </div>
//               <div className="col-9">
//               <About />
//               </div>
//             </div>
//           </div>
//             <Footer />  
//         </div>
//     </div>
//   );
// }

export default App;
