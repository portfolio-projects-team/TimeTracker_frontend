

import React from 'react';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <Flex h="100vh" bg="white">
            <Box w="20%" p={4} bg="white" borderRight="1px solid #ccc"> {/* Add border to the right side */}
                {/* TIK TOPIA Logo */}
                <Flex align="center" className="logo">
                    <Heading size="lg" fontWeight="bold" fontFamily="Rubik Mono One" color="black">
                        TIK
                    </Heading>
                    <Heading size="lg" fontWeight="bold" fontFamily="Rubik Mono One" color="#6F2DA8">
                        TOPIA
                    </Heading>
                </Flex>

                {/* Navigation Links */}
                <Flex mt={4} direction="column" className="navLinks">
                    <Link mb={2} fontSize="xl" className="navLink">
                        Projects
                    </Link>
                    <Link mb={2} fontSize="xl" className="navLink">
                        Timesheets
                    </Link>
                    <Link mb={2} fontSize="xl" className="navLink">
                        ToDo
                    </Link>
                    <Link mb={2} fontSize="xl" className="navLink">
                        Overall Progress
                    </Link>
                </Flex>

                {/* Logout Link */}
                <Box mt="auto">
                    <Text fontSize="xl" className="logout">
                        Log Out
                    </Text>
                </Box>
            </Box>

            <Box flex="1" p={4}>
                {/* Your main content goes here */}
            </Box>
        </Flex>
    );
};

export default Dashboard;