'use client';

import { useState, useEffect } from 'react';
import LogoIcon from '../LogoIcon';

// Phantom wallet types
declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<{ publicKey: { toString: () => string } }>;
      disconnect: () => Promise<void>;
      publicKey?: { toString: () => string };
      signTransaction: (transaction: any) => Promise<any>;
    };
  }
}

export default function BuyingPage() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [tokenQuantity, setTokenQuantity] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [paymentCurrency, setPaymentCurrency] = useState<'USD' | 'SOL' | 'USDT'>('USD');

  // Static pricing data (in a real app, this would come from an API)
  const tokenPriceUSD = 0.16; // $0.16 per BMXC (Phase 1: Days 1-7)
  const solPriceUSD = 140; // $140 per SOL
  const usdtPriceUSD = 1; // $1 per USDT
  const minPurchaseUSD = 10; // $10 minimum
  const maxPurchaseUSD = 10000; // $10,000 maximum

  // Calculate token price in selected currency
  const getTokenPriceInCurrency = () => {
    switch (paymentCurrency) {
      case 'SOL':
        return tokenPriceUSD / solPriceUSD;
      case 'USDT':
        return tokenPriceUSD / usdtPriceUSD;
      default:
        return tokenPriceUSD;
    }
  };

  // Calculate min/max in selected currency
  const getMinMaxInCurrency = () => {
    switch (paymentCurrency) {
      case 'SOL':
        return {
          min: minPurchaseUSD / solPriceUSD,
          max: maxPurchaseUSD / solPriceUSD
        };
      case 'USDT':
        return {
          min: minPurchaseUSD / usdtPriceUSD,
          max: maxPurchaseUSD / usdtPriceUSD
        };
      default:
        return {
          min: minPurchaseUSD,
          max: maxPurchaseUSD
        };
    }
  };

  // Calculate conversions
  useEffect(() => {
    if (tokenQuantity) {
      const tokens = parseFloat(tokenQuantity);
      if (!isNaN(tokens)) {
        const tokenPrice = getTokenPriceInCurrency();
        const payment = (tokens * tokenPrice).toFixed(paymentCurrency === 'SOL' ? 6 : 2);
        setPaymentAmount(payment);
      }
    } else {
      setPaymentAmount('');
    }
  }, [tokenQuantity, paymentCurrency]);

  const connectWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        setLoading(true);
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        setIsConnected(true);
      } else {
        // Redirect to Phantom website if not installed
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Error connecting to Phantom wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect();
        setWalletAddress('');
        setIsConnected(false);
      }
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const handlePurchase = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    const tokens = parseFloat(tokenQuantity);
    const minTokens = 1;
    const maxTokens = Math.floor(maxPurchaseUSD / tokenPriceUSD);
    if (isNaN(tokens) || tokens < minTokens || tokens > maxTokens) {
      alert(`Please enter between ${minTokens} and ${maxTokens} tokens`);
      return;
    }

    setLoading(true);
    try {
      // In implementation, you would:
      // 1. Create a transaction to send SOL to the presale contract
      // 2. The contract would mint BMXC tokens to the user's wallet
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`Purchase successful! You will receive ${tokenQuantity} BMXC tokens.`);
      setTokenQuantity('');
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Purchase failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-17 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex justify-center mb-1">
            <div className="flex items-center justify-center">
              <LogoIcon size={130} smooth={true} />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Buy{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              BMXC Tokens
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Secure your BMXC tokens at presale prices using Phantom wallet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Purchase Form */}
          <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl p-8 border border-orange-400/30">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Purchase BMXC Tokens</h2>
            
            {/* Wallet Connection */}
            <div className="mb-8">
              {!isConnected ? (
                                <button
                  onClick={connectWallet}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#AB9FF2] via-[#9D7BFF] to-[#7C3AED] hover:from-[#9F93F0] hover:via-[#8B5CF6] hover:to-[#6D28D9] text-white py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] group"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/20 border-t-white mr-4"></div>
                      <span className="text-lg">Connecting...</span>
                    </div>
                  ) : (
                    <>
                      <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                        <svg width="28" height="28" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                          <g clip-path="url(#clip0_2596_138588)">
                            <rect width="1200" height="1200" rx="257.592" fill="url(#phantomGradient)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M517.219 779.814C470.102 852.012 391.148 943.378 286.09 943.378C236.426 943.378 188.672 922.933 188.672 834.122C188.672 607.943 497.48 257.813 784.004 257.813C947.004 257.813 1011.95 370.902 1011.95 499.326C1011.95 664.168 904.98 852.651 798.648 852.651C764.902 852.651 748.347 834.122 748.347 804.732C748.347 797.065 749.621 788.759 752.168 779.814C715.875 841.789 645.836 899.292 580.254 899.292C532.5 899.292 508.305 869.263 508.305 827.094C508.305 811.76 511.488 795.787 517.219 779.814ZM904.363 494.869C904.363 532.291 882.284 551.002 857.586 551.002C832.514 551.002 810.809 532.291 810.809 494.869C810.809 457.448 832.514 438.737 857.586 438.737C882.284 438.737 904.363 457.448 904.363 494.869ZM764.031 494.871C764.031 532.293 741.952 551.004 717.254 551.004C692.182 551.004 670.477 532.293 670.477 494.871C670.477 457.449 692.182 438.739 717.254 438.739C741.952 438.739 764.031 457.449 764.031 494.871Z" fill="#FFFFFF"/>
                          </g>
                          <defs>
                            <linearGradient id="phantomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9"/>
                              <stop offset="50%" stopColor="#F3F0FF" stopOpacity="0.8"/>
                              <stop offset="100%" stopColor="#E5DEFF" stopOpacity="0.7"/>
                            </linearGradient>
                            <clipPath id="clip0_2596_138588">
                              <rect width="1200" height="1200" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className="text-lg font-bold tracking-wide">Connect Phantom Wallet</span>
                    </>
                  )}
                </button>
              ) : (
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold mb-1">Wallet Connected</p>
                      <p className="text-gray-300 text-sm">
                        {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                      </p>
                    </div>
                    <button
                      onClick={disconnectWallet}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Disconnect
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Payment Currency Selector */}
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">Payment Currency</label>
              <div className="grid grid-cols-3 gap-2">
                {['USD', 'SOL', 'USDT'].map((currency) => (
                  <button
                    key={currency}
                    onClick={() => setPaymentCurrency(currency as 'USD' | 'SOL' | 'USDT')}
                    className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      paymentCurrency === currency
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            </div>

            {/* Token Quantity Input */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Number of BMXC Tokens</label>
              <div className="relative">
                <input
                  type="number"
                  value={tokenQuantity}
                  onChange={(e) => setTokenQuantity(e.target.value)}
                  placeholder="0"
                  min="1"
                  max={Math.floor(maxPurchaseUSD / tokenPriceUSD)}
                  step="1"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-8 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Min: 1 token</span>
                <span>Max: {Math.floor(maxPurchaseUSD / tokenPriceUSD).toLocaleString()} tokens</span>
              </div>
            </div>

            {/* Conversion Display */}
            {paymentAmount && (
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">You Want:</span>
                    <span className="text-orange-400 font-semibold">{tokenQuantity} BMXC tokens</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">You Pay:</span>
                    <span className="text-white font-semibold">
                      {paymentAmount} {paymentCurrency}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Token Price:</span>
                      <span className="text-gray-300">
                        {getTokenPriceInCurrency().toFixed(paymentCurrency === 'SOL' ? 6 : 4)} {paymentCurrency} per BMXC
                      </span>
                    </div>
                    {paymentCurrency !== 'USD' && paymentAmount && (
                      <div className="flex justify-between items-center text-sm mt-2">
                        <span className="text-gray-400">USD Equivalent:</span>
                        <span className="text-gray-300">
                          ${(parseFloat(paymentAmount) * (paymentCurrency === 'SOL' ? solPriceUSD : usdtPriceUSD)).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Purchase Button */}
            <button
              onClick={handlePurchase}
              disabled={!isConnected || !tokenQuantity || loading || paymentCurrency === 'USD'}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Processing...
                </div>
              ) : paymentCurrency === 'USD' ? (
                'USD - Price Reference Only'
              ) : (
                'Purchase BMXC Tokens'
              )}
            </button>
            
            {/* USD Payment Notice */}
            {paymentCurrency === 'USD' && (
              <div className="mt-3 p-3 bg-blue-500/20 border border-blue-400/30 rounded-xl">
                <p className="text-blue-300 text-sm text-center">
                  💡 USD pricing is for reference only. Please select SOL or USDT to make a purchase.
                </p>
              </div>
            )}
          </div>

          {/* Token Information & Pricing */}
          <div className="space-y-8">
            {/* Current Pricing */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Current Pricing</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">${tokenPriceUSD}</div>
                  <div className="text-gray-300 text-xs">USD per BMXC</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{(tokenPriceUSD / solPriceUSD).toFixed(6)}</div>
                  <div className="text-gray-300 text-xs">SOL per BMXC</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">{tokenPriceUSD}</div>
                  <div className="text-gray-300 text-xs">USDT per BMXC</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400 mb-1">Next Phase: $0.25</div>
                <div className="text-gray-300 text-sm">Days 8-48</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-3">Price Schedule</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Phase 1 - Days 1-7 (Current):</span>
                    <span className="text-orange-400 font-semibold">$0.16</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Phase 2 - Days 8-48:</span>
                    <span className="text-yellow-400">$0.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Phase 3 - Days 49-70:</span>
                    <span className="text-blue-400">$0.34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Post-Presale Launch:</span>
                    <span className="text-cyan-400 font-semibold">TBA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Presale Progress */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Presale Progress</h3>
              
              <div className="mb-6">
                <div className="flex justify-between text-white mb-2">
                  <span>Sold</span>
                  <span>142.5M / 400M BMXC</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-4">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-4 rounded-full" style={{ width: '35.6%' }}></div>
                </div>
                <div className="text-center text-gray-300 text-sm mt-2">35.6% Complete</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">$6.4M</div>
                  <div className="text-gray-300 text-sm">Raised</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">8,750+</div>
                  <div className="text-gray-300 text-sm">Investors</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-xl font-bold text-white">Security Notice</h3>
          </div>
          <div className="text-gray-300 space-y-2">
            <p>• Always verify you're on the official BloomXChain website before making any purchases</p>
            <p>• Never share your private keys or seed phrases with anyone</p>
            <p>• Only use official Phantom wallet from phantom.app</p>
            <p>• Double-check transaction details before confirming</p>
            <p>• Contact our support team if you encounter any issues</p>
          </div>
        </div>
      </div>
    </div>
  );
} 