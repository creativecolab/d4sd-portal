/* eslint-disable */

import mobility1 from "./img/mobility_lastmile.jpg";
import mobility2 from "./img/mobility_safety.jpg";
import mobility3 from "./img/mobility_equitable.jpg";
import mobility4 from "./img/mobility_multimodal.jpg";
import housing1 from "./img/housing_mixed.jpg";
import housing2 from "./img/housing_resilient.jpg";
import housing3 from "./img/housing_homelessness.jpg";
import housing4 from "./img/housing_smart.jpg";
import health1 from "./img/health_public.jpg";
import health2 from "./img/health_fitness.jpg";
import health3 from "./img/health_mental.jpg";
import health4 from "./img/health_food.jpg";
import climate1 from "./img/climate_education.jpg";
import climate2 from "./img/climate_waste.jpg";
import climate3 from "./img/climate_coastal.jpg";
import climate4 from "./img/climate_community.jpg";
import challenge_mobility from './img/challenge_mobility.svg';
import challenge_health from './img/challenge_health.svg';
import challenge_climate from './img/challenge_climate.svg';
import challenge_housing from './img/challenge_housing.svg';

// str.split("\n").map((s) => s.split(/\:(.+)/,2));

/*

// get the lists of resources with labels and links from staging-d4sd.ucsd.edu:80
// stores it as a string you can then copy and paste into here as js code
let p = str.split("\n").map((s) => s.split(/\:(.+)/,2)).map((a) => {
  return  {label: a[0], link:a[1]};
})
let f = ``;
f = ``;
p.forEach((a) => {
  f+=`{label: '${a.label}', link:'${a.link}'},\n`
})

*/

/*
    title : "ENVIRONMENT CHALLENGES",

    educationAwareness:{
      title : "Education and Awareness",
      subTitle : "",
      introduction : "",
      angles : "",
      presenting_evidence:"",
      angle_examples: [{label:"", desc: ""}],
      resources_partners : [{label: "", link: ""}],
      resources_news : [{label: "", link: ""}],
      resources_national : [{label: "", link: ""}],
      image: climate1
    }
*/

export interface IChallengeContent {
  className: string;
  title: string;
  subTitle: string;
  introduction: string;
  angles: string;
  presenting_evidence: string;
  angle_examples: Array<{ label: string; desc: string }>;
  resources: Array<{ label: string; link: string }>;
  image: any;
}

export interface IChallengesContent {
  [key: string]: IChallengeContent
}

export interface ISection {
  [key: string]: { 
    title: string;
    heading: string;
    challenges: IChallengesContent | string;
  }
}

export interface INav {
  title: string;
  img: string;
}

