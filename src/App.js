import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes,Route} from "react-router-dom";

export default function App (){
 const pageSize =5;
  
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<News country="in" pageSize={pageSize} key="genral" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="general" />}/>
          <Route exact path="/business"  element={< News country="in" pageSize={pageSize} key="business" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="business" />}/>
          <Route exact path="/entertainment"  element={<News country="in" pageSize={pageSize} key="entertainment" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="entertainment" />}/>
          <Route exact path="/health" element={<News country="in" pageSize={pageSize} key="health" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="health"/> }/>
          <Route exact path="/science"   element={<News country="in" pageSize={pageSize} key="science" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="science" />}/>
          <Route exact path="/sports"  element={<News country="in" pageSize={pageSize} key="sports" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="sports" />}/>
          <Route exact path="/technology"  element={<News country="in" pageSize={pageSize} key="technology" apiKey="08bb9bd7551d4a439d23144f5b847d7b" category="technology" />}/>
        </Routes>
 
      </div>
      
    )
  
}
