"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useState, useRef, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import React from "react";

const UserInfoModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { user, setUser } = useContext(UserContext);
  const [localUsername, setLocalUsername] = useState<string>("");
  const [localJobTitle, setLocalJobTitle] = useState<string>("");

  const initialRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (user.username && user.jobTitle) {
      setLocalUsername(user.username);
      setLocalJobTitle(user.jobTitle);
    }
  }, [user]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ username: localUsername, jobTitle: localJobTitle });
    onClose();

    // Move focus back to initial input after submission
    if (initialRef.current) {
      initialRef.current.focus();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      initialFocusRef={initialRef}
      closeOnOverlayClick={false}
      motionPreset="scale"
    >
      <ModalOverlay />
      <ModalContent
        role="dialog"
        aria-labelledby="user-info-modal-title"
        aria-describedby="user-info-modal-description"
      >
        <ModalHeader id="user-info-modal-title">Your Details</ModalHeader>
        {user.username && user.jobTitle && (
          <ModalCloseButton aria-label="Close Modal" />
        )}
        <form onSubmit={handleSubmit} aria-labelledby="user-info-form">
          <ModalBody id="user-info-modal-description">
            <FormControl isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                ref={initialRef}
                placeholder="Enter your username"
                value={localUsername}
                onChange={(e) => setLocalUsername(e.target.value)}
                mb={4}
                aria-required="true"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
              <Input
                id="jobTitle"
                placeholder="Enter your job title"
                value={localJobTitle}
                onChange={(e) => setLocalJobTitle(e.target.value)}
                mb={4}
                aria-required="true"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              isDisabled={!localUsername || !localJobTitle}
              aria-disabled={
                !localUsername || !localJobTitle ? "true" : "false"
              }
            >
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default UserInfoModal;