export const challengesContent: {
  [key: string]: ISection | Array<INav> | string;
} = {
  image: 'challenge_header',
  title: 'Challenge Briefs',
  content:
    'What does it mean to be a Sustainable City?  For us, a sustainable San Diego is one where all parts of our city connect and support each other and the environment.  Working together, we can design ways to improve mobility, health, housing, and the climate for our region.',
  title2: 'How do you fit in?',
  content2:
    "Everyone is important in advancing a more sustainable San Diego, including you!  Below are several examples of challenges that we can address, together. This is just the start of our collective effort. If you see a problem not listed here, go investigate it and share back to the <a href='https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU' target='_blank'>D4SD discussion forum</a>, or come to an event where you can motivate others to join you.",
  title3: 'Other challenge topics',
  content3:
    'How are other D4SD participants engaging with the topic of making San Diego a more Sustainable City? We don’t want participants to be bound by the problem space we have constructed. If you or your team wants to pursue a problem that isn’t represented on our website, please feel free to explore it.  Please share back your efforts to the <a href=\'https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU\' target=\'_blank\'>D4SD discussion forum</a>, or come to an event where you can motivate others to join you. <br/><br/> For example, one of our educator partners—the entire 8th grade class at Vista Innovation and Design Academy— has been exploring the theme of "Survive or Thrive", based on the Sim City model, to explore a range of sustainability issues affecting SD regionally. "Our umbrella topics are Social, Economic, Environmental. Students explored what all that means and specific topics within each umbrella topic ranging from Immigration & Refugees to Bee Colonies to Arts & Culture…" Design away, friends!  ',
  nav: [
    {
      title: 'Health',
      img: challenge_health
    },
    {
      title: 'Mobility',
      img: challenge_mobility
    },
    {
      title: 'Environment',
      img: challenge_climate
    },
    {
      title: 'Housing',
      img: challenge_housing
    }
  ],
  sections: {
    health: {
      title: "HEALTH CHALLENGES",
      heading: "HEALTH: How might we help all San Diegans live healthy and active lives?",
      challenges: {
        public_health: {
          className: "publichealth-card",
          title: "Public Health",
          subTitle:
            "How might we prepare cities and residents to adapt and respond to global public health crises?",
          introduction:
            "San Diego is a vacation destination for many people who want to relax and take in the sun and surf. In 2017 San Diego attracted 35 million tourists to its sandy beaches and high profile events like Comic-Con. Furthermore, San Diego's status as a Navy hub means that many sailors are coming through the port each year from all over the world. These factors are a boon for the local economy but they also introduce risks of being exposed to outbreaks like COVID-19 (Coronavirus). The World Health Organization recently classified COVID-19 (Coronavirus) as a global pandemic (https://www.bbc.com/news/world-51839944). This development along with other recent outbreaks of SARS, H1N1, and Ebola are highlighting the risk that globalization poses to public health.  Besides virus outbreaks, there are many other trends that pose public health challenges such as the rise of e-cigarettes which can affect the health outcomes of young adults. More broadly, public health challenges are also tied in with the issue of equity. Health crises tend to hit lower socioeconomic communities the hardest.",
          angles:
            "Although globalization is connecting countries and cultures like never before, it is important to also consider how this increased connectivity may pose new challenges to our public health infrastructures. What new technologies and cultural practices can we design to keep people connected while preventing global health crises?",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Adopting sanitary practices",
              desc:
                "How might we integrate sanitary practices into daily activities in seamless and convenient ways?"
            },
            {
              label: "Virtualization",
              desc:
                "How might we provide virtual connection to keep communities together when viruses require that they stay further apart?"
            },
            {
              label: "Public transportation",
              desc:
                "How might we reduce the spread of germs on public transportation systems, especially during flu season and outbreaks? "
            },
            {
              label: "Reimaging Quarantines",
              desc:
                "How might we reimagine the process of being quarantined to be a more humane and comforting experience?"
            },
            {
              label: "Virus Detection",
              desc:
                "How might we adopt technology, such as infrared cameras, in public spaces to alert (but not shame) people who may be unknowing carriers of a viral infection?"
            }
          ],
          resources: [
            {
              label:
                "The World Health Organization (WHO) calls for “urgent action” and classifies COVID-19 as a pandemic ",
              link: " https://www.bbc.com/news/world-51839944"
            },
            {
              label:
                "Start-ups aim to bring big conferences online as coronavirus triggers cancellations",
              link:
                "https://www.cnbc.com/2020/03/09/coronavirus-startups-hopin-and-run-the-world-bring-conferences-online.html"
            },
            {
              label: "How thermal-imaging cameras can spot flu fevers ",
              link: "https://abcnews.go.com/Technology/story?id=7486026&page=1"
            },
            {
              label: "Outbreak: 10 of the worst pandemics in history",
              link: "https://www.mphonline.org/worst-pandemics-in-history/"
            }
          ],
          image: health1
        },
        physical_fitness: {
          className: "physicalfitness-card",
          title: "Physical Fitness",
          subTitle:
            "How might we create opportunities for San Diegans to stay active and socially integrated in the community?",
          introduction:
            "Physical activity is one of the ways to improve one’s overall health and reduce the risk of chronic diseases. According to the Center for Disease Control (CDC), physical activity can help to prevent breast cancer, colorectal cancer, diabetes, and heart disease (https://www.cdc.gov/physicalactivity/). These statistics highlight the importance of physical activity to prevent chronic health conditions. However, physical activity is becoming less common as the nature of work transitions to digital spaces. This transition to sedentary office work may partially explain why according to the American College of Sports Medicine only 25.8% are meeting aerobic and strength guidelines. Physical activity not only benefits individuals, it can affect the overall community. Building active and walkable communities can help to increase levels of economic activity, employment rates, and property values. One way to accomplish this goal is to increase the number of people using alternative modes of transportation to get to work, such as biking or walking. Currently, it is estimated that only 3.8% of people are bicycling or walking to work. Clearly there is room to improve, but the nature of work may also need to be re-evaluate if we want to encourage healthier lifestyles. ",
          angles:
            "This challenge explores how we might help people stay physically active and social integrated.  For example, we might assess the community’s physical infrastructure for walkability, identify local agencies that support active living and physical activity, and partner with city and regional planning agencies to encourage the development of active transportation.",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Job-related barriers",
              desc:
                "How might we help people engage in healthy activities when their jobs get in the way? "
            },
            {
              label: "Teaching health habits",
              desc:
                "How might we teach k-12 students proper movement patterns in a way that doesn't feel competitive or demotivating?"
            },
            {
              label: "A fitness culture",
              desc:
                "How might we create a culture of fitness where people of all ages can participate and thrive?"
            },
            {
              label: "Fitness for all ages",
              desc:
                "How might we provide fitness opportunities in which people of all ages and move together?"
            }
          ],
          resources: [
            {
              label: "U.S.Department of Health & Human Services retrieved from",
              link:
                "https://www.hhs.gov/fitness/be-active/importance-of-physical-activity/index.html"
            },
            {
              label:
                "Physical Activity Guidelines for Americans, 2nd Edition, 2018 retrieved from",
              link:
                "https://health.gov/sites/default/files/2019-09/Physical_Activity_Guidelines_2nd_edition.pdf"
            },
            {
              label: "Why sitting for long periods of time is bad for you",
              link:
                "http://ed.ted.com/lessons/why-sitting-is-bad-for-you-murat-dalkilinc#review"
            }
          ],
          image: health2
        },
        mental_health: {
          className: "mentalhealth-card",
          title: "Mental Health",
          subTitle:
            "How might we counteract the always-on culture that currently pervades society?",
          introduction:
            "The internet and mobile devices have fundamentally changed the way that people live and work. While these technologies have the potential to bring the world closer together,  they also create an  always-on culture that has blurred the boundaries between work life and home life which can have negative consequences for mental health. Work emails are increasingly being sent out after work hours and over the weekend. Nature is no longer a refuge for tranquility, with emails and notifications coming through in most national parks. Work aside, social media also puts strain on personal lives. Social media not only distracts people with endless scrollable content, it also promotes unrealistic standards of fitness, beauty, and lifestyle which generate additional stress. The sum total of these trends is that people are working harder than ever and feeling increasingly inadequate at work and in their personal lives",
          angles:
            "This challenge explores a variety of challenges associated with mental health. Decision fatigue, fear of missing out, feelings of inadequacy, little time for self-care, and a lack of face-to-face connection with friends and loved ones are driving a rise in mental illnesses",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Always-on society",
              desc:
                "How might we create clearer breakpoints between our work lives and personal lives to counteract the always-on culture that currently pervades society?"
            },
            {
              label: "Stress-relief",
              desc:
                "What amenities might we offer throughout the city that people can use to destress after a long workday and commute?"
            },
            {
              label: "Establishing realistic expectations ",
              desc:
                "How might we help people develop more realistic and empathetic perceptions of themselves and others?"
            },
            {
              label: "Detection and resources",
              desc:
                "How might we better identify and support people with mental health issues?"
            },
            {
              label: "Awareness",
              desc:
                "How might we improve education and awareness about mental health issues?"
            }
          ],
          resources: [
            {
              label: "National Alliance on Mental Illness (NAMI)",
              link: "https://www.nami.org/"
            },
            {
              label: "UCSD Counseling and Psychological Services (CAPS)",
              link: "https://wellness.ucsd.edu/CAPS/Pages/default.asp"
            },
            { label: "Care at Sarc", link: "care.ucsd.edu" },
            { label: "Up2SD", link: "https://up2sd.org/" },
            {
              label: "Mental Health America of San Diego",
              link: "https://mhasd.org/"
            },
            { label: "The Zone", link: "http://zone.ucsd.edu/" }
          ],
          image: health3
        },
        nutrition_and_food_systems: {
          className: "nutritionfood-card",
          title: "Nutrition and Food Systems",
          subTitle:
            "How might we ensure that everyone in San Diego has reliable access to nutritious and affordable food?",
          introduction:
            "Diet contributes to many of the leading causes of mortality in the United States. Obesity, heart disease, stroke, and diabetes are all diseases that can be affected by dietary choices. Although underlying genetic risk-factors are also part of the equation, dietary choices are essential aspects that need to be considered. In addition to poor diets, many people in San Diego and across the nation do not have reliable access to food. In the San Diego region, alone, the San Diego Hunger Coalition’s data shows that 443,000 or one in seven people in San Diego Country experienced food insecurity during 2017. This lack of access to high-quality food sources needs to be addressed to improve health outcomes across the board.",
          angles:
            "As populations continue to put stress on traditional farming approaches, factory farms attempt to scale farming to meet the need. Although effective, these farms can require significant amounts of pesticides and soil enhancing chemicals (such as nitrogen) to maintain monoculture farms. Shifts to new farming methods, localizing food production, reducing pesticide use, and rerouting food that is not going to be consumed are important areas in need of solutions!  ",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Food insecurity",
              desc:
                "how can we provide support for food insecure people while improving access and utilization of nutritional foods? "
            },
            {
              label: "Butterfly Highways",
              desc:
                "How might we protect pollinators and help pollinators move freely through the city to help gardens and plants thrive? "
            },
            {
              label: "Locavore Movement",
              desc:
                "How might we localize food systems to provide enough food for densely populated cities?"
            },
            {
              label: "Food Rerouting",
              desc:
                "How might we reroute food that is about to expire to people who need it? "
            }
          ],
          resources: [
            {
              label: "San Diego Hunger Coalition",
              link: "https://www.sandiegohungercoalition.org/"
            },
            {
              label: "CalFreshSenior Meals (Federal and Private)",
              link: "http://mycalfresh.org/"
            },
            {
              label: "Food Distribution Program on Indian Reservations (FDPIR)",
              link: ""
            },
            {
              label: "2017 San Diego Food Insecurity Brief",
              link:
                "https://static1.squarespace.com/static/55130907e4b018f9300f3e63/t/5d950396add27716ad9e4f7b/1570046871072/HFSD+Data+Release++2017+Food+Insecurity+FINAL.pdf"
            },
            {
              label: "2017 San Diego Food Insecurity Data",
              link:
                "https://static1.squarespace.com/static/55130907e4b018f9300f3e63/t/5d950745b369e31c823197e5/1570047817891/2017+Food+Insecurity+two-page+brief.pdf‰"
            },
            {
              label: "Food Is Medicine",
              link:
                "https://nutrition.tufts.edu/sites/default/files/documents/FIM%20Infographic-Web.pdf"
            },
            {
              label: "Film Screening Helps Change Perspective on Plant-Based Diets",
              link:
                "http://www.livewellsd.org/content/livewell/home/all-articles/news/February2020/Film-Screening-Helps-Change-Perspectives-on-Plant-Based-Diets.html"
            }
          ],
          image: health4
        }
      }
    },
  
    mobility: {
      title: "MOBILITY CHALLENGES", // the first title above main article title
      heading: "MOBILITY: How might we help people move freely in San Diego?",
      challenges: {
        lastmile: {
          className: "lastmile-card",
          title: "Last Mile", // main header
          subTitle:
            "How might we improve the last-mile experience where traffic is congested, parking is scarce, and public transportation is limited?",
          introduction:
            "The last mile of a commute is often the least efficient. Traffic congestion, searching for parking, and navigating through pedestrians, scooters, and bicycles all contribute to this problem. As cities become larger and more densely populated these challenges will be exacerbated. How might we mitigate these challenges associated with the last mile of a commute?",
          // General description of angles for this challenge
          angles:
            "One way to consider the problem is to think about a specific stakeholder. There are many transportation needs such as delivering products, commuting to work during rush hour, site-seeing, and going to bars late at night. Each of these contexts affects transportation needs and this may be different for each stakeholder group, such as children, young professionals, or elderly people. Is there a way to create an adaptive use that meets all these people's needs?   Consider the following possible angles for your project:",
          // list of examples of angles to explore from with label and description, creates a bulleted list
          // you may enter label as <a href="link_to_somewhere">Parking</a> to enter html content instead
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Parking",
              desc:
                "How can parking be more efficient and account for short-term and long-term parking needs in San Diego?"
            },
            {
              label: "Micro-mobility",
              desc:
                "How can scooters, bikes, and skateboards make short-term trips?"
            },
            {
              label: "Public Transportation",
              desc:
                "How can we improve the public transportation as ridership increases?"
            },
            {
              label: "Multi-modal transportation",
              desc:
                "How can we optimize each leg of our commute for the given context?"
            }
          ],
          // list of resources. Creates a bulleted list with label and link
          resources: [
            {
              label: "Overnight Parking Lot Program",
              link:
                " https://www.nbcsandiego.com/news/local/encinitas-city-council-to-vote-on-safe-overnight-parking-lot-program/2248554/"
            },
            {
              label: "Bike Lane Project",
              link:
                " https://www.nbcsandiego.com/news/local/city-moving-forward-with-compromise-in-north-park-bike-lane-project/2242608/"
            },
            {
              label: "Thoughts on Microtransit",
              link:
                " https://humantransit.org/2018/02/microtransit-what-i-think-we-know.html"
            },
            {
              label: "OFO Bikes removed from campus",
              link:
                " http://triton.news/2017/04/yellow-ofo-bikes-removed-campus-friday/"
            },
            {
              label: "Trolley project",
              link: " https://onthego.ucsd.edu/projects/trolley-lrt.html"
            },
            {
              label: "Crowd-sourcing in NYC",
              link:
                " https://medium.com/transit-app/how-were-bringing-real-time-countdowns-to-nyc-s-lettered-lines-482d3b8f9899"
            },
            {
              label: "Fare Evasion",
              link:
                " https://www.sandiegouniontribune.com/news/transportation/story/2020-01-10/mts-tickets-for-fare-evasion-spike-criminalizing-poverty"
            },
            {
              label: "Uber's New Favorite Driver Feature",
              link:
                " https://www.nbcsandiego.com/news/california/uber-to-drop-upfront-pricing-let-users-choose-favorite-drivers/2241607/?"
            },
            {
              label: "Airport Skyway Project",
              link:
                " https://www.10news.com/news/-skyway-from-airport-to-downtown-san-diego-could-work-study-says"
            }
          ],
          image: mobility1
        },
    
        // SAFE ROADWAYS
        safe_roadways: {
          className: "safety-card",
          title: "Safer Roadways",
          introduction:
            "What is the difference between safe intersections and dangerous ones? What kinds of intersections provide more safety for pedestrians and bikers (e.g. roundabouts and t-junctions)? It’s also imperative that we educate the public about these intersections, and pedestrian safety in general. Education is an effective tool that can be used to give pedestrians alternate routes or even alternate forms of transportation.However, providing education requires some amount of time (rather asking a person to read a pamphlet or listen to a public service announcement), and may not be applied at the appropriate time to encourage someone to alter their behaviors.",
          subTitle:
            "Given the city’s aim to reduce roadway fatalities to zero, how might we protect pedestrians, reduce distractions for drivers, and improve emergency response?",
          angles:
            "One angle to consider is the Fatal 15, the 15 intersections in the San Diego area that have the highest number of pedestrian deaths and injuries since 2001. Is it possible that these intersections, like Mission Blvd. and Garnet Ave., have something in common that is causing this lack of safety? Circulate San Diego, a local non-profit devoted to promoting safe neighborhoods, streets and intersections compiled the list and estimates the cost to address these dangers at approximately $200,000. Addressing these dangerous spots is important, as is understanding how a spot becomes dangerous over time. What are the early warning signs that an intersection might be deadly, before someone is actually killed in a traffic accident? Here are other options for you to explore as well:",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Last Mile",
              desc:
                "The last mile of a commute is often where cars interact with pedestrians and other modes of transportation. How do we encourage a less dangerous interface between cars and pedestrians in the last mile of a commute?"
            },
            {
              label: "Intersections and Bike Lanes",
              desc:
                "45% of bike accidents that involve a car happen at intersections. How can we modify intersections to encourage safer interactions between bikes and cars?"
            },
            {
              label: "Reducing Speed",
              desc:
                "The introduction of micro-mobility solutions, walkers share the sidewalk with bikes, scooters, skateboards and many other modes of transportation. How can we prevent micro-mobility devices from interfering with sidewalk use by pedestrians?"
            },
            {
              label: "Public Health",
              desc:
                "Many people are discouraged from using public transportation because of sanitation concerns. How can we communicate to riders that MTS buses are a clean environment?"
            }
          ],
          resources: [
            {
              label: "Pedestrian Safety",
              link:
                "https://www.governing.com/topics/public-justice-safety/gov-transportation-anthony-foxx-pedestrian-safety.html"
            },
            {
              label: "Road Safety San Diego",
              link: "https://www.makeroadssafe.org/san-diego-road-safety-overview/"
            },
            {
              label: "Sidewalk Repair",
              link:
                "https://www.sandiegouniontribune.com/communities/san-diego/story/2020-01-02/san-diego-may-spend-100m-on-aggressive-sidewalk-repair-campaign-as-injury-payouts-mount"
            },
            {
              label: "Vision Zero",
              link: "https://www.youtube.com/watch?v=EkcAZQOzJV0&feature=emb_logo"
            },
            {
              label: "Roundabouts",
              link:
                "https://safety.fhwa.dot.gov/intersection/innovative/roundabouts/"
            },
            {
              label: "Bike Lanes vs. Parking",
              link: "https://www.youtube.com/watch?v=E85HMNJix_o"
            },
            {
              label: "Speeding in Rural Areas",
              link:
                "https://www.sandiegouniontribune.com/news/public-safety/story/2019-04-20/san-diego-communities-have-urged-officials-to-keep-speed-limits-low-in-conflict-with-state-law-now-officers-cant-use-radar-guns-on-those-stretches-of-road"
            },
            {
              label: "Trolley Ridership",
              link:
                "https://www.sandiegouniontribune.com/news/transportation/story/2019-11-06/san-diego-mts-sees-recent-spike-in-trolley-bus-ridership"
            }
          ],
          image: mobility2
        },
    
        // PUBLIC TRANSPORT
        equitable_access: {
          className: "equitable-card",
          title: "Equitable Access to Public Transportation",
          subTitle:
            "How might we provide mobility resources that are accessible to the many diverse needs of people in San Diego?",
          introduction:
            "In one day, a person experiencing homelessness, a first-year student dorming at UCSD, and a businessperson in Carmel Valley might all want to take a trip to the Downtown Library. To the businessperson in her Prius, the first year with access to ridesharing apps, and the person experiencing homelessness without a car or enough income to rideshare, the same trip to and from the library would be radically different in difficulty. Yet, all three people are citizens of San Diego. All share the right to access its public spaces, and all share the need to move about the city for work, food, and play. Citizens of our city may have different levels of physical ability or financial access, and the city's transportation networks cannot restrict their access on these grounds.",
          angles:
            "San Diego's history makes it a challenge to ensure public transportation is accessible. The privileging of the automobile placed public transportation in a second-class role. Existing public transportation may face low levels of ridership, local opposition to expansion, and the challenge of servicing sparsely populated, spread-out areas. Think about how to make public transit a priority for lawmakers and for new riders to reduce the city's overall carbon footprint.",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Public transport networks",
              desc:
                "How might public transportation networks in rural areas increase their ridership when the population is very spread out?"
            },
            {
              label: "Prefer car over public transport",
              desc:
                "How might people in higher income strata come to see public transit as preferable over their car?"
            },
            {
              label: "Funding constraints",
              desc:
                "How might we integrate areas of San Diego such as Torrey Pines or Carmel Valley into the city's public transportation network, given political and funding constraints?"
            }
          ],
          resources: [
            {
              label: "Opinion on San Diego's Public Transit",
              link:
                "https://thedailyaztec.com/95026/opinion/san-diego-needs-better-public-transit/"
            },
            {
              label: "Ridership Trends",
              link:
                "https://www.sandiegouniontribune.com/news/transportation/story/2019-10-20/nationwide-transit-ridership-plummeting-san-diego-buck-trend"
            },
            {
              label: "How to Solve a Traffic Jam",
              link:
                "https://www.sandiegouniontribune.com/news/environment/story/2019-04-13/what-is-congestion-pricing-exactly-and-can-it-solve-traffic-jams-in-san-diego-as-experts-promise"
            },
            {
              label: "MTS Elevate SD Program",
              link: "http://elevatesd2020.com/projects/"
            }
          ],
          image: mobility3
        },
    
        // AUTONOMOUS VEHICLES
        autonomous_vehicles: {
          className: "autonomous-card",
          title: "Autonomous Vehicles",
          subTitle:
            "With the potential of self-driving cars on the horizon, how might we prepare our city for major changes to transportation infrastructure?",
          introduction:
            "Autonomous vehicles are no longer a concept of the future. Uc San Diego is currently using self driving cars to deliver mail and figuring out how to further implement this new tool. With this new innovation, we need to consider how the city of San Diego can best prepare for the predicted effects of driverless cars.",
          angles:
            "The share economy has already made housing and micro-mobility available for temporary use by multiple people. Companies like Lyft and Uber pose feasible examples of what San Diego could look like when autonomous vehicles begin hitting the streets. With limitations on parking, car insurance, cost of ownership, and varying mobility needs; is it possible that autonomous vehicles could solve all these problems? And, if so, what challenges will we face when driverless cars become the new normal?",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Encourage Tourists",
              desc:
                "How might we encourage trust in autonomous vehicles when some members of the public see them as new and dangerous?"
            },
            {
              label: "Transportation Sector",
              desc:
                "How might we respond to job loss in the transportation sector as more vehicles become autonomous?"
            },
            {
              label: "Integrate self driving vehicles",
              desc:
                "How might we integrate self driving vehicles into existing strategies of transit-oriented development?"
            }
          ],
          resources: [
            {
              label: "How Close are we to a Self Driving World",
              link: "https://www.youtube.com/watch?v=U5laBg-ERbQ&feature=emb_logo"
            },
            {
              label: "Self Driving Mail Delivery",
              link:
                "https://www.nbcsandiego.com/news/local/uc-san-diego-rolls-out-self-driving-mail-delivery-cars/2230426/"
            },
            {
              label: "Interfering with Transit",
              link:
                "https://www.sandiegouniontribune.com/columnists/story/2019-10-23/column-self-driving-vehicles-loom-over-transit-plans"
            }
          ],
          image: mobility4
        }
      }
    },
  
    environment: {
      title: "ENVIRONMENT CHALLENGES",
      heading: "ENVIRONMENT: How might we prepare San Diego for natural and human-influenced environmental challenges?",
      challenges: {
        community_infrastructure: {
          className: "communityinfra-card",
          title: "Community Infrastructure and Resilience",
          subTitle:
            "How can we prepare San Diego to be resilient in the face of climate change, beach erosion, and rising water levels?",
          introduction:
            "Cities around the world are preparing to face the negative effects that climate change will have on their physical infrastructure. Already, cities at sea level like Venice are experiencing historically high floods that affect residents and threaten to drastically change how people are able to continue to live there in the future. Here in San Diego, we are located by the coast. As sea levels are projected to rise, flooding can directly impact neighborhoods and communities along the coast line, threatening to displace thousands of people. In late 2019, California lawmakers said that the state must act now to prevent the negative impacts of sea level rise, citing cities like San Diego.",
          angles:
            "One new way to build healthy, sustainable infrastructure now is by focusing on localized, immediate community needs. This might include, for example, curating more public spaces like libraries. Libraries are educational and social hubs for communities, but they also provide free, public air-conditioning, which can be the difference between life and death for the young or elderly on a historically hot day. Another example: Public community gardens provide food for a neighborhood, but also absorb C02 emissions and purify the air we breathe. By producing more food locally, carbon emissions from transportation can also be reduced. Relating to rising sea levels, finding ways to build structures to prevent future flooding and educating residents about what to do in the event of the flood can help mitigate the effects of flooding. Public spaces, such as libraries, can also be reappropriated to house or support residents during climate crises.",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Unused spaces",
              desc:
                "How might we repurpose unused spaces (ex. abandoned buildings, vacant lots) in communities into vibrant hubs that promote local resource production?"
            },
            {
              label: "Sea level rise",
              desc:
                "How might we prepare San Diego residents living near the coastline to physically protect their properties against rising sea levels?"
            },
            {
              label: "Community engagement",
              desc:
                "How might we encourage more residents to actively participate in existing community gardens and learning hubs in San Diego?"
            },
            {
              label: "New infrastructure",
              desc:
                "How might we improve existing parks and spaces to integrate more infrastructure that reduces carbon emissions?"
            }
          ],
          resources: [
            {
              label: "San Diego Community Garden Network",
              link: "http://sdcgn.org/"
            },
            {
              label: "San Diego Sierra Club",
              link: "http://sandiegosierraclub.org/"
            },
            {
              label: "San Diego Coastkeeper",
              link: "https://www.sdcoastkeeper.org/"
            },
            {
              label: "Downtown parks and spaces: America's worst?",
              link:
                "https://www.sandiegouniontribune.com/business/growth-development/sd-fi-parkspaces-20170918-story.html"
            },
            {
              label: "Meet East Village Green",
              link:
                "https://www.sandiegouniontribune.com/business/growth-development/story/2019-05-09/meet-east-village-green-the-citys-most-expensive-downtown-park"
            },
            {
              label:
                "Design for America Spotlights Climate Change in Local Communities",
              link:
                "https://www.mccormick.northwestern.edu/news/articles/2019/08/as-design-for-america-turns-10-summit-spotlights-climate-change-effects-in-local-communities.html"
            },
            {
              label: "Resilience Roundup - Public Spaces Fighting Climate Change",
              link:
                "https://www.pps.org/article/resilience-roundup-public-spaces-fighting-climate-change"
            },
            {
              label: "California Must Act Now to Fight Sea Level Rise",
              link:
                "https://www.latimes.com/california/story/2019-12-04/sea-level-rise-special-committee-california-assembly"
            },
            {
              label: "Getting Ready for Sea Level Rise",
              link:
                "https://ucsdnews.ucsd.edu/feature/getting-ready-for-sea-level-rise"
            }
          ],
          image: climate4
        },
        education_and_awareness: {
          className: "education-card",
          title: "Education and Awareness",
          subTitle:
            "How might we make people more aware of and responsible for their own personal impact on the environment?",
          introduction:
            "There is significant scientific evidence that climate change is occurring and that it is caused by human activity. For example, NASA is currently presenting a variety of evidence to support this claim (https://climate.nasa.gov/evidence/). But the evidence of climate change can also be observed directly in rising sea levels, fluctuations in global temperatures, and the destabilization of environmental ecosystems. In recent years, the effects of climate change and the broader concept of environmental sustainability has garnered national attention and debate. Here in San Diego, there is a push to integrate climate change education in classrooms and communities. San Diego Unified has supported climate change education, defining it as “an understanding of the human influence on the climate and the climate’s influence on humanity.” Organizations like San Diego 350 use climate change education and outreach to build a movement and “to prevent the worst impacts of climate change and climate injustice.",
          angles:
            "Current research shows that a majority (69%) of Americans actually believe that climate change is a man-made phenomenon, challenging misconceptions that people do not believe in man-made climate change. Understanding that a majority of the public think that climate change is occurring, think it is a serious threat, and would support climate policies can help build public understanding, acceptance, and support around combating climate change. Despite a majority of the public believing in man-made climate change and the push for climate change education, a portion of the public is still skeptical about whether climate change exists and is caused by human activity. Furthermore, people (especially young people) can often feel a sense of hopelessness about climate change. Even if people recognize it exists, people can be unsure of what they can personally do to take meaningful action in response to climate change. Creating pathways for collective action, education, and advocacy may be one direction where new initiatives can be created to empower people to tackle climate change.",
          presenting_evidence:
            "Presenting Evidence: How might we present the evidence for climate change in a way that is engaging and easy to understand?",
          angle_examples: [
            {
              label: "K-12 Education",
              desc:
                "How might we create new educations programs for K-12 students to learn about climate change and how they can take action?"
            },
            {
              label: "Adult Conversations",
              desc:
                "How might we create new resources for adults to have informed conversations with other adults about climate change?"
            },
            {
              label: "Creating Connections",
              desc:
                "How might we connect people who want to take action against climate change with relevant resources and organizations in San Diego?"
            }
          ],
          resources: [
            { label: "San Diego 350", link: "https://sandiego350.org" },
            { label: "UCSD Green New Deal", link: "https://ucsdgreennewdeal.net/" },
            {
              label: "Climate Education Partners",
              link: "https://www.sandiego.edu/climate/"
            },
            {
              label: "Climate Action Network",
              link: "https://www.sdclimatenetwork.org/"
            },
            {
              label: "Sunrise San Diego",
              link: "https://www.sunrisemovement.org/"
            },
            {
              label: "Climate Change Education in SD",
              link:
                "https://timesofsandiego.com/education/2018/05/29/climate-change-education-across-san-diego-unified-gets-board-support/"
            },
            {
              label: "Climate Protest at UCSD",
              link:
                "http://ucsdguardian.org/2019/09/29/climate-change-forefront-protest/"
            },
            {
              label: "Climate Strike in SD",
              link:
                "https://www.nbcsandiego.com/news/local/Climate-Strike-San-Diego-Walk-Rally-Earth-Environment-560892601.html"
            },
            {
              label: "Yale Research on Public Perception of Climate Change",
              link:
                "https://climatecommunication.yale.edu/publications/americans-underestimate-how-many-others-in-the-u-s-think-global-warming-is-happening/"
            },
            {
              label: "UMich How to Teach People About Climate Change",
              link:
                "https://record.umich.edu/articles/teaching-about-climate-needs-to-empower-students-toward-change/"
            }
          ],
          image: climate1
        },
        waste_management: {
          className: "waste-card",
          title: "Waste Management",
          subTitle:
            "How might we create a circular loop that transforms “waste” into useful resources?",
          introduction:
            "It’s no secret that Americans create a lot of waste. In fact, Americans create over 200 million tons of waste per year, and only about 25% of that actually gets recycled. Even though we all know the waste we create is an issue, it’s difficult to pinpoint how we contribute to those huge numbers, or what we can do about it. While “Reduce, Reuse, Recycle” might seem like a ubiquitous phrase today, it originated as an educational tool out of the 1970’s environmental movements; it was a way of making the public aware that there were alternatives to the landfill. The three R’s, however, need an update. Reducing, Reusing, and Recycling are often thought of as one set of actions when in reality, Recycling should be the last resort. We need to reshape the public’s understanding of how to tackle the contamination of our planet and shift thinking away from recycling – which has become even more ineffective in recent years – and towards reducing the waste that we create in the first place. In San Diego, there are a number of zero-waste movements. For example, the City of San Diego plans to divert all solid waste from going into the landfill through their Zero Waste Plan. They are are also now capturing the gases from decomposition and turning them into energy. A Resource Recovery Center and “one-stop shop” at Miramar Landfill will maximize waste diversion. The City will also increase curbside recycling and curbside greenery collection. Another example is UC San Diego, which is committed to achieving zero waste by 2020.",
          angles:
            "While large organizations are moving towards zero-waste, individuals and communities can find innovative ways to reduce waste as well. The average American produces over 1,700 pounds of garbage per year. One way to reduce waste is to look into creating circular loops (ex. the circular economy) that transforms “waste” into useful resources. There is significant room for the development of new products and community-centered services that repurpose waste products in everyday life. For example, one shoe company is turning old tires into the soles of new shoes!",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Repurposing Single-Use Objects",
              desc:
                "How might we repurpose common, single-use products into new products that are useful and durable?"
            },
            {
              label: "3R Skillset",
              desc:
                "How might we share personal insights we learn about reduce, reuse, and recycling with other members of the community?"
            },
            {
              label: "Financial Incentives",
              desc:
                "How might we create new financial incentives to encourage people to effectively recycle used goods?"
            },
            {
              label: "Improving Recycling",
              desc:
                "How might we analyze existing recycling systems in order to find new opportunities to maximize the number of materials that can be recycled?"
            }
          ],
          resources: [
            {
              label: "Zero Waste San Diego",
              link: "http://zerowastesandiego.org/"
            },
            { label: "I Love a Clean SD", link: "https://wastefreesd.org/" },
            {
              label: "Zero Waste Artisans",
              link:
                "http://sdcitybeat.com/culture/features/San-diego-zero-waste-artists"
            },
            {
              label: "UCSD Sustainability",
              link: "https://sustainability.ucsd.edu/focus/zero-waste.html"
            },
            {
              label: "City of San Diego Recycling Programs",
              link: "https://www.sandiego.gov/environmental-services/recycling"
            },
            {
              label: "City of San Diego Zero Waste Plan",
              link:
                "https://www.sandiego.gov/sites/default/files/legacy/environmental-services/pdf/recycling/ZWPlan.pdf"
            },
            {
              label: "City of San Diego Residential Recycling Plan",
              link:
                "https://www.sandiego.gov/sites/default/files/legacy/environmental-services/pdf/recycling/recycguide.pdf"
            },
            {
              label: "Tossing Trash Article",
              link:
                "https://www.10news.com/news/local-news/report-county-residents-tossing-more-trash"
            },
            {
              label: "Zero Waste San Diego",
              link:
                "https://www.kpbs.org/news/2015/jul/16/how-san-diegos-zero-waste-plan-different-standard-/"
            },
            {
              label: "Expanding Zero Waste San Diego",
              link:
                "https://www.latimes.com/california/story/2019-10-28/san-diego-expands-city-dump-zero-waste-policy"
            },
            {
              label: "Article on To-Go Coffee Cups",
              link:
                "https://www.sfchronicle.com/restaurants/article/To-go-coffee-cups-could-become-a-thing-of-the-14821391.php"
            },
            {
              label: "Article on What You Can't Recycle",
              link:
                "https://www.discovermagazine.com/environment/are-you-an-aspirational-recycler-heres-9-things-you-actually-cant-recycle"
            }
          ],
          image: climate2
        },
        smart_grids: {
          className: "grid-card",
          title: "Smart Grids and Smart Homes",
          subTitle:
            "How might we design services to help people monitor and better allocate energy resources at home and across neighborhoods?",
          introduction:
            "In recent years, the quantified-self movement - using technology to monitor one's own behavior - has taken off. Products like the Apple Watch and Fitbit that monitor these activities have revolutionized the way that people track everything from exercise to sleep. There is an opportunity for new products and services to be developed that help people monitor their personal and home energy usage. Here in San Diego, the city offers residents rebates for buying such products and services. Even then, not all homes can afford to buy these kinds of products and technology and many people do not know where to start when it comes to tracking their energy usage and carbon emissions.",
          angles:
            "In recent years, new products have been developed that help users track their energy usage at home. One such product is the Nest Learning Thermostat which is installed in a home and learns users' energy usage behaviors over a given time period in order to better allocate energy resources throughout the day. Similarly, smart meters are being installed by cities to replace aging water meters in homes in order to give city public works officials more accurate and timely knowledge of a home or community's water usage in order to adapt to community needs. Another example is the app offCents which accurately tracks and individual's carbon emissions through their transportation methods and allows users to make donations to programs that will help offset their carbon emission.",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Measuring Emissions",
              desc:
                "How might we provide people with accurate measurements of their daily carbon emissions?"
            },
            {
              label: "Accessibility",
              desc:
                "How might we make smart home products more accessible to people in low-income communities?"
            },
            {
              label: "Maximizing Data",
              desc:
                "How might we help city officials find new uses for the data collected by new smart meters and smart home products?"
            }
          ],
          resources: [
            {
              label: "Offcents App",
              link:
                "https://offcents.com/#:~:targetText=offCents%20%2D%20Travel%20with%20Zero%20Emissions&targetText=offCents%20provides%20real%20time%2C%20automated,car%2C%20train%20or%20airplane%20trips"
            },
            {
              label: "Energy Rebates in San Diego",
              link:
                "https://www.sdge.com/residential/savings-center/rebates/rebates-your-home"
            },
            {
              label: "Nest Learning Thermostat",
              link:
                "https://store.google.com/us/product/nest_learning_thermostat_3rd_gen"
            }
          ],
          image: climate3
        }
      }
    },
  
    housing: {
      title: "HOUSING CHALLENGES",
      heading: "HOUSING: How might we reimagine housing to meet the needs of all San Diegans?",
      challenges: {
        housing_and_placemaking: {
          className: "mixuse-card",
          title: "Mixed Use Housing and Placemaking",
          subTitle:
            "How might we foster a sense of place and community in the face of vacation rentals, mixed-use houses, and gentrification?",
          introduction:
            "On any single day, a person in San Diego has many needs they may want satisfied: work, food, social interaction, exercise, and more. Access to these needs, under car-centered development patterns of the recent past, have been separated from one another and relatively inaccessible by foot, bicycle, or public transit. This separation of uses potentially has consequences for an area's sense of place, because the elements which produce that sense — food, recreation, commerce, work — are removed from the walkable, human scale in which daily life is experienced.",
          angles:
            "One way to find methods for placemaking is to look at positive examples, past and present. For instance, cities are taking inspiration from the vibrant main streets of the past as exemplars in how we might live today. Cities are paying attention to zoning policies like Portland's urban growth boundary, which densify and diversify development. Here in San Diego, the city has responded with a strategic framework called the “City of Villages” plan, which “focuses growth into mixed use activity centers that are pedestrian-friendly districts linked to an improved regional transit system.” However, these centers need the insight of the people living in and around them in order to realize their full potential as centers for life, culture, and belonging in San Diego.Ï",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Translate urban growth boundaries",
              desc:
                "How might San Diego translate insightful land use policies like Portland's urban growth boundary into our city's unique situation?"
            },
            {
              label: "City of Villages",
              desc:
                "How can San Diegans carry out the “City of Villages” strategic framework while still maintaining productive lines of communication between neighborhoods?"
            },
            {
              label: "Legal Structure",
              desc:
                "How might we build a legal structure that allows community insights to be represented in San Diego's built environment, without allowing local resistance to stop important building like affordable housing?"
            },
            {
              label: "Reflective Culture",
              desc:
                "How might we create neighborhood identities that reflect the people, culture, and history of a neighborhood?"
            },
            {
              label: "Adapt Public Spaces",
              desc:
                "How might we adapt public spaces to better support a variety of purposes?"
            },
            {
              label: "Lower Financial Barriers",
              desc:
                "How might we lower financial barriers to living in and co-producing our neighborhoods?"
            }
          ],
          resources: [
            {
              label: "SD Union-Tribune article on “complete communities”",
              link:
                "https://www.sandiegouniontribune.com/communities/san-diego/story/2019-12-05/new-san-diego-proposal-goes-beyond-housing-to-seek-complete-communities"
            },
            {
              label: "Mixed-use buildings on Urban Hub",
              link:
                "http://www.urban-hub.com/buildings/mixed-use-buildings-for-diversified-sustainable-sites/"
            },
            { label: "City Lab", link: "https://www.citylab.com/" },
            {
              label: "Placemaking on Archdaily",
              link:
                "https://www.archdaily.com/886275/placemaking-movement-manifesto-tool-buzzword-or-what"
            },
            {
              label: "Criticism of placemaking",
              link:
                "http://jamessrussell.net/enough-of-bogus-placemaking/?utm_medium=website&utm_source=archdaily.com"
            },
            {
              label: "City of San Diego land use council",
              link:
                "https://www.sandiego.gov/council-committees/land-use-housing-committee"
            }
          ],
          image: housing1
        },
        resilient_homes: {
          className: "resilient-card",
          title: "Resilient Homes",
          subTitle:
            "How might we make homes and communities more resilient to the effects of climate change, such as desertification, fires, flooding, and beach erosion?",
          introduction:
            "The increases in floods, fires, hurricanes, and other natural disasters around the world continue to expose the fragility of modern human society, and in particular the fragility of our built environment. We continue to see that our homes are unable to withstand these pressures. Furthermore, we don’t have adequate physical, social, economic infrastructure to support those who are displaced. Take for example the growing contentious relationship between homeowners and insurance companies. Thus far we have spent much of building developments around permanent structures, and have begun to invest more time and energy into the development of temporary shelters. Although ensuring that people are physically safe is essential following these events, these ideas do little for the people who are potentially experiencing the most traumatic events of their life.",
          angles:
            "We can think about this in terms of the house itself, as well as the individuals who live in the house, and what their specific needs are when the house is placed under stress. Thinking about the house as the unit of analysis, it can be helpful to think about the way that the structure is performing when placed under different environmental pressures. The notion performing here means, how are specific components of the house adapting to changes in its environment. If you are interested in exploring how the house itself can be improved, it can be helpful to dissect some specific elements of the house and reimagine how they might respond, adapt, or be repurposed when placed under particular pressures. (Check out some of the additional lenses for looking at this issue below). Another way to look at the idea of resilient homes is through the eyes of the people that are experiencing the event itself. If beginning your inquiry from this lens, it might be helpful to think about what the house served prior to a disaster, and then thinking about how the loss or damage of the house directly impacts the lives of those who inhabit the structure. What has been briefly sketched out are a few ways of beginning to explore resilient homes.",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "",
              desc:
                "How might we use the lens of the individual house in order to nuance our existing knowledge of climate change resilience on a regional and national scale?"
            },
            {
              label: "",
              desc:
                "How might we compensate for emotional losses when people must move from areas that are no longer feasible to live in?"
            },
            {
              label: "",
              desc:
                "How might we fund the construction of climate change resilience adaptations when the developers of a project are no longer invested in the site?"
            },
            {
              label: "",
              desc:
                "How can we make homes more resilient to climate change, desertification, and other environmental challenges facing San Diego?"
            }
          ],
          resources: [
            {
              label:
                "San Diego's Flood Hazard Analysis (scroll to Section 5 & Section 8)",
              link:
                "https://www.sandiego.gov/sites/default/files/legacy/tsw/pdf/fmp.pdf"
            },
            {
              label: "Hazard Mitigation Grant Program",
              link: "https://www.fema.gov/"
            },
            {
              label: "Innovations in Inclusive Housing",
              link:
                "https://techcrunch.com/2019/05/13/a-market-map-of-the-housing-startup-space/"
            },
            {
              label: "Rural Housing Development",
              link:
                "https://www.researchgate.net/post/What_are_technologies_available_for_affordable_rural_and_urban_Housing_Development"
            },
            {
              label: "Impacts of climate-related disasters on housing insurance",
              link: "https://www.youtube.com/watch?v=U4VNX6483CA"
            },
            {
              label: "Refugee Housing",
              link:
                "https://www.dezeen.com/2015/09/15/suri-modular-refugee-housing-system-emergency-shelter-suricatta-systems-urbana-de-exteriores/"
            },
            {
              label: "San Diego Gov",
              link: "https://www.sandiegocounty.gov/content/sdc/dpw/flood.html"
            },
            {
              label: "Map of San Diego disasters risk areas",
              link:
                "https://www.arcgis.com/apps/webappviewer/index.html?id=1f35f94756bc45f9960717cbd15488a8"
            },
            {
              label: "What happens to a house during a flood",
              link:
                "https://www.washingtonpost.com/graphics/2018/national/flooded-home/"
            }
          ],
          image: housing2
        },
        homelessness: {
          className: "homelessness-card",
          title: "Homelessness",
          subTitle:
            "How might we address the safety, shelter, and nutritional needs of people who are without housing for short-term and long-term periods of time?",
          introduction:
            "As urban areas develop and the cost of owning land increases, many residents are having a difficult time paying rent and mortgages. For many professions the salaries are not able to keep up with housing prices. As a result, 40% of Americans say that they would “struggle to come up with $400 for an unexpected expense.” These expenses, such as a parking ticket or a surprise visit to the doctor, can be the difference between paying rent and being evicted. Because the pathways to homelessnesss and experiences of homeless people are varied and complex, it is important to think about homelessness from a human-centered perspective.",
          angles:
            "One of the most promising methodologies to approaching homelessness has been to develop holistic communities that address the social, emotional and economic dimensions of those who are homeless. These methods seek to utilize the skills, talents, and aspirations of those who were previously homeless to fuel the economic forces that support the communities being built. However, one of the most important things to keep in mind is that many of the most effective initiatives are addressing the social dimensions of the issue as well as the physical need.",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Leveraging assets",
              desc:
                "How might we utilize the skills and talents of homeless individuals to build resilient communities?"
            },
            {
              label: "Belongings",
              desc:
                "How might we redesign San Diego to provide safe spaces for homeless people to store and protect their belongings?"
            },
            {
              label: "Transitional housing",
              desc:
                "How might we make the transition to rehousing easier for homeless people in San Diego?"
            },
            {
              label: "Crising housing",
              desc:
                "How might we provide emergency housing during large scale displacement, what sort of spaces would we open up to support our neighbors?"
            }
          ],
          resources: [
            {
              label: "National Homeless",
              link: "https://nationalhomeless.org/tag/history/"
            },
            {
              label: "Invisible People",
              link: "https://invisiblepeople.tv/"
            },
            {
              label: "The Governance Lab @ NYU",
              link: "http://thegovlab.org/?s=Homelessness"
            },
            {
              label: "The Housing Innovation Challenge",
              link: "https://www.housinginnovationchallenge.com/"
            },
            {
              label: "How big tech companies are affecting housing",
              link:
                "https://www.curbed.com/2019/1/2/18165392/2019-cities-housing-transit-traffic-big-tech"
            },
            {
              label: "Stand Together Foundation takes on Homelessness",
              link: "https://www.youtube.com/watch?v=pBB0JqxVlxs"
            },
            {
              label: "Homelessness in San Diego",
              link:
                "https://www.sandiegouniontribune.com/news/homelessness/sd-me-homeless-report-20181217-story.html"
            },
            {
              label: "Homelessness in America",
              link: "https://www.vox.com/2016/3/8/11173304/homeless-in-america"
            },
            {
              label: "Homelessness in LA",
              link:
                "https://www.nrpa.org/parks-recreation-magazine/2017/march/los-angeles-innovation-lab-tackles-homelessness/"
            },
            {
              label: "UIA approach to poverty Cycle",
              link:
                "https://www.uia-initiative.eu/sites/default/files/2018-12/Urban%20poverty%20Thematic%20paper.pdf"
            },
            {
              label: "New homelessness plan gets approved in SD",
              link:
                "https://www.10news.com/news/local-news/san-diego-city-council-approves-1-9-billion-homelessness-plan"
            },
            {
              label: "Moving forward with homelessness plan in SD",
              link:
                "https://www.sandiegouniontribune.com/news/homelessness/story/2019-10-14/san-diego-city-council-moves-forward-with-homeless-action-plan"
            },
            {
              label: "San Diego Housing Commission",
              link: "https://www.sdhc.org/homelessness-solutions/"
            }
          ],
          image: housing3
        },
        internet_of_things: {
          className: "iot-card",
          title: "Smart Homes (IoT)",
          subTitle:
            "How might we design services and internet-connected products for the home to make everyday life easier, more fun, and more secure?",
          introduction:
            "Over the past decade, the idea of “smart houses” has grown rapidly. Central to the concept of “smart houses” is the “Internet of Things.” The “Internet of Things”, aka IoT, refers to objects that are not typically connected to the Internet gaining the ability to connect to the internet and each other, making open, ad hoc connections, sharing data freely and allowing unexpected applications. Some examples of IoT objects that could be found within a house include smart refrigerators, microwaves, and doorbells. Adding several IoT objects to a house can transform it into a “smart house.” San Diego is in the process of the largest urban deployment of IoT nodes in North America.",
          angles:
            "Smart houses are already changing the way people live. For example, Ring is a home security and smart house company owned by Amazon that manufactures a range of home security products that incorporate outdoor motion-detecting cameras. Ring doorbells have allowed homeowners to monitor and protect their homes when they're not home. Ring has even provided law enforcement officials key video evidence to find subjects of interest. In the future, smart house technology is expected to continue to grow rapidly. Indeed, shows, movies, books, etc. that depict the future often depict people living in smart homes with IoT devices. However, as technology encroaches further into our homes, it is becoming more important to think about the impact that they might have on our lives as well as what sort of behaviors they might create or promote.",
          presenting_evidence: "",
          angle_examples: [
            {
              label: "Privacy vs convenience",
              desc:
                "How might we more explicitly consider and balance the trade-offs between privacy and convenience when adopting smart home technology?"
            },
            {
              label: "Closing the legislative loop",
              desc:
                "How might we reduce the time between technology innovation and legislation that protects consumers from privacy or security abuses?"
            },
            {
              label: "Awareness and agency",
              desc:
                "How might we make smart home users more aware of the current data collection practices associated with smart home technology?"
            },
            {
              label: "Connection",
              desc:
                "How can smart home technology connect us rather than isolate us while still keeping a sense of privacy and security?"
            }
          ],
          resources: [
            {
              label: "San Diego Makes Strong Bet on IoT, Telematics and Apps",
              link:
                "https://www.techwire.net/news/san-diego-makes-strong-bet-on-iot-telematics-and-apps.html"
            },
            {
              label:
                "Inspiring San Diego: Teens Propose Solutions to Stop Youth Sex Trafficking",
              link:
                "https://www.nbcsandiego.com/news/local/smart-city-saturday-hackathon-sex-trafficking-499509441.html"
            },
            {
              label:
                "San Diego to Cover Half the City with Intelligent Streetlights",
              link:
                "https://www.govtech.com/fs/San-Diego-to-Cover-Half-the-City-with-Intelligent-Streetlights.html"
            }
          ],
          image: housing4
        }
      }
    }
  }
};
