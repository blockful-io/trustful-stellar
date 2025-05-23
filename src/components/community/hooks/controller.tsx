'use client';

import { useStellarContract } from '@/lib/stellar/transactions/hooks/useStellarContract';
import { useStellarContractBadge } from '@/lib/stellar/transactions/hooks/useStellarContractBadge';
import { useStellarContractManager } from '@/lib/stellar/transactions/hooks/useStellarContractManager';
import { useStellarContractRemoveBadge } from '@/lib/stellar/transactions/hooks/useStellarContractRemoveBadge';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function useCommunitiesController() {
  const [inputText, setInputText] = useState('');
  const router = useRouter();
  const { communityAddress } = router.query;

  const communityAddressFormatted =
    typeof communityAddress === 'string' ? communityAddress.toUpperCase() : '';

  const stellarContractJoinCommunities = useStellarContract({
    contractId: communityAddressFormatted,
    rpcUrl: process.env.NEXT_PUBLIC_RPCURL || 'https://soroban-testnet.stellar.org',
    networkType: (process.env.NEXT_PUBLIC_NETWORK_TYPE || 'TESTNET') as any,
  });

  const stellarContractManagers = useStellarContractManager({
    contractId: communityAddressFormatted,
    rpcUrl: process.env.NEXT_PUBLIC_RPCURL || 'https://soroban-testnet.stellar.org',
    networkType: (process.env.NEXT_PUBLIC_NETWORK_TYPE || 'TESTNET') as any,
  });

  const stellarContractBadges = useStellarContractBadge({
    contractId: communityAddressFormatted,
    rpcUrl: process.env.NEXT_PUBLIC_RPCURL || 'https://soroban-testnet.stellar.org',
    networkType: (process.env.NEXT_PUBLIC_NETWORK_TYPE || 'TESTNET') as any,
  });

  const stellarContractRemoveBadges = useStellarContractRemoveBadge({
    contractId: communityAddressFormatted,
    rpcUrl: process.env.NEXT_PUBLIC_RPCURL || 'https://soroban-testnet.stellar.org',
    networkType: (process.env.NEXT_PUBLIC_NETWORK_TYPE || 'TESTNET') as any,
  });

  return {
    inputText,
    setInputText,
    stellarContractJoinCommunities,
    stellarContractManagers,
    stellarContractBadges,
    stellarContractRemoveBadges,
  };
}
