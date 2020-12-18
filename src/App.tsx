import React, { useState } from 'react';
import './App.css';
import UnlockView from './UnlockView'
import WalletView from './WalletView'
import { Container, Menu, Button, Icon } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

function App() {

  const [phrase, setPhrase] = useState('');

  const clearPhrase = () => {
    setPhrase('')
  }

  return (
    <Container>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            Bitcoin Rosetta Tutorial
          </Menu.Item>
          <Menu.Menu position='right'>
            {phrase.length > 0 &&
              <Menu.Item>
                <Button icon onClick={clearPhrase}>
                  <Icon name='sign out' />
                </Button>
              </Menu.Item>
            }
          </Menu.Menu>
        </Container>
      </Menu>

      <Container style={{ marginTop: '7em' }}>
        {phrase.length < 1 
          ? <UnlockView submitPhrase={(phrase: string) => setPhrase(phrase)}></UnlockView>
          : <WalletView phrase={phrase}></WalletView>
        }
      </Container>
      
    </Container>
  );
}

export default App;
