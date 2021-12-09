import React, { useEffect } from 'react';

import { IoCProvider, useInjection } from './ioc.react';
import { container } from './ioc';
import { Button, Card } from 'react-bootstrap';
import { UserStore } from './stores/UserStore';
import { observer } from 'mobx-react';
import { MainUserStore } from './stores/MainUserStore';
import type { IListItem } from './models/IListItem';
import { GlobalUserStore } from './stores/GlobalUserStore';

interface IListItemProps {
  item: IListItem | null
  submit: () => void
}

const ListItem = (props: IListItemProps) => {
  if (!props.item) {
    return null
  }
  const { img, title, description } = props.item

  return ( <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                  <Button onClick={props.submit} variant="primary"/>
                </Card.Text>
              </Card.Body>
            </Card> );
};

interface IUserComponentProps {
  id: number;
  submit: () => void
}

const UserComponent = observer((props: IUserComponentProps) => {
  const store = useInjection<UserStore>('userStore');

  useEffect(() => {

    async function init() {
        await store.init(props.id);
    }

    init();
  }, [store, props.id]);
  
  return (<ListItem item={store.item} submit={props.submit} />);
});


const Main = observer(() => {
  const store = useInjection<MainUserStore>('mainUserStore');
  const globalUserStore = useInjection<GlobalUserStore>('globalUserStore');

  return(<> 
           <h3>Total button api call {globalUserStore.totalApiCall}</h3>
           <h3>Total button click count {globalUserStore.clickCount}</h3>
           <UserComponent id={1 + store.userCount} submit={store.update}/>
           <UserComponent id={2 + store.userCount} submit={store.update}/>
        </>);
});

const App = () => {
  return(<IoCProvider container={container}>
          <Main/>
        </IoCProvider>);
}

export default App;
