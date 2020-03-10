import mobility1 from "./img/mobility_lastmile_internal.jpg";
import mobility2 from "./img/mobility_safety.jpg";
// import mobility3 from "./img/mobility_equitable.jpg";
// import mobility4 from "./img/mobility_multimodal.jpg";
// import housing1 from "./img/housing_mixed.jpg";
// import housing2 from "./img/housing_resilient.jpg";
// import housing3 from "./img/housing_homelessness.jpg";
// import housing4 from "./img/housing_smart.jpg";
// import health1 from "./img/health_senior.jpg";
// import health2 from "./img/health_mental.jpg";
// import health3 from "./img/health_safety.jpg";
// import health4 from "./img/health_food.jpg";
import climate1 from "./img/climate_education.jpg";
import climate2 from "./img/climate_waste.jpg";
import climate3 from "./img/climate_coastal.jpg";
import climate4 from "./img/climate_community.jpg";
import Title from "antd/lib/typography/Title";

//str.split("\n").map((s) => s.split(/\:(.+)/,2));

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

export const challengesContent: {
  [key: string]: { [key: string]: ChallengeContent | string; title: string };
} = {
  environment: {
    title: "ENVIRONMENT CHALLENGES",

    education_and_awareness: {
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
      resources_partners: [
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
        { label: "Sunrise San Diego", link: "https://www.sunrisemovement.org/" }
      ],
      resources_news: [
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
        }
      ],
      resources_national: [
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
      resources_partners: [
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
        }
      ],
      resources_news: [
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
      resources_national: [{ label: "", link: "" }],
      image: climate2
    },
    smart_grids: {
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
      resources_partners: [
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
      resources_news: [],
      resources_national: [],
      image: climate3
    },
    climate_infrastructure: {
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
      resources_partners: [
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
        }
      ],
      resources_news: [
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
      resources_national: [],
      image: climate4
    }
  },

  mobility: {
    title: "MOBILITY CHALLENGES", // the first title above main article title

    // this is content for the page /challenges/mobility/lastmile
    lastmile: {
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
      resources_partners: [
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
      resources_news: [],
      resources_national: [],
      image: mobility1
    },
    safety: {
      title: "",
      subTitle: "",
      introduction: "",
      angles: "",
      presenting_evidence: "",
      angle_examples: [],
      resources_partners: [],
      resources_news: [],
      resources_national: [],
      image: mobility2
    }
  }
};
interface ChallengeContent {
  title: string;
  subTitle: string;
  introduction: string;
  angles: string;
  presenting_evidence: string;
  angle_examples: Array<{ label: string; desc: string }>;
  resources_partners: Array<{ label: string; link: string }>;
  resources_news: Array<{ label: string; link: string }>;
  resources_national: Array<{ label: string; link: string }>;
  image: any;
}
