'use client'
import scss from './Welcome.module.scss'
import { FaArrowRight } from 'react-icons/fa6'

const Welcome = () => {
	return (
		<section className={scss.Welcome}>
			<div className={scss.welcomeBg}>
				<div className='container'>
					<div className={scss.content}>
						<h1>
							КОМПАНИЯ <br />
							<span> TORKAŞ</span> <br /> ПРИВЕТСТВУЕТ ВАС !
						</h1>
						<p>
							Мы разрабатываем и производим высококачественное оборудование для
							наполнения газовых баллонов, обеспечивая безопасность,
							эффективность и удобство использования. Наши технологии
							соответствуют мировым стандартам и применяются в различных
							отраслях. Мы осуществляем доставку по всему миру, гарантируя
							надежность и долговечность нашей продукции. Современные
							технологии. Высокая надежность. Доставка по всему миру.
						</p>
						<button>
							Подробнее <FaArrowRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome
