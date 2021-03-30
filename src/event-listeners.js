import {renderHomeView} from './home-view.js';
import {renderPlanView} from './plan-view.js';
import {renderIdeaView} from './idea-view.js';
import {renderContactView} from './contact-view.js';

let viewPlan = document.getElementById('businessPlan');
let viewIdea = document.getElementById('projectIdea');
let viewContact = document.getElementById('contact');


renderHomeView();

viewPlan.addEventListener('click', renderPlanView);
viewIdea.addEventListener('click', renderIdeaView);
viewContact.addEventListener('click', renderContactView);