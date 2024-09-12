"use client";

import { Flex, Text, Icon, HStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserInfoModal from "./UserInfoModal";
import { EditIcon } from "@chakra-ui/icons";
import Link from "next/link";

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

  // Open the modal when clicking on the username/job title
  const handleTextClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Flex
        as="nav"
        bg="black"
        color="white"
        py={4}
        px={8}
        justify="center"
        align="center"
        position="relative"
        aria-label="Main Navigation"
      >
        <Link href="/" passHref>
          <Text
            fontSize="xl"
            fontWeight="bold"
            role="heading"
            aria-level={1}
            textAlign="center"
            flex={1}
            cursor="pointer"
          >
            Pokédex
          </Text>
        </Link>

        {user.username && user.jobTitle && (
          <HStack
            position="absolute"
            right={8}
            onClick={handleTextClick}
            cursor="pointer"
            spacing={2}
            tabIndex={0}
            aria-label={`Edit user information for ${user.username}`}
            role="button"
            _focus={{ boxShadow: "outline" }}
          >
            <Text fontSize="md">
              {user.username} | {user.jobTitle}
            </Text>
            <Icon as={EditIcon} boxSize={5} />
          </HStack>
        )}
      </Flex>

      <UserInfoModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default AppBar;
