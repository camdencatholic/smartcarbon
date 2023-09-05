import { name } from '@typescript/constants';
import Link from 'next/link';
import Icon from './icon';
import { FontDisplay } from '@/typescript/fonts';

const Navbar = (): React.JSX.Element => (
	<nav className='bg-gradient-to-r text-5xl p-10 no-underline from-theme-primary to-theme-quaternary text-white text-center'>
		<Link href={'/'} className={`font-bold no-underline text-center bg-transparent text-white ${FontDisplay.className}`}>
			<Icon name="globe-americas" /> {name.toLocaleLowerCase()}
		</Link>
	</nav>
);

export default Navbar;
