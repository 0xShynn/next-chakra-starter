import {
  Box,
  Fade,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoCloseSharp, IoLogoVue, IoMenuSharp } from 'react-icons/io5'

import { globals } from '../../constants'

import MaxContainer from './MaxContainer'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const NavLink = ({ to, label }) => (
    <NextLink passHref href={to}>
      <Link p="5" bg="red.200" w="full" textAlign="center">
        {label}
      </Link>
    </NextLink>
  )

  const displayNavLinks = () =>
    globals.navLinks.map((link, index) => (
      <NavLink key={index} to={link.href} label={link.label} />
    ))

  return (
    <Box w="full" bg="red.100">
      <MaxContainer>
        <Stack direction="row" justify="space-between" align="center">
          {/* Logo */}
          <NextLink passHref href="/">
            <Link display="inline-flex">
              <Icon
                as={IoLogoVue}
                boxSize="36px"
                color="blue"
                _hover={{ color: 'red' }}
              />
            </Link>
          </NextLink>

          {/* Menu (desktop) */}
          <HStack display={{ base: 'none', md: 'flex' }}>
            {displayNavLinks()}
          </HStack>

          {/* Menu icon button (mobile/tablet) */}
          <IconButton
            colorScheme="red"
            aria-label="Open Menu"
            display={{ base: 'block', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            icon={
              isOpen ? <Icon as={IoCloseSharp} /> : <Icon as={IoMenuSharp} />
            }
            zIndex="overlay"
          />
        </Stack>

        {/* Menu (mobile/tablet) */}
        {isOpen ? (
          <Fade in={isOpen}>
            <Box
              pos="absolute"
              bg="rgba(0,0,0, 0.3)"
              display={{ base: 'block', md: 'none' }}
              w="full"
              h="100vh"
              left="0"
              // Change this value according to the height of the header
              top="40px"
              onClick={isOpen ? onClose : onOpen}
            >
              <VStack
                bg="white"
                justify="flex-end"
                zIndex={'overlay'}
                spacing="2"
                px="2"
                py="2"
              >
                {/* Navigation links from the globals constant file */}
                {displayNavLinks()}
              </VStack>
            </Box>
          </Fade>
        ) : null}
      </MaxContainer>
    </Box>
  )
}

export default Header
