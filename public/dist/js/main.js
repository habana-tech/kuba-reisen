/*!
 * Kuba-reisen v0.0.1
 * Kuba-reisen website.
 * (c) 2019 HabanaTech
 * MIT License
 * https://github.com/habana-tech/kuba-reisen.git
 */

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me again!!');
}), false);
