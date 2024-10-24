import {Provider} from "@/components/ui/provider"

import {
    Box, Flex,
} from '@chakra-ui/react';

import NavBarComponent from "@/components/NavBar/NavBarComponent";
import MySideBar from "@/components/SideBar/SideBarComponent";

import {Lato, Poppins} from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'], // Puedes añadir otros subsets si lo necesitas
    weight: ['400', '600'], // Especifica los pesos que usarás
});

const lato = Lato({
    subsets: ['latin'], // Puedes añadir otros subsets si lo necesitas
    weight: ['400', '700'], // Especifica los pesos que usarás
});

export default function RootLayout({children}) {
    // todo importar la fuente Poppins

    return (<html lang='es' suppressHydrationWarning>
    <body className={`${poppins.className}`}>
    <Provider>
        <Flex direction="row" minHeight="91vh">
            {/*    /!* Barra de navegacion lateral *!/*/}
            <MySideBar/>

            {/*    /!* Main Content *!/*/}
            <Box flex="1">
                {/*        /!* Barra navegacion superior *!/*/}
                <NavBarComponent/>

                <Box bg={"#F9FAFB"} borderTopLeftRadius={"50px"} height={"91vh"} width={"100%"}>
                    {children}
                </Box>
            </Box>
        </Flex>
    </Provider>
    </body>
    </html>);
}
