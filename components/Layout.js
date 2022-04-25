import { useRef } from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	IconButton,
	Image,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';
import { HamburgerIcon } from '@chakra-ui/icons';

import navList from '../lib/navList';
import Drawer from './Drawer';

const Layout = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const menuRef = useRef();

	return (
		<>
			<Flex
				p={4}
				maxW='1200px'
				mx='auto'
				justifyContent='space-between'
				alignItems='center'
				pos='sticky'
				top={0}
				bg={useColorModeValue('white', '#1a202c')}
				zIndex='banner'
			>
				<Flex gap='1rem' align='center'>
					<IconButton
						aria-label='Menu button'
						icon={<HamburgerIcon />}
						bg='none'
						onClick={onOpen}
						display={['inherit', 'none']}
					/>
					<Drawer isOpen={isOpen} onClose={onClose} />
					<Image src='/images/icon-PNG.png' boxSize={['10%', '5%']} />
				</Flex>
				{/* <Box w='50%' h='50px'></Box> */}
				<Flex gap='1rem'>
					<ButtonGroup display={['none', 'inherit']}>
						{navList.map((link, i) => (
							<Button
								key={i}
								aria-label={link.title}
								variant='ghost'
								as='a'
								href={link.href}
								rounded={0}
							>
								{link.title}
							</Button>
						))}
					</ButtonGroup>
					<DarkModeSwitch />
				</Flex>
			</Flex>
			<Flex maxW='1200px' flexDirection='column' mx='auto'>
				{children}
			</Flex>
		</>
	);
};

export default Layout;
