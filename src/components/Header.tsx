import React from 'react';
import { chainId, useAccount, useConnect,useEnsName } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import Button from './Button';
import styles from './Header.module.css';

const Header = () => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: chainId.goerli,
  });

  return (
    <header className={styles.header}>
     {isConnected ? (
      <div>Connected to {ensName ? `${ensName} ` : address}</div>
    ) : (
        <Button onClick={connect}>Connect wallet</Button>
      )}
    </header>
  );
};

export default Header;
