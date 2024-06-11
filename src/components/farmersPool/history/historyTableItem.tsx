import { Badge, Flex, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { IHistoryItem } from "../types/IHistoryItem"

interface HistoryTableItemProps {
  item: IHistoryItem
}

const HistoryTableItem = ({ item }: HistoryTableItemProps) => {
  return (
    <Link to={`/farmers/pool/${item.id}`} key={item.id}>
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
        <Flex alignItems={"center"} flexBasis={"14.28%"}>
          {item.symbol}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"14.28%"}>
          {item.createdAt}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"14.28%"}>
          {item.quantity}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"14.28%"}>
          {item.notionalValue}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"14.28%"}>
          {item.price}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"14.28%"}>
          {item.fee}
        </Flex>
        <Flex alignItems={"center"} flexBasis={"14.28%"}>
          <Badge
            flex={1}
            textAlign={"center"}
            fontWeight={500}
            textTransform={"capitalize"}
            variant={"outline"}
            colorScheme={
              item.status === "executed"
                ? "green"
                : item.status === "partiallyExecuted"
                ? "blue"
                : "red"
            }
          >
            {item.status === "executed"
              ? "Executed"
              : item.status === "partiallyExecuted"
              ? "Partially Executed"
              : "Cancelled"}
          </Badge>
        </Flex>
      </Stack>
    </Link>
  )
}

export default HistoryTableItem
