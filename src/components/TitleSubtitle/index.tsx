import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

export interface iTitleSubtitle {
  title: string
  subtitle: string
}

export const TitleSubtitle: React.FC<iTitleSubtitle> = ({
  title,
  subtitle,
}) => {
  return (
    <VStack>
      <Box pb="4px" textStyle="smallTitle" color="brand.primary.pure">
        {title}
      </Box>
      <Box pb="4px" textStyle="description">
        {subtitle}
      </Box>
    </VStack>
  )
}
