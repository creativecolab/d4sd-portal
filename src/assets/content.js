import home1 from './img/home_mobility.svg';
import home2 from './img/home_climate.svg';
import home3 from './img/home_housing.svg';
import home4 from './img/home_health.svg';

import action2 from './img/home_action2.jpg';
import action3 from './img/home_action3.jpg';
import action4 from './img/home_action4.jpg';
import action5 from './img/home_action5.jpg';

import community1 from './img/home_logo_designlab.svg';
import community2 from './img/home_logo_yankelovich.png';
import community3 from './img/home_logo_id8.png';
import community4 from './img/home_logo_hth.png';
import community5 from './img/home_logo_league.png';
import community6 from './img/home_logo_AltSchool.png';
import community7 from './img/home_logo_centerforthearts.jpg';
import community8 from './img/home_logo_D39C.png';
import community9 from './img/home_logo_hoover.jpg';
import community10 from './img/home_logo_usd.png';
import community11 from './img/home_logo_idealab.jpg';
import community12 from './img/home_logo_idealabgov.png';
import community13 from './img/home_logo_wit.png';
import community14 from './img/home_logo_VIDA.png';
import community15 from './img/home_logo_LJCDS.png';
import community16 from './img/home_logo_pointloma.png';
import community17 from './img/home_logo_sdsu.png';
import community18 from './img/home_logo_sdja.png';
import community19 from './img/home_logo_newschool.png';
import community20 from './img/home_logo_swccd.png';
import community21 from './img/home_logo_sdcc.png';
import community22 from './img/home_logo_e3.png';
import community23 from './img/home_logo_nu.png';
import community24 from './img/home_logo_zip.jpg';
import community25 from './img/home_logo_urban.png';
import community26 from './img/home_logo_ucsd.png';

import logo1 from './img/home_logo1.png';
import logo2 from './img/home_logo2.png';
import logo3 from './img/home_logo3.png';
import logo4 from './img/home_logo4.png';
import logo5 from './img/home_logo5.png';
import logo6 from './img/home_logo6.png';
import logo7 from './img/home_logo7.png';

import city from "./img/about_city.svg";
import connect from "./img/about_connect.svg";
import div from "./img/about_div.svg";
import edu from "./img/about_edu.svg";
import find from "./img/about_find.svg";
import communicate from "./img/about_communicate.svg";

import educator from "./img/involve_partner.svg";
import sponsor from "./img/involve_sponsor.svg";
import expert from "./img/involve_volunteer.svg";
import innovator from "./img/involve_innovate.svg";
// import question from "./img/involve_question.svg";
import mail from "./img/involve_mail.svg";

/*************************************Home content***************************************/
export const roles = [
  {
    image: innovator,
    contents: "INNOVATE"
  },
  {
    image: educator,
    contents: "PARTNER"
  },
  {
    image: expert,
    contents: "VOLUNTEER"
  },
  {
    image: sponsor,
    contents: "SPONSOR"
  }
]
export const sampleChallenges = [
  {
    id: 0,
    src: home1,
    isAction: "true",
    header: "LEARN ABOUT THE CHALLENGES: IMPROVING MOBILITY",
    title: "How might we help people move freely through our city?",
    txt: "As people are looking for alternate ways to move around, while also wanting to reduce their emissions, the topic of inclusive and environmentally conscious transportation continues to be a pressing issue in our urban environment. Mobility can be examined from a number of lenses such as motor vehicle systems, transit, parking, intermodal connections, electric vehicles, accident reduction, walkability and bike-ability, and land-use patterns. <b>Help shape this problem by joining our discussion!</b>",
    action: "See what happened in 2017",
    link: "http://d4sd2017.org",
    isAction2: "false",
    action2: "",
    link2: ""
  },
  {
    id: 1,
    src: home2,
    isAction: "false",
    header: "LEARN ABOUT THE CHALLENGES: ADDRESSING CLIMATE EFFECTS",
    title: "How can we help San Diego prepare for and mitigate climate change?",
    txt: "Burning of fossil fuels has resulted in the gradual increase of global temperatures. Scientists have high confidence that global temperatures will continue to rise for decades to come. Climate change impacts areas such as transportation, housing, health, natural resources, food waste, agriculture, air pollution, and education. <b>Help shape this problem by joining our discussion!</b>",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon",
    isAction2: "false",
    action2: "",
    link2: ""
  },
  {
    id: 2,
    src: home3,
    isAction: "false",
    header: "LEARN ABOUT THE CHALLENGES: CREATING ACCESSIBLE HOUSING",
    title: "How can we reimagine housing to meet the needs of all San Diegans?",
    txt: "Shelter is a fundamental human need; however people have limited choices for safe, affordable, and long-term housing in San Diego. The issue of housing is more than the physical structures. It also includes homelessness, land development, smart home technology, and mixed-use housing, all of which needs to be addressed with San Diego’s growing population. <b>Help shape this problem by joining our discussion!</b>",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon",
    isAction2: "false",
    action2: "",
    link2: ""
  },
  {
    id: 3,
    src: home4,
    isAction: "false",
    header: "LEARN ABOUT THE CHALLENGES: LIVING HEALTHY LIVES",
    title: "How can we help all San Diegans live healthy and active lives?",
    txt: "Many San Diego residents have limited access to preventative and restorative health services. Health is determined by social and physical environments and is directly connected to how people live, learn, work, and play. Topics such as quality of life, population health, and social well being, are all different aspects of how we as a city, need to improve our well being. <b>Help shape this problem by joining our discussion!</b>",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon",
    isAction2: "false",
    action2: "",
    link2: ""
    }
]

