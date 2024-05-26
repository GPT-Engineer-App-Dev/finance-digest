import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#FDF3E7"> {/* Updated background color */}
      {/* Navigation Bar */}
      <Flex as="nav" bg="#FDF3E7" p={4} mb={4} justifyContent="space-between" wrap="wrap"> {/* Updated background color */}
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mb={8}>
        {/* Headline Article */}
        <Box flex="3" p={4}>
          <Heading as="h1" size="xl" mb={4}>Headline Article</Heading>
          <Text fontSize="lg" mb={4}>
            This is the main headline article. It should be engaging and provide a summary of the most important news.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.50" p={4} ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="md" mb={4}>Trending Topics</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">Topic 1</Link>
            <Link href="#">Topic 2</Link>
            <Link href="#">Topic 3</Link>
            <Link href="#">Topic 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Smaller Articles */}
      <VStack spacing={8} mb={8}>
        <Box>
          <Heading as="h2" size="lg" mb={2}>Smaller Article 1</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={2}>Smaller Article 2</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={2}>Smaller Article 3</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="#FDF3E7" p={4} mt={8}> {/* Updated background color */}
        <Flex justifyContent="space-between" wrap="wrap">
          <HStack spacing={8}>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;