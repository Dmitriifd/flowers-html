// Подключение из node_modules
import * as noUiSlider from 'nouislider';
import '../../libs/wNumb.min.js'

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
import 'nouislider/dist/nouislider.css';
import '../../../scss/base/forms/range-slider.scss';


export function rangeInit() {
	const rangeSlider = document.getElementById('range-slider')
	const priceFrom = document.querySelector('.catalog-form__price-from')
	const priceTo = document.querySelector('.catalog-form__price-to')

	if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [500, 50000],
			connect: true,
			// tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
			step: 1,
			range: {
				min: [500],
				max: [50000],
			},
		})

		const input0 = document.getElementById('input-0')
		const input1 = document.getElementById('input-1')
		const inputs = [input0, input1]
    const price = [priceFrom, priceTo]

		rangeSlider.noUiSlider.on('update', function (values, handle) {
      price[handle].textContent = `${Math.round(values[handle])} ₽`
			inputs[handle].value = Math.round(values[handle])
		})

		const setRangeSlider = (i, value) => {
			let arr = [null, null]
			arr[i] = value

			console.log(arr)

			rangeSlider.noUiSlider.set(arr)
		}

		inputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				setRangeSlider(index, e.currentTarget.value)
			})
		})
	}
}
rangeInit();
