import React from 'react';
import { Container, List } from 'semantic-ui-react'

export type TxListProps = {
  txs: {
    hash: string,
    amount: number
  }[]
}

const TxList = ({
  txs,
}: TxListProps) => {
  return(
    <Container>
    {txs.length < 1
      ? <List>
          <List.Item>No Sent Transactions</List.Item>
        </List>
      : <List divided>
          {txs.map((tx) => {
            return (<List.Item key={tx.hash}>
              <List.Content>
                <List.Header><a href={`https://blockstream.info/testnet/tx/${tx.hash}`} target="_blank" rel="noreferrer" style={{wordWrap: 'break-word'}}>{tx.hash}</a></List.Header>
                <List.Description>₿ {tx.amount}</List.Description>
              </List.Content>
            </List.Item>);
          })}
        </List>
    }
    </Container>
  )
}

export default TxList