export const actionImg = [action2, action3, action4, action5]
export const communityLogo = [
  community1, community2, community3, community4, community5, community6,
  community7, community8, community9, community10, community11, community12, community13,
  community14, community15, community16, community17, community18, community19,
  community20, community21, community22, community23, community24, community25, community26]

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]

/*************************************About content***************************************/
export const aboutContent = {
  title1: "About D4SD",
  content1:"Design for San Diego (D4SD) is a civic design challenge that provides a space for all of us to address the region's most challenging issues. D4SD offers a series of public workshops to bring together a wide range of stakeholders and scaffold a process of framing human-centered design problems, prototyping solutions, and building alliances to bring good ideas to life.",
  title2: "Who can participate?",
  content2: "Anyone! If you care about the city and want to have a chance to have your voice included in the conversation, then we welcome you! Find below some potential ways groups that can participate.",
  title3: "What are the goals of D4SD?",
  title4: "What and when are the key events?",
  content4: "D4SD will have three public events that link together a human-centered design process: round-table discussions, designathons, and the D4SD Summit. Different roles will have a slightly different process and these events will hold a different purpose. Innovators will be the ones gathering information and iterating upon ideas while community members will be teaching innovators about the problem topics and giving feedback throughout the process.",
  title5: "Learn more about D4SD 2017",
  content5: "In 2017, we started Design For San Diego, where hundreds of people were involved with generating concepts with the goal to create a San Diego where we all move freely. 23 teams ideated solutions using human-centered design principles to help solve the city’s problems regarding mobility. Visit our 2017 website to learn more about what we did in 2017 and to see some of the projects worked on during this time.",
  content3: [
  {
    txt: "To connect innovators, experts, city officials, professional designers, business leaders, and community members through a combination of in-person events and online activities.",
    img: connect
  },
  {
    txt: "To increase and diversity participation, particularly for typically underrepresented or marginalized populations, by creating a range of specific roles while striving for diversity, equity, and inclusion.",
    img: div
  },
  {
    txt: "To increase the agency of bottom-up community initiatives and enhance communication between the community and city.",
    img: communicate
  },
  {
    txt: "To contribute to the burgeoning design-driven economy in San Diego by providing resources to help launch top proposals by bringing together leaders from various sectors.",
    img: city
  },
  {
    txt: "To provide an educational opportunity that serves people from a wide range of ages, backgrounds, and motivations.",
    img: edu
  },
  {
    txt: "To collaboratively explore a range of civic problems that the San Diego region faces.",
    img: find
  }
]}

