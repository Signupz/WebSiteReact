import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Form from "./components/form";
import Galery from "./components/galery"
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
          <Navbar />
          <Footer />
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
