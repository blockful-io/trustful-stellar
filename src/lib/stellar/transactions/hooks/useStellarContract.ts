import { rpc, TransactionBuilder, BASE_FEE, Networks, Operation, Address } from "@stellar/stellar-sdk";
import albedo from "@albedo-link/intent";

interface UseStellarContractProps {
    contractId: string;
    rpcUrl: string;
    networkType: "TESTNET" | "PUBLIC";
}

export const useStellarContract = ({ contractId, rpcUrl, networkType = "TESTNET" }: UseStellarContractProps) => {
    const executeContractFunction = async (functionName: string) => {
        try {
            const { pubkey } = await albedo.publicKey({ require_existing: true });


            // Load user account via RPC
            const server = new rpc.Server(rpcUrl, { allowHttp: true });
            const account = await server.getAccount(pubkey);

            // Create and prepare transaction
            const transaction = new TransactionBuilder(account, {
                fee: BASE_FEE,
                networkPassphrase: networkType === "TESTNET" ? Networks.TESTNET : Networks.PUBLIC
            })
                .addOperation(
                    Operation.invokeContractFunction({
                        function: functionName,
                        contract: contractId,
                        args: [
                            new Address(pubkey).toScVal(),
                        ]
                    })
                )
                .setTimeout(30)
                .build();

            const preparedTransaction = await server.prepareTransaction(transaction);
            const transactionXDR = preparedTransaction.toXDR();

            // Sign with Albedo and submit
            const signResult = await albedo.tx({
                xdr: transactionXDR,
                network: networkType.toLowerCase(),
                submit: true
            });

            return { success: true, txHash: signResult.tx_hash };
        } catch (error: any) {
            console.error('Contract execution error:', error);
            return {
                success: false,
                error: error.message || "Failed to process transaction"
            };
        }
    };

    return {
        executeContractFunction,
        addUser: () => executeContractFunction('add_user'),
        removeUser: () => executeContractFunction('remove_user'),
    };
}; 