'use client'
import {
    Badge,
    Box, Flex, HStack, Table, Text, Textarea, VStack,
} from '@chakra-ui/react'
import ToolBar from '@/views/home/toolbar'
import TableSeccion from '@/views/home/table-seccion'
import Tabla from "@/views/home/table-seccion/Tabla";
import Assignments from "@/views/home/assignments";
import Title from "@/components/title";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import InfoDetails from "@/views/details/InfoDetails";


export default function Home() {

    const [textAreavalue, setTextAreavalue] = useState('Calle 5 e/ 25 y 36 Siboney Playa #4578')
    return (
        <Box
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            gap={'20px'}
            alignItems={'center'}
            justifyContent='start'
            padding={'60px'}
        >

            <InfoDetails/>

            <Flex w={'100%'} gap={'40px'} justify="space-between">
                <VStack align={'start'} w={'100%'} borderRadius={'20px'} boxShadow={'0px 5px 80px 0px #7272720D'}
                        bg={'#FFFFFF'} py={'30px'}
                        px={'35px'}>


                    <Title subTitle={'Order Products'} title={'Products'}/>

                    <Box py={'10px'} w={'100%'}>
                        <Table.Root size="md" interactive>
                            <Table.Header>

                                <Table.Row>
                                    <Table.ColumnHeader letterSpacing="0.05em" fontSize={"12px"} fontWeight={"700"}
                                                        color={"#4A5568"}>NOMBRE</Table.ColumnHeader>
                                    <Table.ColumnHeader letterSpacing="0.05em" fontSize={"12px"} fontWeight={"700"}
                                                        color={"#4A5568"}>Precio</Table.ColumnHeader>

                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {items.map((item, index) => (

                                    <Table.Row lineHeight={'20px'} color={'#718096'}
                                               bg={index % 2 === 0 ? '#EDF2F7' : 'white'} key={item.id}>
                                        <Table.Cell whiteSpace="wrap">{item.nombre}</Table.Cell>
                                        <Table.Cell>{item.precio}</Table.Cell>
                                    </Table.Row>))}
                            </Table.Body>
                        </Table.Root>
                    </Box>
                </VStack>

                <VStack align={'start'} w={'100%'} borderRadius={'20px'} boxShadow={'0px 5px 80px 0px #7272720D'}
                        bg={'#FFFFFF'} py={'30px'}
                        px={'35px'}>
                    <HStack w={'100%'} justify="space-between">
                        <Title subTitle={'Status Orders'} title={'Status'}/>
                        <Button bg={'#FF7500'} borderRadius={'16px'} w={'147px'}>Change Status</Button>
                    </HStack>

                    <Box py={'10px'} w={'100%'}>
                        <Table.Root size="md" interactive>
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader letterSpacing="0.05em" fontSize={"12px"} fontWeight={"700"}
                                                        color={"#4A5568"}>FECHA</Table.ColumnHeader>
                                    <Table.ColumnHeader letterSpacing="0.05em" fontSize={"12px"} fontWeight={"700"}
                                                        color={"#4A5568"}>Status</Table.ColumnHeader>

                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {items2.map((item, index) => (

                                    <Table.Row lineHeight={'20px'} color={'#718096'}
                                               bg={index % 2 === 0 ? '#EDF2F7' : 'white'} key={item.id}>
                                        <Table.Cell whiteSpace="wrap">{item.fecha}</Table.Cell>
                                        <Table.Cell> <Badge fontWeight={item.status.weight} color={item.status.color} py={item.status.py}
                                                            bg={item.status.bg}>{item.status.text}</Badge> </Table.Cell>
                                    </Table.Row>))}
                            </Table.Body>
                        </Table.Root>
                    </Box>

                </VStack>
            </Flex>
        </Box>)
}

const items = [{
    id: 1,
    nombre: 'OLLA REINA ROYAL 6L',
    precio: "$75.00"
}, {
    id: 2,
    nombre: 'LICUADORA MILEXUS CON JARRA DE VIDRIO 550W ',
    precio: "$45.00"
}]

const items2 = [{
    id: 1,
    fecha: '16/10/2024 10:45:20',
    status: {
        text: 'Packaging',
        bg: '#FEEBCB',
        py: '4px',
        color: '#744210',
        weight:'600'
    }
}, {
    id: 2,
    fecha: '15/10/2024 08:30:13',
    status: {
        text: "PENDING",
        bg: '#EDF2F7',
        py: '4px',
        color: '#1A202C',
        weight:'600'
    }
}]

