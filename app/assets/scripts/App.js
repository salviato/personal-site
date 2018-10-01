import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import ChangeTheWords from './modules/ChangeTheWords';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".facts__item"), "85%");
new RevealOnScroll($(".section-title__subtitle"), "85%");
new RevealOnScroll($(".resume"), "85%");
new RevealOnScroll($(".skills"), "85%");

var stickyHeader = new StickyHeader();
var modal = new Modal();
var changeTheWords = new ChangeTheWords();