import mobility1 from "./img/mobility_lastmile.jpg";
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
// import climate1 from "./img/climate_education.jpg";
// import climate2 from "./img/climate_waste.jpg";
// import climate3 from "./img/climate_coastal.jpg";
// import climate4 from "./img/climate_community.jpg";


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

export const challengesContent: {[key:string]: {[key: string]: ChallengeContent | string}} = {
  mobility: {
    title: "MOBILITY CHALLENGES", // the first title above main article title

    // this is content for the page /challenges/mobility/lastmile
    lastmile: {
      title: "Last Mile", // main header
      subTitle: "How might we improve the last-mile experience where traffic is congested, parking is scarce, and public transportation is limited?",
      introduction: "The last mile of a commute is often the least efficient. Traffic congestion, searching for parking, and navigating through pedestrians, scooters, and bicycles all contribute to this problem. As cities become larger and more densely populated these challenges will be exacerbated. How might we mitigate these challenges associated with the last mile of a commute?",
      // General description of angles for this challenge
      angles: "One way to consider the problem is to think about a specific stakeholder. There are many transportation needs such as delivering products, commuting to work during rush hour, site-seeing, and going to bars late at night. Each of these contexts affects transportation needs and this may be different for each stakeholder group, such as children, young professionals, or elderly people. Is there a way to create an adaptive use that meets all these people's needs?   Consider the following possible angles for your project:",
      // list of examples of angles to explore from with label and description, creates a bulleted list
      // you may enter label as <a href="link_to_somewhere">Parking</a> to enter html content instead
      angle_examples: [
        {label: "Parking", desc: "How can parking be more efficient and account for short-term and long-term parking needs in San Diego?"},
        {label: "Micro-mobility", desc: "How can scooters, bikes, and skateboards make short-term trips?"},
        {label: "Public Transportation", desc: "How can we improve the public transportation as ridership increases?"},
        {label: "Multi-modal transportation", desc: "How can we optimize each leg of our commute for the given context?"}
      ],
      // list of resources. Creates a bulleted list with label and link
      resources: [
        {label: 'Overnight Parking Lot Program', link:' https://www.nbcsandiego.com/news/local/encinitas-city-council-to-vote-on-safe-overnight-parking-lot-program/2248554/'},
        {label: 'Bike Lane Project', link:' https://www.nbcsandiego.com/news/local/city-moving-forward-with-compromise-in-north-park-bike-lane-project/2242608/'},
        {label: 'Thoughts on Microtransit', link:' https://humantransit.org/2018/02/microtransit-what-i-think-we-know.html'},
        {label: 'OFO Bikes removed from campus', link:' http://triton.news/2017/04/yellow-ofo-bikes-removed-campus-friday/'},
        {label: 'Trolley project', link:' https://onthego.ucsd.edu/projects/trolley-lrt.html'},
        {label: 'Crowd-sourcing in NYC', link:' https://medium.com/transit-app/how-were-bringing-real-time-countdowns-to-nyc-s-lettered-lines-482d3b8f9899'},
        {label: 'Fare Evasion', link:' https://www.sandiegouniontribune.com/news/transportation/story/2020-01-10/mts-tickets-for-fare-evasion-spike-criminalizing-poverty'},
        {label: 'Uber\'s New Favorite Driver Feature', link:' https://www.nbcsandiego.com/news/california/uber-to-drop-upfront-pricing-let-users-choose-favorite-drivers/2241607/?'},
        {label: 'Airport Skyway Project', link:' https://www.10news.com/news/-skyway-from-airport-to-downtown-san-diego-could-work-study-says'}
      ],
      image: mobility1
    },
    safety: {
      title: "",
      subTitle: "",
      introduction: "",
      angles: "",
      angle_examples: [

      ],
      resources: [

      ],
      image: mobility2

    }
  },
  housing: {
    title: "HOUSING CHALLENGES",
  },
  health: {

  },
  climate: {

  }
}
interface ChallengeContent {
  title: string
  subTitle: string
  introduction: string
  angles: string
  angle_examples: Array<{label: string, desc: string}>
  resources: Array<{label: string, link: string}>,
  image: ImageData
}
