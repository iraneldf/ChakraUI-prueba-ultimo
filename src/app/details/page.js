import {
    Box, Flex, HStack, Text, VStack,
} from '@chakra-ui/react'
import ToolBar from '@/views/home/toolbar'
import TableSeccion from '@/views/home/table-seccion'
import Tabla from "@/views/home/table-seccion/Tabla";
import Assignments from "@/views/home/assignments";
import Title from "@/components/title";


export default function Home() {
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

            {/*cuadro 1*/}
            <Flex gap={'40px'} w={'100%'} h={'521px'}>
                {/*cuadro 1.1*/}
                <Flex
                    direction={'column'}
                    gap={'5px'}
                    bg={'#FFFFFF'}
                    boxShadow={'0px 5px 80px 0px #7272720D'}
                    py={'30px'}
                    px={'35px'}
                    borderRadius='20px'
                    flex={'3'}>

                    <Title title='Order User' subTitle='User creating the order'/>

                    <Flex direction={'column'} gap={'0px'} py={'10px'}>

                        <VStack align='start' py={'10px'} gap={'10px'}>
                            <Text color={'#737791'}>Username</Text>
                            <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'} alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                 px={'16px'} borderRadius={'4px'}>rolando</Box>
                        </VStack>

                        <HStack justifyContent='space-between' gap={'20px'}>
                            <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                                <Text color={'#737791'}>Firstname</Text>
                                <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'} alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                     px={'16px'} borderRadius={'4px'}> Rolando </Box>
                            </VStack>

                            <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                                <Text color={'#737791'}>Lastname</Text>
                                <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'} alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                     px={'16px'} borderRadius={'4px'}>Fonseca
                                    Martines </Box>
                            </VStack>

                        </HStack>

                        <VStack align='start' py={'10px'} gap={'10px'}>
                            <Text color={'#737791'}>Identity Card</Text>
                            <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'} alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                 px={'16px'} borderRadius={'4px'}>8502034587</Box>
                        </VStack>

                        <HStack justifyContent='space-between' gap={'20px'}>
                            <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                                <Text color={'#737791'}>Phone Number</Text>
                                <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'} alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                     px={'16px'} borderRadius={'4px'}> +53 5 741 23 69 </Box>
                            </VStack>

                            <VStack align={'start'} w={'100%'} gap={'10px'} py={'10px'}>
                                <Text color={'#737791'}>Email</Text>
                                <Box color={'#2D3748'} lineHeight={'19.36px'} h={'40px'} display={'flex'} alignItems={'center'} w={'100%'} borderWidth={'1px'}
                                     px={'16px'} borderRadius={'4px'}>rolando@gmail.com</Box>
                            </VStack>

                        </HStack>


                    </Flex>

                </Flex>
                {/*cuadro 1.2*/}
                <Flex
                    direction={'column'}
                    gap={'5px'}
                    bg={'#FFFFFF'}
                    boxShadow={'0px 5px 80px 0px #7272720D'}
                    py={'30px'}
                    px={'35px'}
                    borderRadius='20px'
                    flex={'1'}>

                    <Title title='Shipping Address' subTitle='Order Shipping Address'/>

                    <Flex direction={'column'} gap={'0px'} py={'10px'}>
                        <Box>Username</Box>
                        <Box>Firstname Lastname</Box>
                        <Box>Identity Card</Box>
                        <Box>Phone Number Email</Box>
                    </Flex>

                </Flex>


            </Flex>

            {/*////////////////////////*/}

            <Flex gap={'40px'}>
                <Box>

                </Box>

                <Box>

                </Box>
            </Flex>
        </Box>)
}
