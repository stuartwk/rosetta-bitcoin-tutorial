import React, { useState } from 'react';
import { TextArea, Form, Button, Grid, Icon, Segment, Divider, Header } from 'semantic-ui-react'
import * as bip39 from 'bip39'

export type UnlockViewProps = {
  submitPhrase(phrase: string): void
}

const UnlockView = ({
  submitPhrase
}: UnlockViewProps) => {

  const [pendingPhrase, setPendingPhrase] = useState('');

  const generatePhrase = (): void => {
    const mnemonic = bip39.generateMnemonic()
    submitPhrase(mnemonic)
  }

  const onFormSubmit = () => {
    submitPhrase(pendingPhrase)
  }

  return (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Existing Phrase
          </Header>

          <Form onSubmit={onFormSubmit}>
            <Form.Field>
              <TextArea placeholder='Phrase' value={pendingPhrase} onChange={e => setPendingPhrase(e.target.value)} />
            </Form.Field>
            <Button type='submit' primary>Unlock Wallet</Button>
          </Form>
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='key' />
            Generate New Phrase
          </Header>
          <Button primary onClick={generatePhrase}>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  );
}

export default UnlockView;