import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Button, Image, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaSolarPanel, FaPumpSoap, FaLeaf, FaSearchLocation, FaHeart } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Embrace the Past, Empower the Future
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover affordable historical homes ready for a sustainable makeover.
        </Text>
        <HStack spacing={4} justify="center">
          <Button leftIcon={<FaSearchLocation />} colorScheme="teal">
            Find Properties
          </Button>
          <Button leftIcon={<FaHeart />} colorScheme="pink" variant="outline">
            Favorites
          </Button>
        </HStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} my={16}>
        <Box bg={cardBg} borderRadius="lg" p={6} boxShadow="md">
          <Image src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBmbGF0fGVufDB8fHx8MTcwOTc0ODcxN3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Heading size="md" my={2}>
            Charm of the 1920s
          </Heading>
          <Text mb={4}>Quaint flat with original woodwork, awaiting your personal touch.</Text>
          <Button colorScheme="green" leftIcon={<Icon as={FaSolarPanel} />}>
            Add Solar
          </Button>
        </Box>

        <Box bg={cardBg} borderRadius="lg" p={6} boxShadow="md">
          <Image src="https://images.unsplash.com/photo-1617546127542-eb0dd8bdd52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBob3VzZXxlbnwwfHx8fDE3MDk3NDg3MTd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Heading size="md" my={2}>
            Vintage Victorian
          </Heading>
          <Text mb={4}>A grand dame in need of love and a heat pump for modern comfort.</Text>
          <Button colorScheme="blue" leftIcon={<Icon as={FaPumpSoap} />}>
            Install Heat Pump
          </Button>
        </Box>

        <Box bg={cardBg} borderRadius="lg" p={6} boxShadow="md">
          <Image src="https://images.unsplash.com/photo-1594749647360-b6192bdb1f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBjb3R0YWdlfGVufDB8fHx8MTcwOTc0ODcxN3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Heading size="md" my={2}>
            Cottage Core
          </Heading>
          <Text mb={4}>Cozy cottage with charm to spare, perfect for eco insulation.</Text>
          <Button colorScheme="yellow" leftIcon={<Icon as={FaLeaf} />}>
            Eco Insulation
          </Button>
        </Box>
      </SimpleGrid>

      <VStack spacing={8} my={20}>
        <Heading as="h2" size="xl">
          Renovate with Sustainability in Mind
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Our mission is to preserve the character of old homes while integrating modern, eco-friendly technologies.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
