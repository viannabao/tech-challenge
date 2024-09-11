"use client";

import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserInfoModal from "./UserInfoModal";
import { EditIcon } from "@chakra-ui/icons";

const AppBar = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setModalOpen] = useState(false);

  // Open the modal automatically if username or job title is missing
  useEffect(() => {
    if (!user.username || !user.jobTitle) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [user]);

  // Manually open the modal when clicking on the username/job title
  const handleTextClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="white"
        py={4}
        px={8}
        justify="space-between"
        align="center"
        aria-label="Main Navigation"
      >
        <Text fontSize="xl" fontWeight="bold" role="heading" aria-level={1}>
          My Application
        </Text>

        {user.username && user.jobTitle && (
          <Box
            textAlign="right"
            onClick={handleTextClick}
            cursor="pointer"
            display="flex"
            alignItems="center"
          >
            <Text fontSize="md" aria-live="polite">
              {user.username} | {user.jobTitle}
            </Text>
            {/* Add Edit Icon */}
            <Icon as={EditIcon} boxSize={5} ml={2} />
          </Box>
        )}
      </Flex>
      <UserInfoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default AppBar;
