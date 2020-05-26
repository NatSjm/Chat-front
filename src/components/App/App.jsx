import React from 'react';
import {ChatPageWrapper} from 'components/Block';
import {DialogSection, DialogsListSection} from 'sections';

const App = () => {
    return <React.Fragment>
        <ChatPageWrapper>
            <DialogsListSection>
            	<DialogSection/>
            </DialogsListSection>
        </ChatPageWrapper>
    </React.Fragment>;
};

export default React.memo(App);
