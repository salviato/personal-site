import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".facts__item"), "85%");
new RevealOnScroll($(".section-title__subtitle"), "85%");
new RevealOnScroll($(".resume"), "85%");
new RevealOnScroll($(".skills"), "85%");