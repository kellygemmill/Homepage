import React from 'react'
import { LanguageProvider, Text } from 'containers/Language';
import SearchArea from 'components/search/SearchArea'
import Footer from 'components/Footer'
import NavigationBar from 'components/NavigationBar'

const App = () => {
  
    return (
        <LanguageProvider>
            <NavigationBar className='navigation-bar' />
            <h1>Kelly Gemmill</h1>
            
            <Footer />
        </LanguageProvider>
    );
}

export default App;
