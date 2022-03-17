import { Box } from '@chakra-ui/react'

import { globals } from '../../constants'

const MaxContainer = ({ children, ...rest }) => {
  return (
    <Box maxW={globals.maxWidth} mx="auto" {...rest}>
      {children}
    </Box>
  )
}

export default MaxContainer
