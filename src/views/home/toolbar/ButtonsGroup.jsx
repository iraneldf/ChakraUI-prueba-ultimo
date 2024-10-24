import React from 'react'
import {Box, Flex, Group, Icon, IconButton} from '@chakra-ui/react'
import {Button} from "@/components/ui/button";
import Image from "next/image";

const ButtonsGroup = () => {
    return (
        <Group attached>
            <Button bg={'#EDF2F7'} color={'black'} borderRadius={"16px"}>
                <Image src={'/assets/icons/left-icon.png'} alt={'Icono'} width={16} height={16}/>
            </Button>
            <Button bg={'#FFFFFF'} variant="subtle" borderWidth={'1px'} borderRadius={"16px"}>
                <Image src={'/assets/icons/right-icon.png'} alt={'Icono'} width={16} height={16}/>
            </Button>
        </Group>
    )
}

export default ButtonsGroup
