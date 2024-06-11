import { Button, Flex, Image, Stack } from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"

import { IPosition } from "../types/IPosition"
import { useTranslation } from "react-i18next"
import stonfiImg from "@assets/png/ston.fi.png"
import dedustImg from "@assets/png/dedust.io.png"

interface PositionsTableItemProps {
  item: IPosition
}

const PositionsTableItem = ({ item }: PositionsTableItemProps) => {
  const { t } = useTranslation("positions")
  const params = useParams()

  return (
    <Link to={`/farmers/pool/${params.id}/${item.id}`} key={item.id}>
      <Stack
        cursor={"pointer"}
        direction={["column", "row"]}
        borderRadius={"12px"}
        borderWidth={"1px"}
        borderColor={"borderColor"}
        background={"secondaryBg"}
        w={"100%"}
        alignItems={"center"}
        py={4}
        px={6}
        mb={2}
        spacing={2}
      >
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.token}/{item.tokenSecond}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          <Image src={item.dex === "ston.fi" ? stonfiImg : dedustImg} borderRadius={"99px"} w={5} h={5} mr={1} />
          {item.dex}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.entryPrice}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.liquidation}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.netValue}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"12.5%"}>
          {item.pnl}
        </Flex>
        <Flex flexBasis={"15%"}>
          <Button size={"sm"} fontSize={"12px"} flexShrink={0} w={"78px"} mr={3}>
            {t("add")}
          </Button>
          <Button size={"sm"} fontSize={"12px"} flexShrink={0} w={"120px"} variant={"outline"}>
            {t("closePosition")}
          </Button>
        </Flex>
      </Stack>
    </Link>
  )
}

export default PositionsTableItem
