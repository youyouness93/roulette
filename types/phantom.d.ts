interface PhantomWindow extends Window {
  phantom?: {
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<{ publicKey: string }>;
      disconnect: () => Promise<void>;
      signTransaction: (transaction: any) => Promise<any>;
      signAllTransactions: (transactions: any[]) => Promise<any[]>;
      signMessage: (message: Uint8Array) => Promise<{ signature: Uint8Array }>;
      request: (params: any) => Promise<any>;
    };
  };
}

declare global {
  interface Window extends PhantomWindow {}
}
