'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useCallback } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const { publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleWalletClick = useCallback(() => {
    if (publicKey) {
      disconnect();
    } else {
      setVisible(true);
    }
  }, [publicKey, disconnect, setVisible]);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Image 
                src="/Grok (1).png" 
                alt="Grok Films Logo" 
                width={32}
                height={32}
                className="object-contain"
              />
              <h1 className="text-xl font-bold text-black">Grok Films</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://x.com/theobuilding" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <button className="bg-black text-white px-4 py-1.5 text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
              Create
            </button>
            <button 
              onClick={handleWalletClick}
              className="bg-purple-600 text-white px-4 py-1.5 text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer flex items-center space-x-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span>
                {publicKey ? formatAddress(publicKey.toString()) : 'Connect Phantom'}
              </span>
            </button>
            <div className="bg-gray-100 border border-gray-300 px-3 py-1 rounded text-sm">
              <span className="text-gray-600 text-xs">Balance:</span>
              <span className="text-black font-mono ml-1">0.00</span>
              <span className="text-gray-500 text-xs ml-1">tokens</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
