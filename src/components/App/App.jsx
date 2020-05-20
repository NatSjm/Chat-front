import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faBars, faSearch, faPaperclip, faVideo, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {Gydeline} from 'components/Block';
import {DialogSection, ContactsSection} from 'components/ChatComponents';


library.add(faCheck, faBars, faSearch, faPaperclip, faVideo, far, faLocationArrow);

const App = () => {

    return <React.Fragment>
        <Gydeline>
            <ContactsSection/>
            <DialogSection/>
        </Gydeline>
    </React.Fragment>;
};

export default React.memo(App);