/*************************************Involve content***************************************/
export const involveContent = {
  title1: "Get Involved",
  content1:"You can take part in D4SD in a variety of ways! Whether it be ideating solutions, giving feedback, teaching civic design in the classroom, or supporting the initiative, getting involved with D4SD can look a little different for each person. Below are a few ways to get involved.",
  roles: [
  {
    title: "Join the discussion",
    txt: "We have a Slack workspace set up with multiple channels that will allow innovators to communicate with their team members and the greater D4SD community. When you register online, you will be connected to our network of resources to based on how you would like to participate.",
    image: innovator,
    id: "innovators",
    link: "https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU",
    isAction: "true",
    action: "JOIN DISCUSSION"
  },
  {
    title: "Join the mailing list",
    txt: "Keep up with D4SD updates and events with our newsletter! Every week we highlight key takeaways from discussions, shout out community members, and remind you of important deadlines to help you stay on track during the challenge.",
    image: expert,
    id: "experts",
    link: "http://eepurl.com/c2kFon",
    isAction: "true",
    action: "JOIN MAILING LIST"
  },
  {
    title: "Sponsor D4SD",
    txt: "Get the chance to grow your brand within D4SD’s community by sponsoring events. This would allow either your product or service to reach new ears,while supporting a mission that matters to you.",
    image: sponsor,
    id: "sponsors",
    link: "mailto:team@d4sd.org",
    isAction: "true",
    action: "CONTACT OUR TEAM"
  },
  {
    title: "Join the D4SD team",
    txt: "We need, innovators, educators, volunteers, and more to help us reach our goal. If you’re interested in any of those roles or want to forge you own role, register with us below!",
    image: mail,
    id: "mail",
    link: "http://eepurl.com/c2kFon",
    isAction: "true",
    action: "JOIN OUR TEAM"
  },
]}

