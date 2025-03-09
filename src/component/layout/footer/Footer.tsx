'use client'
import Link from 'next/link'
import scss from './Footer.module.scss'
import { IoLogoYoutube } from 'react-icons/io'
import { FaVk } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
	return (
		<section className={scss.Footer}>
			<div className='container'>
				<div className={scss.content}>
					<h2>TORK A.S</h2>
					<div className={scss.nav}>
						<Link href='/'>О комплексе</Link>
						<Link href='/'>Район</Link>
						<Link href='/'>Каталог квартир</Link>
						<Link href='/'>Ипотека</Link>
						<Link href='/'>Контакты</Link>
					</div>
					<div className={scss.nav__second}>
						<Link href='/'>О комплексе</Link>
						<Link href='/'>Район</Link>
						<Link href='/'>Каталог квартир</Link>
						<Link href='/'>Ипотека</Link>
						<Link href='/'>Контакты</Link>
					</div>
					<div className={scss.address}>
						<p>Адрес: Наб. реки Фонтанки 10-15</p>
						<p>Телефон: 8 (812) 123-45-67</p>
						<p>E-mail: vip@lofthouse.ru</p>
						<div className={scss.links}>
							<Link href='/'>
								<IoLogoYoutube />
							</Link>
							<Link href='/'>
								<FaVk />
							</Link>
							<Link href='/'>
								<FaFacebookF />
							</Link>
							<Link href='/'>
								<FaInstagram />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
