import MakeSlider from "./modules/contact/_slider";
import Interest from "./modules/contact/_interest";
import SendContactForm from "./modules/contact/_send_contact_form";
import FromTravel from "./modules/contact/_from_travel";

new MakeSlider('contact_planing_selfCharacter');
new MakeSlider('contact_planing_selfLuxury');
new MakeSlider('contact_planing_selfConsider');

new Interest();
new SendContactForm();
new FromTravel();