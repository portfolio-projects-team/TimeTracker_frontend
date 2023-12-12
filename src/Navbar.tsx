import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">Tik Topia</Heading>
            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">m</Box>
                <Text>Shimen Afshar</Text>
                <Button style={{ backgroundColor: "#6F2DA8", color: "white" }}>
                    Logout
                </Button>
            </HStack>
        </Flex>

    )
}
