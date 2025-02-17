import { AddressDisplay } from "../base/AddressDisplay";
import BaseButton from "../base/BaseButton";
import { ChainIcon } from "../base/ChainIcon";
import Text from "../base/Text";
import { WalletIcon } from "../base/WalletIcon";
import { useWallet, useBalance, useChain } from "@thirdweb-dev/react-core";
import { StyleSheet } from "react-native";
import { LocalWallet } from "@thirdweb-dev/wallets";
import Box from "../base/Box";
import { ConnectWalletDetailsModal } from "./ConnectWalletDetailsModal";
import { useState } from "react";

export type ConnectWalletDetailsProps = {
  address?: string;
  detailsButton?: React.FC<{ onPress: () => void }>;
  extraRows?: React.FC;
};

export const WalletDetailsButton = ({
  address,
  detailsButton,
  extraRows,
}: ConnectWalletDetailsProps) => {
  const activeWallet = useWallet();
  const chain = useChain();
  const balanceQuery = useBalance();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onPress = () => {
    // setModalState({
    //   view: "WalletDetails",
    //   data: {
    //     address: address,
    //   },
    //   isOpen: true,
    //   isSheet: true,
    //   caller: "ConnectWalletDetails",
    // });
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <ConnectWalletDetailsModal
        isVisible={isModalVisible}
        onClosePress={onPress}
        extraRows={extraRows}
        address={address}
      />
      {detailsButton ? (
        detailsButton({ onPress })
      ) : (
        <BaseButton
          backgroundColor="background"
          borderColor="border"
          style={styles.walletDetails}
          onPress={onPress}
        >
          <Box flex={1} flexDirection="row" justifyContent="space-between">
            <ChainIcon size={32} chainIconUrl={chain?.icon?.url} />
            <Box justifyContent="center" alignItems="flex-start">
              <Text variant="bodySmall">
                {balanceQuery.data
                  ? Number(balanceQuery.data.displayValue).toFixed(3)
                  : ""}{" "}
                {balanceQuery.data?.symbol}
              </Text>
              {activeWallet?.walletId === LocalWallet.id ? (
                <Text variant="error">Guest</Text>
              ) : (
                <AddressDisplay
                  variant="bodySmallSecondary"
                  address={address}
                />
              )}
            </Box>
            <WalletIcon
              size={32}
              iconUri={activeWallet?.getMeta().iconURL || ""}
            />
          </Box>
        </BaseButton>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  walletDetails: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 12,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    minWidth: 200,
  },
});
