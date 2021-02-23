import React from 'react'
import { LanguageProvider, Text } from 'containers/Language';
import NavigationBar from 'components/NavigationBar'
import Introduction from 'components/Introduction'
import Projects from 'components/Projects'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

const App = () => {
  
    return (
        <LanguageProvider>
            <div className="content">
                <NavigationBar className='navigation-bar' />
                <Introduction />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
