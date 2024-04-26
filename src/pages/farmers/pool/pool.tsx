import {
  Box,
  Container,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { IFarmersPoolItem } from "@/components/farmersPool/types/IFarmersPoolItem"
import BackButton from "@/components/ui/backButton/backButton"
import { farmersPools } from "@/mocks/mockData"

import History from "./tabs/history"
import OpenPosition from "./tabs/openPosition"
import Positions from "./tabs/positions"

const FarmersPool = () => {
  const params = useParams()
  const [item, setItem] = useState<IFarmersPoolItem | undefined>(undefined)

  useEffect(() => {
    setTimeout(() => {
      setItem(farmersPools.find((item) => item.id === Number(params.id)))
    }, 1000)
  }, [])

  return (
    <Container maxW={"container.xl"}>
      <Box mt={"34px"}>
        <BackButton title="Back to pools"></BackButton>
      </Box>
      <Tabs
        variant={"unstyled"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <TabList w={"525px"} p={0.5} bg={"hintBg"} borderRadius={"12px"}>
          {["Open position", "Positions", "History"].map((item) => (
            <Tab
              fontWeight={600}
              _selected={{ bg: "secondaryBg" }}
              borderRadius={"10px"}
              flex={"1"}
            >
              {item}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            {item ? <OpenPosition item={item} /> : <Spinner></Spinner>}
          </TabPanel>
          <TabPanel>
            <Positions />
          </TabPanel>
          <TabPanel>
            <History />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default FarmersPool
