import { Box, Container, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { IFarmersPoolRow } from "@/components/farmersPool/types/IFarmersPoolRow"
import BackButton from "@/components/ui/backButton/backButton"
import { farmersPools } from "@/mocks/mockData"

import History from "./tabs/history"
import OpenPosition from "./tabs/openPosition"
import Positions from "./tabs/positions"

const FarmersPool = () => {
  const params = useParams()
  const [item, setItem] = useState<IFarmersPoolRow | undefined>(undefined)

  useEffect(() => {
    setTimeout(() => {
      setItem(farmersPools.find((item) => item.id === Number(params.id)))
    }, 1000)
  }, [])

  return (
    <Container maxW={"container.xl"}>
      <Box mt={8} mb={6}>
        <BackButton title="Back to pools"></BackButton>
      </Box>
      <Tabs variant={"unstyled"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <TabList w={["100%", "525px"]} p={0.5} bg={"hintBg"} borderRadius={"12px"}>
          {["Open position", "Positions", "History"].map((item) => (
            <Tab key={item} fontSize={[12, 16]} fontWeight={600} _selected={{ bg: "secondaryBg" }} borderRadius={"10px"} flex={"1"}>
              {item}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel display={"flex"} flexDirection={"column"} alignItems={"center"} px={[0, 4]}>
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
