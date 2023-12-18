import React, { useEffect }  from "react";
 import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
 

import { createTheme, ThemeProvider } from "@mui/material/styles";
 
    

import MedicalProducts from "./pages/MedicalProducts/MedicalProducts";
import MyProducts from "./pages/MedicalProducts/MyProducts";
import FormComponent from './component/FormComponent'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
 
  const theme = createTheme();


function App(props) {
 

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  var modalStyles = { 
    height: "6rem",
    
    overlay: {} };
  modalStyles.overlay["z-index"] = 10;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
<LocalizationProvider dateAdapter={AdapterDateFns}>
    
  
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div {...props} className="App">
     
          <Routes>
            
              <Route path="/" element={<MyProducts  key={Date.now()} />}/>
              <Route path="/medproducts/:name" element={<MedicalProducts  key={Date.now()}  />}/>
              <Route path="/medproducts/checkout" element={<FormComponent/>}/>

           
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>  </LocalizationProvider>
  );
}

export default App;
