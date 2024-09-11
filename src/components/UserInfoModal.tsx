'use client';

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
} from '@chakra-ui/react';
import { useState, useRef, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import React from 'react';

const UserInfoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { user, setUser } = useContext(UserContext);
  const [localUsername, setLocalUsername] = useState<string>(user.username || '');
  const [localJobTitle, setLocalJobTitle] = useState<string>(user.jobTitle || '');

  const initialRef = useRef<HTMLInputElement | null>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ username: localUsername, jobTitle: localJobTitle });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered initialFocusRef={initialRef} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter Your Details</ModalHeader>
        {user.username && user.jobTitle && <ModalCloseButton />}
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Input
              ref={initialRef}
              placeholder="Username"
              value={localUsername}
              onChange={(e) => setLocalUsername(e.target.value)}
              mb={4}
            />
            <Input
              placeholder="Job Title"
              value={localJobTitle}
              onChange={(e) => setLocalJobTitle(e.target.value)}
              mb={4}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              type="submit"
              isDisabled={!localUsername || !localJobTitle}
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