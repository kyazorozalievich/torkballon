import { FC, ReactNode } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import scss from './Layout.module.scss'

interface ILayoutSite {
	children: ReactNode
}

const LayoutSite: FC<ILayoutSite> = ({ children }) => {
	return (
		<div className={scss.LayoutSite}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default LayoutSite
