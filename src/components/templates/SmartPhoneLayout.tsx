import React from 'react'
import Container from 'components/layouts/Container'
import { FCProps } from 'types/Props'

const SmartPhoneLayout: React.FC<FCProps> = ({ children }) => {
    return (
        <>
            <Container>{children}</Container>
        </>
    )
}

export default SmartPhoneLayout
