import {
  Badge,
  Box,
  Divider,
  Image,
  Spacer,
  Stack
} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

import { useStore } from "@/hooks/useStore"

import ToUsd from "../ui/toUsd/toUsd"
import StakingPoolTableCell from "./stakingPoolTableCell"
import { IStakingPool } from "./types/IStakingPool"

interface StakingPoolTableRowProps {
  item: IStakingPool
}

const StakingPoolTableRow = observer(({ item }: StakingPoolTableRowProps) => {
  const { fromNano } = useStore()

  return (
    <Link to={`/lending/pair/${item.descriptor.symbol}`}>
      <Stack
        cursor={"pointer"}
        direction={["column", "row"]}
        borderRadius={"12px"}
        borderWidth={"1px"}
        borderColor={"borderColor"}
        background={"secondaryBg"}
        w={"100%"}
        alignItems={["stretch", "center"]}
        py={4}
        px={6}
        mb={2}
        spacing={2}
      >
        <StakingPoolTableCell flexBasis={"33.3%"}>
          {item.descriptor.imgUrl && (
            <Image
              src={item.descriptor.imgUrl}
              borderRadius={"99px"}
              w={8}
              h={8}
              mr={3}
            />
          )}
          <Box>{item.descriptor.symbol}</Box>
          <Spacer hideFrom={"sm"} />
          <Badge hideFrom={"sm"} variant={"solid"}>
            APY {Number(fromNano(item.currentDerivs.apy)).toFixed(2)}%
          </Badge>
        </StakingPoolTableCell>
        <Divider hideFrom={"sm"} />
        <StakingPoolTableCell text={"APR 24h"}>{fromNano(item.currentDerivs.apr24)}%</StakingPoolTableCell>
        <Divider hideFrom={"sm"} />
        <StakingPoolTableCell justify="flex-end" text={"TVL"}>
          {item.currentDerivs && (
            <ToUsd
              symbol={"TON"}
              value={Number(fromNano(item.currentDerivs.tvl))}
            />
          )}
        </StakingPoolTableCell>
        <Divider hideFrom={"sm"} />
        <StakingPoolTableCell justify="flex-end" text={"Earned"}>
          {item.staker.totalEarnings && (
            <ToUsd
              symbol={"TON"}
              value={Number(fromNano(item.staker.totalEarnings))}
            />
          )}
        </StakingPoolTableCell>
        <Divider hideFrom={"sm"} />
        <StakingPoolTableCell justify="flex-end" text={"Staked"}>
          {item.staker.currentDeposits && (
            <ToUsd
              symbol={"TON"}
              value={Number(fromNano(item.staker.currentDeposits))}
            />
          )}
        </StakingPoolTableCell>
      </Stack>
    </Link>
  )
})

export default StakingPoolTableRow