/********************************************FAQ*****************************************/
export const faqContent = [
  {
    question: 'What is D4SD?',
    answer: 'Design for San Diego (D4SD) is a civic design challenge initiated by the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a> in partnership with the City of San Diego, <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Alliance</a>, and <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a>.<br><br>This year’s challenge focuses on urban mobility. We all have places to go and people to see. So, whether you’re traveling by car, bike, train, bus, boat or foot for work or play, mobility significantly affects millions of citizens every day.<br><br>This year’s challenge focuses on four topics:<br><ul><li>Enhancing the commuter experience</li><li>Promoting walkable and bikeable communities</li><li>Improving accessibility</li><li>Preparing for our city’s future with autonomous vehicles</li></ul>Learn more about these four topics under  <a href="/challenges" target="_blank" rel="noopener noreferrer">Challenge Briefs</a>. You can also join the <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack discussion forum</a> (a free online messaging and collaboration software) to learn and share information about mobility problems in the San Diego region.',
  },
  {
    question: 'What is unique about the D4SD Challenge?',
    answer: 'As an initiative of the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a>, we have created a process that uses concepts from human-centered design and crowdsourcing to help innovators collectively solve local civic issues. Further, by partnering with the City of San Diego and regional entities like SCALE SD and the Design Forward Alliance, D4SD to support community integration for both the process and the potential solutions.<br><br> You will have an opportunity to chat online through our <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack Team</a> discussion forum (a free online messaging and collaboration software) as well as through a series of in-person events to help you connect with other innovators and access design practitioners, who can mentor you through your efforts.<br><br>Here’s how our four-stage process works:<ol><li><b>Discover:</b> Learn about the local civic issues through the D4SD.org website, through the <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">Slack discussion forum</a>, and through user research. Your goal here is to become an expert on a specific mobility challenge facing people in the San Diego region. Teach others about what you discover.</li><li><b>Ideate:</b> Pick a specific mobility problem and generate many creative solutions to address the issue. Join us for group brainstorming at the <a href="https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445/" target="_blank" rel="noopener noreferrer">Design Sprint and Hackathon on Sept 22-23</a>, or jump on the <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">Slack discussion forum</a>.  The goal here is not to just run with your first idea. Come up with lots of ideas, merge them with others, and choose a concept that will be novel, feasible, and impactful.</li><li><b>Prototype:</b> Now that you and your team have an idea, it is time to build a mockup of your concept.  A prototype can be anything that makes your idea concrete and testable, such as a click-through demo, a 3D model, a service-design blueprint, an algorithm, a physical mockup, a video demo, etc. Your goal here is to create a prototype that will help you communicate your vision and test assumptions about your solution. Entries due no later than Oct 22 at 11:59PM PDT. Register your team by Oct 10.</li><li><b>Implement:</b> Teams with the best prototypes will be selected as finalists and will have unique opportunities to pitch their concept to startup accelerators and the City of San Diego. We would love for your best solutions to make it in the real-world!</li></ol>Furthermore, the D4SD civic design challenge has partnered with <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> and the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Alliance</a> to host a series of <a href="/events" target="_blank" rel="noopener noreferrer">in-person events</a> to help you connect with other innovators. Our goal is to motivate and support citizens in learning how to use human-centered design to truly understand the topic and then creatively come up with solutions that improve mobility in San Diego.',
  },
  {
    question: 'Why should I participate in D4SD?',
    answer: 'Join D4SD for this unique opportunity to collaborate and compete with other city innovators to help solve transportation-related issues facing San Diego and cities around the world. The best solutions will earn cash prizes and private one-on-one meetings with city leaders and startup investors.<br><br>Benefits include:<ul><li>Solve real problems and inspire change in your community!</li><li>Learn human-centered design practices from professional designers and educators in the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a>.</li><li>Work with real data and collaborate with <a href="https://data.sandiego.gov/" target="_blank" rel="noopener noreferrer">City of San Diego\'s data portal and award-winning Performance and Analytics Department</a>.</li><li>Make new connections through networking opportunities with designers, engineers, data scientists, civic leaders, entrepreneurs, and other innovators.</li><li>Attend community events:<ul><li>All team members who present a valid submission will get a free ticket to the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer on Oct 25th from 5:30-8:30pm (a $50 value)</li><li>Finalists receive a free ticket to the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> on Oct 26th (a $150 value)</li></ul><li>Win prizes:<ul><li>All teams will receive special gifts for participating.</li><li>Teams selected as finalists will be eligible to win cash prizes during the awards ceremony on Oct 26th.</li><li>Top teams will get an opportunity to have their solutions supported and funded by the <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> startup accelerator.</li></ul></li></ul>',
  },
  {
    question: 'What are the basic requirements for participating in the challenge?',
    answer: 'To participate in the 2017 civic design challenge, you or your team must register by Oct 10th.  You can edit your submission throughout October. The final deadline for entries is Oct 22nd at 11:59pm PDT.<br><br>A valid submission includes a written summary of a specific problem you aim to solve, a written summary of your solution, a link to a prototype of your solution, and a visual poster (40” tall by 30” wide in full color) that can be printed and displayed at the Oct 25th <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community event. Posters will be printed for participants, but they must follow the guidelines and use the <a href="/postertemplates" target="_blank" ref="noreferrer noopener">Poster Template.</a><br><br>You do NOT need to participate in the Oct 25th event in order to be eligible for the competition. You do NOT need to be an expert. You do NOT need to be from the San Diego region. There are no age restrictions. We welcome good ideas from anyone and anywhere in the world.<br><br>However, if your solution is selected as a finalist, at least one team member must appear at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> on Oct 26 in order to present the poster (8am-5pm) and to deliver a 2-minute pitch as part of the Awards Ceremony (5pm-7pm).',
  },
  {
    question: 'Can I submit multiple solutions or work on multiple teams?',
    answer: 'No. Participants can only submit one entry to the challenge, either as an individual or as a team. Teams can have up to five team members.',
  },
  {
    question: 'Who owns the solutions?',
    answer: 'Individuals or teams will retain all intellectual property rights on solutions submitted to the D4SD Challenge. As an initiative from the <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">UC San Diego Design Lab</a>, D4SD is a non-profit dedicated to demonstrating the value of human-centered design and incubating great ideas into companies or longer-term projects that foster economic activity in the City of San Diego and beyond.',
  },
  {
    question: 'When and where are the in-person events for the 2017 Civic Design Challenge?',
    answer: 'Through our partnerships with <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> and the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a>, we have put together an exciting program of in-person events for networking and showcasing your talents.<br><br>Sept 21-23<br><b>D4SD Kick-off Design Sprint and Hackathon</b><br>Hosted by <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> at <a href="http://downtownworks.com/" target="_blank" rel="noopener noreferrer">Downtown Works</a><ul><li>Thursday, September 21, 2017: 10am - 1pm<br><b><a href="https://www.eventbrite.com/e/kickoff-for-the-2017-d4sd-civic-design-challenge-tickets-37543424393/" target="_blank" rel="noopener noreferrer">Kick-Off & Information Session</a></b><br>Introduction by Mayor Faulconer, Chancellor Khosla & Don Norman</li><li>Friday, September 22, 2017:  5:30pm - all night<br><b><a href="https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445/" target="_blank" rel="noopener noreferrer">D4SD Challenge: Design Sprint & Hackathon - Day 1</a></b><br>Learn about the challenges, brainstorm, form teams, & build prototypes</li><li>Saturday, September 23, 2017:  all day - 9pm<br><b><a href="https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445/" target="_blank" rel="noopener noreferrer">D4SD Challenge: Design Sprint & Hackathon - Day 2</a></b><br>Present prototypes, win prizes & party</li></ul>Oct 3-19, 2017<br><b>Civic Design Course</b><br>Hosted by Professor Dow at UC San Diego (all sessions from 5-7pm)<ul><li>Oct 3: Team formation and brainstorming</li><li>Oct 5:  Problem framing and ideation</li><li>Oct 10: Rapid prototyping</li><li>Oct 12: User research presentations</li><li>Oct 17: Visual design for posters/videos</li><li>Oct 19: Studio time for prototypes, posters, and entries</li></ul>Oct 25-26<br><b>D4SD Challenge Judging and Prize Ceremony</b><br>Hosted by <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> at Broadway Pier & Liberty Station<ul><li>Wednesday, Oct 25, 2017:  5:30pm-8:30pm<br><b><a href="http://www.designforwardsd.com/" target="_blank" rel="noopener noreferrer">D4SD Challenge: Team Showcase and People’s Choice Award</a></b><br>Teams invited to present posters at <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer (<a href="https://www.portofsandiego.org/the-port-pavilion-on-broadway-pier.html/" target="_blank" rel="noopener noreferrer">Broadway Pier</a>)</li><li>Thursday, Oct 26, 2017:  8am-7pm<br><b><a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">D4SD Challenge:  Finalist Showcase and Awards Ceremony</a></b><br>Finalists posters and award ceremony at <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> (<a href="http://libertystation.com/" target="_blank" rel="noopener noreferrer">Liberty Station</a>)</li></ul>',
  },
  {
    question: 'Do I need to attend the in-person events to enter or win the challenge?',
    answer: 'You do not need to attend any of the in-person events in order to submit a solution through the D4SD website. All valid entries will be judged through an online judgment process.<br><br>Finalists will be announced at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer on Oct 25th 5:30-8:30pm at <a href="https://www.portofsandiego.org/the-port-pavilion-on-broadway-pier.html/" target="_blank" rel="noopener noreferrer">Broadway Pier</a> in San Diego (<a href="https://www.google.com/maps/place/1000+N+Harbor+Dr,+San+Diego,+CA+92101/@32.7163863,-117.1756931,17z/data=!3m1!4b1!4m5!3m4!1s0x80d954ab4dd6a349:0x26798b9b14d0c140!8m2!3d32.7163863!4d-117.1735044/" target="_blank" rel="noopener noreferrer">1000 N Harbor Dr, San Diego, CA 92101</a>). All team members who submit a valid entry to the challenge will get a free ticket. In case you cannot make it to the event, we will also contact the finalists through email.<br><br>If you team is selected as a finalist, we request at least one team member appear at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> main event on Oct 26th at <a href="http://libertystation.com/" target="_blank" rel="noopener noreferrer">Liberty Station</a> (<a href="https://www.google.com/maps/place/2640+Historic+Decatur+Rd,+San+Diego,+CA+92106/@32.7377119,-117.2159466,17z/data=!3m1!4b1!4m5!3m4!1s0x80deab043d0c80a1:0xa203f5de95283371!8m2!3d32.7377119!4d-117.2137579/" target="_blank" rel="noopener noreferrer">2640 Historic Decatur Rd, San Diego, CA</a>) to present their poster starting at 8am and to verbally pitch their solution on stage at the Awards Ceremony that same evening (5-7pm).  Teams selected as finalists will get free limited-access tickets for the summit (a $150 value).',
  },
  {
    question: 'What criteria will be used to judge submissions? How will judging work?',
    answer: 'To enter the D4SD Challenge, teams must produce the following deliverables by Oct 22 at 11:59PM PDT: write a problem statement and solution statement, submit a prototype, and create a poster that summarizes everything.<br><br>In general, solutions to the D4SD Challenge will be assessed based on four key criteria:<ol><li>Human-centered process (How effectively does the team involve stakeholders, obtain feedback, and leverage data to support design decisions?)</li><li>Novelty (How unique is the solution compared to other available solutions?)</li><li>Feasibility (How likely can this solution be implemented? Will it work in the real world?)</li><li>Impact (How will the solution affect people? Does it have any downsides?)</li></ol>Each deliverable will also be part of the overall judgement process:<ul><li>Problem statement:<ul><li>Identities and clearly articulates a real-world problem.</li><li>Provides evidence of problem (statistics pulled from cited sources, interview quotes with affected parties, etc.).</li><li>Explains how solving the problem will affect people</li></ul></li><li>Solution statement:<ul><li>Explains concept clearly and concisely.</li><li>Describes how the solution is novel/creative.</li><li>Indicates how the solution would be practical and feasible to implement.</li><li>Predicts the potential impact on both primary and secondary stakeholders.</li></ul></li><li>Prototype:<ul><li>Provides a simple demonstration of the proposed solution.</li><li>Explains clearly how the solution works.Documents the overall process of creating the prototype and shows the iterative effort put into creating a minimal viable prototype.</li></ul></li><li>Poster (40” tall by 30” wide in full color):<ul><li>Offers a visually appealing representation of the problem and proposed solution.</li><li>Follows effective visual design principles</li><li>Represents the brand identity of the team.</li><li>Uses the designated <a href="/postertemplates" target="_blank" ref="noreferrer noopener">Poster Template</a></li></ul></li></ul>The judging process has two rounds:<ol><li>In round one, a panel of experts in human-centered design, civics, and business will assess the deliverables according to the criteria listed above. This judging process will happen online after the <b>Oct 22 11:59pm PDT deadline</b>.  Finalists will be announced on October 25th at the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward</a> community mixer at Broadway Pier (5:30-8:30pm), on the D4SD website, as well as through email.</li><li>In round two, distinguished jurors will assess the finalists during the <a href="http://designforwardsd.com/" target="_blank" rel="noopener noreferrer">Design Forward Summit</a> on Oct 26th. Teams must have at least one team member present throughout the day (8am-7pm) to interact with the jurors.  Finalist teams will also deliver a two-minute verbal pitch that evening during the D4SD Awards Ceremony.</li></ol>',
  },
  {
    question: 'What are the rules and resources for teams?',
    answer: 'You do not need to work as part of a team. Individuals can create submissions on their own. If you do have a team, it can have at most five team members.<br><br>Each team can request a private Slack channel on the <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack Team</a> discussion forum by <a href="http://tinyurl.com/D4SD-SlackTeam" target="_blank" ref="noreferrer noopener">filling out this form</a> with the team name, as well as the names and email addresses for each team member.<br><br>To officially enter the challenge, each individual or team must <a href="/getinvolved" target="_blank" ref="noreferrer noopener">create an entry on the D4SD website</a> by Oct 10th.',
  },
  {
    question: 'How can I find team members?',
    answer: 'While you do not need a team to enter the competition, a team can help you build your good idea into a great solution.  An effective team is one that has a mix of diverse talents all striving towards a common goal.<br><br>The best way to find team members is to <a href="https://www.eventbrite.com/e/2017-d4sd-civic-design-challenge-tickets-37553137445/" target="_blank" rel="noopener noreferrer">attend the D4SD Challenge Design Sprint and Hackathon on Sept 22nd starting at 5:30pm</a>, hosted by <a href="http://www.scalesd.com/" target="_blank" rel="noopener noreferrer">SCALE SD</a> at <a href="http://downtownworks.com/" target="_blank" rel="noopener noreferrer">Downtown Works</a>.  We will be brainstorming and forming teams through a series of fun in-person activities.<br><br>If you cannot attend this event, you can join our <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack Team</a> channel to discuss solutions with other challenge participants. You are free to communicate directly with other participants about forming a team around your favorite ideas.',
  },
  {
    question: 'How do I register my team for the challenge?',
    answer: 'From the <a href=”/getinvolved” target=”_blank” ref=”noreferrer nooponer”>Get Involved</a> page on the D4SD website, click on “Register Here”. Here you will enter the submission process.  Click on “Register for the Challenge” to login and follow the prompts to create an initial entry for your team. Only one team member needs to register for the team by Oct 10th. The team can continue to edit the submission until Oct 22nd.',
  },
  {
    question: 'Do I need to print my team’s poster?',

    answer: 'No. D4SD will cover the cost of printing posters for all valid submissions under the following conditions: <ul><li>The entry must be complete and valid as determined by the D4SD organizing team.</li><li>The <a href="/postertemplates" target="_blank" ref="noreferrer nooponer">poster must follow the guidelines and use the poster template specified here</a>.</li><li>At least one team member must be able to present your poster at the Design Forward Community Mixer on Oct 25 from 5:30-8:30pm.</li><li>If your team is selected as a finalist, at least one team member must be available for the Design Forward Summit on Oct 26th from 8am-7pm.</li>',
  },
  {
    question: 'How can I discuss the challenges with other people in the city?',
    answer: 'We created a dedicated <a href="https://join.slack.com/t/d4sd/shared_invite/MjExMjA5MDY0MjkzLTE0OTk3ODcxMjktMzIxYmRkMTJkMA/" target="_blank" rel="noopener noreferrer">D4SD Slack Team</a> forum for you to discuss the challenge briefs with other innovators in the city.  Simply click here and follow the instructions to sign up. Slack is a free online messaging and collaboration software. When you receive the confirmation email, click on the link to join the D4SD slack forum.<br><br>After you join Slack, if you need help, you can click the “D4SD Helper Bot” to be invited to specific discussions, or send a chat to the “D4SD Team”.<br><br>All discussions on the D4SD Slack forum, must adhere to the <a href="/codeofconduct">D4SD Code of Conduct</a>.',
  },
  {
    question: 'If I still have questions, who can I contact for more information?',
    answer: 'Contact the D4SD team at <a href=“mailto:team@d4sd.org”> team@d4sd.org</a> for questions about the Civic Design Challenge or if you are having technical difficulties with the D4SD Slack discussion forum.',
  },
];


