import scss from './Equipment.module.scss'
import EquipmentOne from '../../assets/images/equipment1.jpeg'
import EquipmentTwo from '../../assets/images/equipment2.jpeg'
import EquipmentThree from '../../assets/images/equipment3.jpeg'
import EquipmentFour from '../../assets/images/equipment4.jpeg'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'

const Equipment = () => {
	return (
		<div className={scss.Equipment}>
			<div className='container'>
				<div className={scss.Equipments}>
					<h2>Наши Оборудования</h2>
					<div className={scss.Equipment__cards}>
						<div className={scss.Equipment__block}>
							<Image src={EquipmentOne} alt='Equipment of TORKAŞ' />
							<div className={scss.EquipmentText}>
								<p>
									Наши газовые баллоны изготавливаются с использованием
									современных технологий и высококачественных материалов.
									Строгий контроль на всех этапах производства гарантирует
									долговечность и надежность продукции.
								</p>
							</div>
						</div>
						<div className={scss.Equipment__block}>
							<Image src={EquipmentOne} alt='Equipment of TORKAŞ' />
							<div className={scss.EquipmentText}>
								<p>
									Каждый газовый баллон проходит многоступенчатый контроль
									качества, включая тестирование на герметичность, устойчивость
									к высоким давлениям и механическим нагрузкам. Мы гарантируем,
									что наша продукция соответствует всем требованиям
									безопасности.
								</p>
							</div>
						</div>
						<div className={scss.Equipment__block}>
							<Image src={EquipmentOne} alt='Equipment of TORKAŞ' />
							<div className={scss.EquipmentText}>
								<p>
									Мы заботимся об экологии и предлагаем решения для безопасной
									утилизации и переработки использованных газовых баллонов. Наши
									технологии помогают минимизировать воздействие на окружающую
									среду и обеспечивают повторное использование материалов.
								</p>
							</div>
						</div>

						<div className={scss.Equipment__block}>
							<Image src={EquipmentTwo} alt='Equipment of TORKAŞ' />
							<div className={scss.EquipmentText}>
								<p>
									Мы осуществляем доставку газовых баллонов в любую точку мира,
									соблюдая все стандарты безопасности. Надежная упаковка и
									правильная логистика позволяют сохранить целостность продукции
									во время транспортировки.
								</p>
							</div>
						</div>
						<div className={scss.Equipment__block}>
							<Image src={EquipmentThree} alt='Equipment of TORKAŞ' />
							<div className={scss.EquipmentText}>
								<p>
									Наши системы автоматического наполнения газовых баллонов
									обеспечивают точную дозировку и исключают утечки газа. Это
									повышает эффективность работы и делает процесс максимально
									безопасным.
								</p>
							</div>
						</div>
						<div className={scss.Equipment__block}>
							<Image src={EquipmentFour} alt='Equipment of TORKAŞ' />
							<div className={scss.EquipmentText}>
								<p>
									Безопасность — наш главный приоритет. Наши газовые баллоны
									проходят строгие испытания на прочность и герметичность,
									соответствуют международным стандартам и обеспечивают надежное
									хранение газа без риска утечек.
								</p>
							</div>
						</div>
					</div>
					<button>
						<FaAngleRight />
						Подробнее
					</button>
				</div>
			</div>
		</div>
	)
}

export default Equipment
