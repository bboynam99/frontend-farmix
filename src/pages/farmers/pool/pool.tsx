import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react"

import BackButton from "@/components/backButton/backButton"

const FarmersPool = () => {
  return (
    <Container
      maxW={"container.xl"}
      w={"100%"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box mt={"34px"} mb={"48px"}>
        <BackButton></BackButton>
      </Box>
      <Tabs variant={"unstyled"} w={"525px"} alignSelf={"center"}>
        <TabList p={0.5} bg={"hintBg"} borderRadius={"12px"}>
          <Tab
            _selected={{ bg: "secondaryBg" }}
            borderRadius={"10px"}
            flex={"1"}
          >
            Open position
          </Tab>
          <Tab
            _selected={{ bg: "secondaryBg" }}
            borderRadius={"10px"}
            flex={"1"}
          >
            Positions
          </Tab>
          <Tab
            _selected={{ bg: "secondaryBg" }}
            borderRadius={"10px"}
            flex={"1"}
          >
            History
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default FarmersPool
