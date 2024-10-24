import {Provider} from "@/components/ui/provider"

import {
    Box, Flex,
} from '@chakra-ui/react';

import NavBarComponent from "@/components/NavBar/NavBarComponent";
import MySideBar from "@/components/SideBar/SideBarComponent";

import {Poppins} from 'next/font/google';
import FooterComponent from "@/components/Footer/Footer";

const poppins = Poppins({
    subsets: ['latin'], // Puedes añadir otros subsets si lo necesitas
    weight: ['400', '600'], // Especifica los pesos que usarás
});

// const lato = Lato({
//     subsets: ['latin'], // Puedes añadir otros subsets si lo necesitas
//     weight: ['400', '700'], // Especifica los pesos que usarás
// });

export default function RootLayout({children}) {
    // todo importar la fuente Poppins

    return (<html lang='es' suppressHydrationWarning>
    <body className={`${poppins.className}`}>
    <Provider>
        <Flex direction="row" minHeight="100vh" alignItems="stretch">
            {/*    /!* Barra de navegacion lateral *!/*/}
            <MySideBar/>

            {/*    /!* Main Content *!/*/}
            <Box bg={'black'}  flexGrow={'1'} >
                {/*        /!* Barra navegacion superior *!/*/}
                <NavBarComponent/>

                <Box bg={"#F9FAFB"} flex="1" borderTopLeftRadius={"50px"} width={"100%"}>
                    {children}
                </Box>

                <FooterComponent/>
            </Box>
        </Flex>
    </Provider>
    </body>
    </html>);
}
