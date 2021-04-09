import {renderHomeView} from './home-view.js';
import {renderPlanView} from './plan-view.js';
import {renderIdeaView} from './idea-view.js';
import {renderContactView} from './contact-view.js';

//Get buttons
let viewPlan = document.getElementById('businessPlan');
let viewIdea = document.getElementById('projectIdea');
let viewContact = document.getElementById('contact');

//Show first page
renderHomeView();

//Add eventlisteners to buttons
viewPlan.addEventListener('click', renderPlanView);
viewIdea.addEventListener('click', renderIdeaView);
viewContact.addEventListener('click', renderContactView);