export const challengeContent = {
  title: "Challenge Brief",
  content:"You can take part in D4SD in a variety of ways! Whether it be ideating solutions, giving feedback, teaching civic design in the classroom, or supporting the initiative, getting involved with D4SD can look a little different for each person. Below are a few ways to get involved.",
  nav: [
    {
      title: "Mobility",
      img: home1
    },
    {
      title: "Climate",
      img: home3
    },
    {
      title: "Housing",
      img: home2
    },
    {
      title: "Health",
      img: home4
    }
  ],
  contents: [
    {
      id: "Mobility",
      subtitle: "Challenge topic: MOBILITY",
      title: "How might we help people move freely through our city?",
      problems: [
        {
          img: home1,
          problem: "problem1"
        },
        {
          img: home2,
          problem: "problem2"
        },
        {
          img: home3,
          problem: "problem3"
        },
        {
          img: home4,
          problem: "problem4"
        }
      ]
    },
    {
      id: "Climate",
      subtitle: "Challenge topic: CLIMATE",
      title: "How can we help San Diego prepare for and mitigate climate change?",
      problems: [
        {
          img: home1,
          problem: "problem1"
        },
        {
          img: home2,
          problem: "problem2"
        },
        {
          img: home3,
          problem: "problem3"
        },
        {
          img: home4,
          problem: "problem4"
        }
      ]
    },
    {
      id: "Housing",
      subtitle: "Challenge topic: HOUSING",
      title: "How can we reimagine housing to meet the needs of all San Diegans?",
      problems: [
        {
          img: home1,
          problem: "problem1"
        },
        {
          img: home2,
          problem: "problem2"
        },
        {
          img: home3,
          problem: "problem3"
        },
        {
          img: home4,
          problem: "problem4"
        }
      ]
    },
    {
      id: "Health",
      subtitle: "Challenge topic: HEALTH",
      title: "How can we help all San Diegans live healthy and active lives?",
      problems: [
        {
          img: home1,
          problem: "problem1"
        },
        {
          img: home2,
          problem: "problem2"
        },
        {
          img: home3,
          problem: "problem3"
        },
        {
          img: home4,
          problem: "problem4"
        }
      ]
    }
  ],
}

