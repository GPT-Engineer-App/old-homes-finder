import React from "react";
import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";
import { FaHome, FaCalculator } from "react-icons/fa";

const Navigation = () => {
  return (
    <HStack spacing={4} justify="center" my={4}>
      <Button as={Link} to="/" leftIcon={<FaHome />} colorScheme="purple">
        Home
      </Button>
      <Button as={Link} to="/renovation-costs" leftIcon={<FaCalculator />} colorScheme="purple">
        Renovation Costs
      </Button>
      <Button as={Link} to="/solar-panels" leftIcon={<FaCalculator />} colorScheme="purple">
        Solar Panels
      </Button>
      <Button as={Link} to="/heat-pump" leftIcon={<FaCalculator />} colorScheme="purple">
        Heat Pump
      </Button>
    </HStack>
  );
};

export default Navigation;
