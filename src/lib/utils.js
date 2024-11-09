import { Chain, WalletOption } from "@swapkit/helpers";
import { createSwapKit } from "@swapkit/sdk";

const swapKitClient = createSwapKit({
  config: {
    stagenet: false,
  },
});

export const connectMetamask = () => {
  return swapKitClient.connectEVMWallet(
    [Chain.Ethereum],
    WalletOption.METAMASK
  );
};
