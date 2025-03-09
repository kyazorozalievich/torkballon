'use client'
import Link from 'next/link'
import scss from './Header.module.scss'

const Header = () => {
	return (
		<header className={scss.Header}>
			<div className='container'>
				<div className={scss.content}>
					<h1>TORKAŞ</h1>
					<div className={scss.nav}>
						<Link href='/'>Главная</Link>
						<Link href='/'>Оборудование</Link>
						<Link href='/'>О компании</Link>
						<Link href='/contact'>Контакты</Link>
					</div>
					<select>
						<option value='ru'>Русский</option>
						<option value='en'>English</option>
						<option value='tr'>Turkey</option>
					</select>
				</div>
			</div>
		</header>
	)
}

export default Header