export const timelineContent = {
  title1: "Process",
  content1: "Design for San Diego (D4SD) is a city-wide design challenge that seeks to tackle civic issues that affect the Greater San Diego Area through the human centered design process. While working in teams, participants in particular will go through the process of doing initial research, submitting a preliminary concept, requesting and providing feedback, submitting their final concepts, and attending the final summit to pitch their ideas to the City of San Diego. A more detailed process timeline can be found below.",
  timeline: [
    {
      stage: "Contribute to online discussions",
      date: "STARTS JAN 6",
      detail: "Discovery is a huge part of the design process, and it is crucial that participants explore their chosen problem space to learn more about how they might tackle the issue. In this phase, participants will contribute to online discussions surrounding the problem topics while adding new insights that might drive the conversation forward and bring about new ideas. Start discussing today! Join the slack channel now.",
      action: "Join Discussion",
      state: "active",
      isAction: true,
      link: 'https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU',
      target: "_blank"
    },
    {
      stage: "Register your team",
      date: "BY FEB 3",
      detail: "Participants will work in groups to develop their ideas and proposals. There is no limit to how many members a team can have, but groups of 4-6 people tend to work best. Working in a team is much more beneficial than working on your own, as it will expose you to new insights and viewpoints and allow you to bounce ideas off one another during the whole D4SD process.",
      action: "Register",
      state: "inactive",
      note: "Registration will open on JAN 6",
      isAction: true,

    },
    {
      stage: "Submit a preliminary concept",
      date: "BY FEB 14",
      detail: "The preliminary concept participants will be submitting consists of two deliverables: a problem description and a solution description. <br/><b>&#8226 Problem description</b><br/> Define your problem in no more than two sentences. The problem definition should be a product of your own analysis of the problem space, not simply a replication of the questions provided by D4SD. Your problem definition can be possibly grounded in user research, interviews and statistics. You can only submit one problem definition, but you can keep editing it before the deadline. <br/><b>&#8226 Solutions</b> <br/>You can propose at most 3 solutions for the problem you defined. Each solution should be presented as a Solution Proposal, which is suggested to include: a clear description of your solution, it could be either a concept, an illustration, a prototype of your ideas or anything that you think best represent your proposed solution. Keep in mind that at this point, the brainstorming process is more meaningful than a well constructed final product. You can upload at most 3 pdf files, each of which includes a different solution.",
      isAction: false
    },
    {
      stage: "Request and provide feedback",
      date: "FEB 15 TO FEB 29",
      detail: "Want to know if your solution tackles the root cause? Community feedback is valuable in informing you about the desirability and feasibility of your solution. In this stage, participants are able to ask specialists in the field or community members who are affected up to 3 questions regarding their initial concepts which will be answered within a week. During this time, participants will also provide feedback to their peers. Although there is only one formal feedback session, participants are welcome to pursue follow up with their feedback provider through other means of communication.",
      isAction: false
    },
    {
      stage: "Submit your team's final concept",
      date: "BY MAR 13",
      detail: "For the final submission, teams will submit two items: presentation slides and a poster. <br/><b>&#8226 Presentation slides</b> <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&#8226 A clear definition <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&#8226 An image that clearly illustrates your solution/concept <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&#8226 An analysis of the strengths and limitations of your solution <br/><b>&#8226 Poster</b> <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&#8226 You can propose multiple solutions for the problem you choose (3 maximum), At this point, the brainstorming process is more meaningful a well constructed final product. <br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&#8226 Each solution should include a Solution Proposal which is suggested to include: a clear description of your solution, it could be either a concept, an illustration, a prototype of your ideas or anything that you think best represent your proposed solution.",
      isAction: false
    },
    {
      stage: "View community voting",
      date: "APR 4",
      detail: "Want to know how your idea is received? View the community voting to see how community members viewed your idea.",
      action: "View voting",
      state: "inactive",
      note: "Votes will be available in April",
      isAction: true
    },
  ]
}

export const stakeholderContent = {
  title: "Stakeholder Relations",
  content: "Addressing a design challenge involves understanding diverse perspectives from stakeholders within that space--including the people who impact, and the people who are impacted by, a particular problem or opportunity. Oftentimes, investigators seek to gain information from these stakeholders based on their own hunches about the design challenge. While this can deepen understanding on some aspects of the challenge, jumping to targeted questions too early risks missing critical aspects that come up organically in conversations and risks arriving at solutions with limited understanding of their broader impact, including potential unintended consequences. With that in mind, we recommend keeping the following principles in mind when seeking to understand a design challenge. "
}
