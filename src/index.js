import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// Import images for Parcel to process

// Newly added scene images
import scene1Image from "./assets/TheMunicipalPigeon/sence1.png";
import scene2Image from "./assets/TheMunicipalPigeon/sence2.png";
import scene3Image from "./assets/TheMunicipalPigeon/sence3.png";
import scene4Image from "./assets/TheMunicipalPigeon/sence4.png";
import tmp from "./assets/TheMunicipalPigeon/TMP.png";

// FirstInternProject images
import mainImage from "./assets/FirstInternProject/main.png";
import legshDiagram from "./assets/FirstInternProject/LEGSH diagram (1).png";
import image1 from "./assets/FirstInternProject/1.png";
import image2 from "./assets/FirstInternProject/2.png";
import image3 from "./assets/FirstInternProject/3.png";
import image4 from "./assets/FirstInternProject/4.png";
import planImage from "./assets/FirstInternProject/plan.png";
import section1 from "./assets/FirstInternProject/section-01.png";
import section2 from "./assets/FirstInternProject/section-02.png";

// PhotoGal images
import photo1 from "./assets/PhotoGal/1.png";
import photo2 from "./assets/PhotoGal/2.png";
import photo3 from "./assets/PhotoGal/3.png";
import photo5 from "./assets/PhotoGal/5.png";
import photo6 from "./assets/PhotoGal/6.png";
import photo7 from "./assets/PhotoGal/7.png";
import photo8 from "./assets/PhotoGal/8.png";
import photo9 from "./assets/PhotoGal/9.png";

// SeeIt images
import seeIt1 from "./assets/SeeIt/1.png";
import seeIt2 from "./assets/SeeIt/2.png";
import seeItMain from "./assets/SeeIt/main.png";
import seeIt4 from "./assets/SeeIt/4.png";
import seeIt5 from "./assets/SeeIt/5.png";
import seeIt6_2 from "./assets/SeeIt/6-2.png";
// Import PDF as URL
import seeItPdfUrl from "url:./assets/SeeIt/6-1.pdf";

// LACERTA Showroom images (these are actually JPEG files)
import lacertaPhoto1 from "./assets/LACERTA Showroom/photo1.jpg";
import lacertaPhoto2 from "./assets/LACERTA Showroom/photo2.jpg";
import lacertaPhoto3 from "./assets/LACERTA Showroom/photo3.jpg";
import lacertaPhoto4 from "./assets/LACERTA Showroom/photo4.jpg";
import lacertaPhoto5 from "./assets/LACERTA Showroom/photo5.jpg";
import lacertamodel1 from "./assets/LACERTA Showroom/model1.jpg";
import lacertamodel2 from "./assets/LACERTA Showroom/model2.jpg";
import lacertaPlan from "./assets/LACERTA Showroom/plan.png";
import lacertaMoodboard from "./assets/LACERTA Showroom/moodboard.png";
import lacertaMaterial from "./assets/LACERTA Showroom/material.png";
import lacertaPhotnew from "./assets/LACERTA Showroom/photnew.png";
import lacertaPiger from "./assets/LACERTA Showroom/piger.png";
import lacertrendering1 from "./assets/LACERTA Showroom/rendering1.jpg";
import lacertrendering2 from "./assets/LACERTA Showroom/rendering2.jpg";
import lacertrendering3 from "./assets/LACERTA Showroom/rendering3.jpg";
import lacertrendering4 from "./assets/LACERTA Showroom/rendering4.jpg";
import lacertrendering5 from "./assets/LACERTA Showroom/rendering5.jpg";
import lacertrendering6 from "./assets/LACERTA Showroom/rendering6.jpg";
import lacertrendering7 from "./assets/LACERTA Showroom/rendering7.jpg";
import lacertaField1 from "./assets/LACERTA Showroom/1.png";
import lacertaField2 from "./assets/LACERTA Showroom/2.png";
import lacertaField3 from "./assets/LACERTA Showroom/3.png";
import lacertaField4 from "./assets/LACERTA Showroom/4.png";
import lacertaField5 from "./assets/LACERTA Showroom/5.png";
import lacertaField6 from "./assets/LACERTA Showroom/6.png";
import lacertaField7 from "./assets/LACERTA Showroom/7.png";
import lacertaField8 from "./assets/LACERTA Showroom/8.png";
import lacertaField9 from "./assets/LACERTA Showroom/9.png";
import lacertaField10 from "./assets/LACERTA Showroom/10.png";
import lacertaField11 from "./assets/LACERTA Showroom/11.png";
import lacertaField12 from "./assets/LACERTA Showroom/12.png";

// From here to Eternity images
import eternityMain1 from "./assets/From here to Eternity/main and 1.png";
import eternityNew from "./assets/From here to Eternity/NEW.png";
import eternity2 from "./assets/From here to Eternity/2.png";
import eternity3 from "./assets/From here to Eternity/3.png";
import eternity4 from "./assets/From here to Eternity/4.png";
import eternity5 from "./assets/From here to Eternity/5.png";
import eternity6 from "./assets/From here to Eternity/6.png";
import eternity7 from "./assets/From here to Eternity/7.png";
import eternitySet1 from "./assets/From here to Eternity/set1.png";
import eternitySet2 from "./assets/From here to Eternity/set2.png";
import eternitySet3 from "./assets/From here to Eternity/set3.png";
import eternitySet4 from "./assets/From here to Eternity/set4.png";
import eternitySet5 from "./assets/From here to Eternity/set5.png";
import eternitySet6 from "./assets/From here to Eternity/set6.png";
import eternitySet7 from "./assets/From here to Eternity/set7.png";
import eternitySet8 from "./assets/From here to Eternity/set8.png";
import eternityIcon from "./assets/From here to Eternity/ICON.png";
import eternityNew1 from "./assets/From here to Eternity/new1.gif";
import eternityNew2 from "./assets/From here to Eternity/new2.png";
import eternityNew3 from "./assets/From here to Eternity/new3.png";
import eternity8rendering from "./assets/From here to Eternity/8rendering.png";
import eternityFloorplan from "./assets/From here to Eternity/新平面图.png";
import eternity1234 from "./assets/From here to Eternity/1234.png";
import eternity13 from "./assets/From here to Eternity/13.png";
import eternity14 from "./assets/From here to Eternity/14.png";
import eternity15 from "./assets/From here to Eternity/15.png";
import eternity16 from "./assets/From here to Eternity/16.png";
import eternity17 from "./assets/From here to Eternity/17.png";
import eternity18 from "./assets/From here to Eternity/18.png";
import eternity19 from "./assets/From here to Eternity/19.png";

// 15 Rules for Rebuilding the World images
import rulesMain from "./assets/15 Rules for Rebuilding the World/2main.png";
import rules1 from "./assets/15 Rules for Rebuilding the World/1.png";
import rules2main from "./assets/15 Rules for Rebuilding the World/2main.png";
import rules3 from "./assets/15 Rules for Rebuilding the World/3.png";
import rules4 from "./assets/15 Rules for Rebuilding the World/4.png";
import rules5 from "./assets/15 Rules for Rebuilding the World/5.png";
import rules6modul from "./assets/15 Rules for Rebuilding the World/6modul.png";
import rules7elevation from "./assets/15 Rules for Rebuilding the World/7elevation.png";
import rules8plan from "./assets/15 Rules for Rebuilding the World/8PLAN .png";
import rulesSmall1 from "./assets/15 Rules for Rebuilding the World/small1.png";
import rulesSmall2 from "./assets/15 Rules for Rebuilding the World/small2.png";
import rulesSmall3 from "./assets/15 Rules for Rebuilding the World/small3.png";
import rulesSmall4 from "./assets/15 Rules for Rebuilding the World/small4.png";
import rulesSmall5 from "./assets/15 Rules for Rebuilding the World/small5.png";

// From Screen to Space images
import fromScreenCover from "./assets/From Screen to Space/1andfengmian.png";
import fromScreenFig1 from "./assets/From Screen to Space/2refine.png";
import fromScreen3 from "./assets/From Screen to Space/3refine.png";
import fromScreen4 from "./assets/From Screen to Space/4.png";
import fromScreen5 from "./assets/From Screen to Space/5.png";
import fromScreen6 from "./assets/From Screen to Space/6.png";
import fromScreen7 from "./assets/From Screen to Space/7.png";
import fromScreen8 from "./assets/From Screen to Space/8.png";
import fromScreen9 from "./assets/From Screen to Space/9.png";

// Where Light Moves (Modulightor) images
import modulightorMain from "./assets/Modulightor/main.png";
import modulightor1 from "./assets/Modulightor/1mod.png";
import modulightor2 from "./assets/Modulightor/2mod.png";
import modulightor3 from "./assets/Modulightor/3mod.png";
import modulightor4 from "./assets/Modulightor/4mod.png";
import modulightor5 from "./assets/Modulightor/5mod.png";
import modulightor6 from "./assets/Modulightor/6mod.png";
import modulightor7 from "./assets/Modulightor/7mod.png";
import modulightor8 from "./assets/Modulightor/8mod.png";
import modulightor9 from "./assets/Modulightor/9mod.gif";
import modulightor10 from "./assets/Modulightor/10mod.gif";
import modulightor11 from "./assets/Modulightor/11mod.gif";
import modulightor12 from "./assets/Modulightor/12mod.png";
import modulightor13 from "./assets/Modulightor/13mod.png";
import modulightor14 from "./assets/Modulightor/14mod.png";
import modulightor15 from "./assets/Modulightor/15mod.png";
import modulightor16 from "./assets/Modulightor/16mod.png";
import modulightor17 from "./assets/Modulightor/17mod.png";
import modulightor18 from "./assets/Modulightor/18mod.png";
import modulightor19 from "./assets/Modulightor/19mod.png";
import modulightor20 from "./assets/Modulightor/20mod.png";
import modulightor21 from "./assets/Modulightor/21mod.png";
import modulightor22 from "./assets/Modulightor/22mod.png";
import modulightor23 from "./assets/Modulightor/23mod.png";
import modulightor24 from "./assets/Modulightor/24mod.png";
import modulightor25 from "./assets/Modulightor/25mod.png";
import modulightorNew from "./assets/Modulightor/新图.png";
import modulightorN1 from "./assets/Modulightor/N1.png";

// Hidden Order images
import hiddenMain from "./assets/Hidden Order/main.png";
import hiddenSameline1 from "./assets/Hidden Order/sameline1.GIF";
import hidden1 from "./assets/Hidden Order/1.png";
import hidden2 from "./assets/Hidden Order/2.png";
import hidden3 from "./assets/Hidden Order/3.png";
import hidden4 from "./assets/Hidden Order/4.png";
import hidden5 from "./assets/Hidden Order/5.png";
import hidden6 from "./assets/Hidden Order/6.png";
import hidden7 from "./assets/Hidden Order/7.png";
import hidden8 from "./assets/Hidden Order/8.png";
import hidden9 from "./assets/Hidden Order/9.png";
import hidden10 from "./assets/Hidden Order/10.png";
import hiddenAxonometric from "./assets/Hidden Order/Axonometric drawing.png";
import hiddenNew1 from "./assets/Hidden Order/新1.png";
import hiddenNew2 from "./assets/Hidden Order/新2.png";
import hiddenNew3 from "./assets/Hidden Order/新3.png";

// Installation images
import installationMain from "./assets/Installation/main.png";
import installation1 from "./assets/Installation/1.png";
import installation3 from "./assets/Installation/3.png";
import installation4 from "./assets/Installation/4.png";
import installation5 from "./assets/Installation/5.png";
import installation6 from "./assets/Installation/6.png";
import installation7 from "./assets/Installation/7.png";
import installation8 from "./assets/Installation/8.png";
import installationAnalyze1 from "./assets/Installation/analyze1.png";
import installationAnalyze2 from "./assets/Installation/analyze2.png";

// Silver Valley Exhibition images
import silverMain from "./assets/Silver Valley Exhibition/main.png";
import silver1 from "./assets/Silver Valley Exhibition/1.png";
import silver2 from "./assets/Silver Valley Exhibition/2.png";
import silver3 from "./assets/Silver Valley Exhibition/3.png";
import silver4 from "./assets/Silver Valley Exhibition/4.png";
import silver6 from "./assets/Silver Valley Exhibition/6.png";
import silver7 from "./assets/Silver Valley Exhibition/7.png";
import silver8 from "./assets/Silver Valley Exhibition/8.png";
import silverSite from "./assets/Silver Valley Exhibition/site.png";
import silverStructure from "./assets/Silver Valley Exhibition/structure.png";
import silverCirculation from "./assets/Silver Valley Exhibition/circulation.png";
import silverFloorplan from "./assets/Silver Valley Exhibition/floorplan.png";
import silverNarrative from "./assets/Silver Valley Exhibition/narrative.png";
import silverUpdate from "./assets/Silver Valley Exhibition/更新.png";
import silverN1 from "./assets/Silver Valley Exhibition/n1.png";
import silverN2 from "./assets/Silver Valley Exhibition/n2.png";
import silverN3 from "./assets/Silver Valley Exhibition/n3.png";
import silverN4 from "./assets/Silver Valley Exhibition/n4.png";
import silverN5 from "./assets/Silver Valley Exhibition/n5.png";

import horizontalImage from "./assets/horizontal.png";

// Ploy Dream images
import ployDream1 from "./assets/Ploy Dream/1.png";
import ployDreamIntroVideo from "url:./assets/Ploy Dream/TDMovieOut.0.mp4";
import ployDream2 from "./assets/Ploy Dream/2.png";
import ployDream3 from "./assets/Ploy Dream/3.png";
import ployDream4 from "./assets/Ploy Dream/4.png";
import ployDream5 from "./assets/Ploy Dream/5.png";
import ployDream6 from "./assets/Ploy Dream/6.png";
import ployDream7 from "./assets/Ploy Dream/7.png";
import ployDreamVideo from "url:./assets/Ploy Dream/8.mp4";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// ----- Minimal project detail interactions -----
const projectData = {
  "project-a": {
    title: "The Municipal Pigeon",
    scenes: [
      {
        title: "Introduction",
        desc:
          "This project is based on a chapter from the ltalian novel Marcovaldo.selecting four key moments for scene design and rendering in Blender.In post-production, green screen technology was used, with myself asthe protagonist, and costume and styling were crafted to reflect thenovel's historical setting. The final composition was completed usingPhotoshop. This work was exhibited at the World fourism Expo MuseumHangzhou, China.",
        image: tmp,
      },
      {
        title: "Scene 1",
        desc:
          "And as he proceeded, his eyes on the fying birds, hefound himself at an intersection, the light red, in the midstof the automobiles; and he came within a hair's breadth ofbeing run over. As a traffic cop, his face purple, wrote nameand address in a notebook, Marcovaldo sought again withhis eyes those wings in the sky, but they had vanished.",
        image: scene1Image,
      },
      {
        title: "Scene 2",
        desc:
          "The building where Marcovaldo lived had a fat roof,with wires strung for drying laundry. Marcovaldo climbedup there with three of his children, carrying a can of bird-lime, a brush, and a sack ofcorn.",
        image: scene2Image,
      },
      {
        title: "Scene 3",
        desc:
          "Marcovaldo went up with a sack. Trapped in the birdlimethere was a poor pigeon, one of those gray urban doves, used to the crowds and racket of the squares. Flutteringaround, other pigeons contemplated him sadly, as he triedto unstick his wings from the mess on which he had unwiselylighted.",
        image: scene3Image,
      },
      {
        title: "Scene 4",
        desc:
          "Very concerned, because he was six months behind withthe rent and feared eviction, Marcovaldo went to theSignora's apartment, on the main foor. As he entered theliving room, he saw that there was already a visitor: thepurple-faced cop.",
        image: scene4Image,
      },
    ],
  },
  "project-b": {
    title: "TaTaBowls Restaurant",
    desc:
      "<strong>Site:</strong> Legoland Shanghai<br><strong>Time:</strong> 2025<br>Situated within the newly opened Legoland in Shanghai, the restaurant draws its visual identity from the vibrant palette of LEGO bricks. Contrasting materials and modular compositions transform the interior into a playful, kinetic landscape — an environment that blurs the boundary between dining and play, extending the park's immersive narrative beyond its rides and attractions.",
    image: mainImage,
    // scenes是项目细节页的分场景数据，每个元素对应一个详细的“分镜”或内容块，包括标题、描述、配图等，用于在详情页分步展示项目的不同设计/表现环节。
    scenes: [
      {
        title: "LEGSH Diagram",
        desc: "",
        image: legshDiagram,
      },
      {
        title: "",
        desc: "",
        images: [image1, image2, image3, image4], // Four-grid layout
      },
      {
        title: "PLAN",
        desc: "",
        image: planImage,
      },
      {
        title: "Section 1",
        desc: "",
        image: section1,
      },
      {
        title: "Section 2",
        desc: "",
        image: section2,
      },
    ],
  },
  "project-c": {
    title: "A GRAIN OF HANGZHOU 2021",
    desc: "The exhibition is located on the first floor of the CAA Nanshan Campus, within a semi-circular gallery space strongly shaped by daylight. Running from 9:00 to 18:00, the show is highly influenced by the shifting quality of natural light throughout the day.<br><br>Titled Hangzhou Visual Chronicle, the exhibition presents the work of forty students, each documenting the city from a unique perspective through black-and-white documentary photography. The works are organized into thematic sections and displayed at varied scales. In addition to framed prints, the exhibition incorporates lightboxes, posters, postcards, and other graphic formats to extend the visual narrative.",
    image: null,
    scenes: [
      {
        title: "",
        desc: "",
        images: [photo6, photo2],
      },
      {
        title: "",
        desc: "",
        images: [photo3, photo5],
      },
      {
        title: "",
        desc: "The spatial layout also includes several functional zones:<br><br>Opening Ceremony Area — designed with a backdrop featuring the exhibition's key visual identity.<br><br>Signing Area — accommodating guest interaction and event flow.<br><br>Archive & Documentation Zone — showcasing process materials and supporting texts.",
      },
      {
        title: "",
        desc: "",
        images: [photo1, photo7],
      },
      {
        title: "",
        desc: "",
        images: [photo8, photo9],
      },
      {
        title: "",
        desc: "Across the curved space, the design responds to changing daylight while balancing multiple modes of display, creating a cohesive environment for viewing, gathering, and storytelling.",
      },
    ],
  },
  "project-d": {
    title: "See it",
    desc: "<strong>Exhibition Zine Design 2025</strong>",
    scenes: [
      {
        title: "",
        desc: "",
        image: seeIt1,
      },
      {
        title: "",
        desc: "",
        image: seeIt2,
      },
      {
        title: "",
        desc: "",
        image: seeItMain,
      },
      {
        title: "",
        desc: "",
        image: seeIt4,
      },
      {
        title: "",
        desc: "",
        image: seeIt5,
      },
      {
        title: "",
        desc: "",
        image: seeIt6_2,
      },
      {
        title: "",
        desc: "",
        pdf: seeItPdfUrl,
      },
    ],
  },
  "project-e": {
    title: "LACERTA Showroom",
    desc: "<strong>Site:</strong> He Dong Mansion, Shanghai<br><strong>Time:</strong> 2025<br>This project was designed for the fashion brand LACERTA, creating a multifunctional space that integrates office, reception, and retail functions. <br>",
    scenes: [
      {
        title: "Moodboard",
        desc: "",
        images: [lacertaMoodboard, lacertaMaterial],
        flexEqualHeight: true,
      },
      {
        title: "",
        desc: "",
        image: lacertaPhotnew,
      },
      {
        title: "",
        desc: "",
        images: [lacertaPhoto1, lacertaPhoto4],
        noCrop: true,
      },
      {
        title: "",
        desc: "",
        images: [lacertaPhoto2, lacertaPhoto3],
      },
      {
        title: "Plan",
        desc: "The original site was a square-shaped room. The design process began with understanding the studio's operational needs, including equipment, staff capacity, and workflow — as well as the quantity and type of garments to be displayed in the showroom. The spatial layout and atmosphere were developed in response to the brand's distinctive identity and aesthetic tone.",
        image: lacertaPlan,
      },
      {
        title: "",
        desc: "Based on the brand's needs, I designed a mobile display cabinet whose materials and color palette align with the overall aesthetic of the showroom.<br>The top section features a pull-out drawer intended for accessories, while the lower compartment is designed with increased height to accommodate bags and shoes.",
        image: lacertaPiger,
      },
      {
        title: "",
        desc: "",
        images: [lacertrendering1, lacertrendering5, lacertrendering7],
      },
      {
        title: "",
        desc: "",
        images: [lacertrendering3, lacertrendering4],
      },
      {
        title: "",
        desc: "",
        images: [lacertamodel1, lacertamodel2],
      },
      {
        title: "Field Report",
        desc: "7.15.2025",
      },
      {
        title: "",
        desc: "",
        images: [lacertaField1, lacertaField2, lacertaField3, lacertaField4],
      },
      {
        title: "",
        desc: "7.23.2025",
      },
      {
        title: "",
        desc: "",
        images: [lacertaField5, lacertaField6, lacertaField7, lacertaField8],
      },
      {
        title: "",
        desc: "8.8.2025",
      },
      {
        title: "",
        desc: "",
        images: [lacertaField9, lacertaField10, lacertaField11, lacertaField12],
      },
    ],
  },
  "project-f": {
    title: "From here to eternity",
    desc: "",
    scenes: [
      {
        title: "",
        desc: "<strong>Skillset:</strong> On-Site Construction / Rhino / Adobe Suite<br><strong>Team:</strong> Media Sencenography Department in China Academy of Art (CAA)<br><strong>Role:</strong> Scene Designer/Exhibition assistance<br><strong>Timeline:</strong> May 2023 - Jun 2023<br><strong>Location:</strong> World Tourism Expo Museum, Hangzhou, China",
        image: eternityIcon,
        layout: "side-by-side",
        reversed: true,
        matchTextHeight: true,
      },
      {
        title: "",
        desc: "The exhibition hall of this project covers an area of approximately <strong>8,611 square feet</strong>, with a height of <strong>48 feet</strong>. The large concrete walls create a dramatic effect when illuminated during the day. There are a total of 26 works by independent artists, as well as several group works and one dance performance. The highlight of this design is the integration of different types of contemporary art, including videos, models, installations, stage sets, and posters, which are well arranged and presented in a large space, creating an immersive scene throughout the entire space.",
      },
      {
        title: "",
        desc: "",
        image: eternityMain1,
      },
      {
        title: "",
        desc: "In 2023, marking the 70th anniversary of Eugene O'Neill's death, the title Long Day's Journey Into Night is borrowed from his iconic play \u2014 paying tribute to the tradition of the living room drama through spatial scenes.<br><br>As playwright Edward Bond once said:<br><br>\"The living room is the world.\"",
      },
      {
        title: "Exhibition Structure",
        desc: "Overture/Scene: Long Day's Journey into Night<br>Part One/Exhibition: Passed over LETHE<br>Part Two/Performance: Point Omega<br>Part Three/Screening: Bend of Times",
        images: [eternityNew2, eternityNew1],
        layout: "text-two-images",
      },
      {
        title: "",
        desc: "",
        image: eternityNew3,
      },
      {
        title: "",
        desc: "Narrative Context<br><br><strong>Scene Background:</strong> Late 20th century, United States, middle-class family.<br><strong>Scene Lighting:</strong> Bright, referencing Edward Hopper and <em>Shirley — Visions of Reality</em>.<br><strong>Scene Props:</strong> Referencing Gregory Crewdson, realistic photography, and the French film <em>Amour</em>.",
      },
      {
        title: "",
        desc: "",
        images: [eternity8rendering, eternityFloorplan],
      },
      {
        title: "",
        desc: "This project focuses on constructing theatrical space, divided into two parts — an interior domestic setting and a stage environment. Through the use of spatial symbolism, lighting, and shadow, the design explores how physical space can embody emotional tension and narrative atmosphere, paying homage to the tradition of the drama.",
      },
      {
        title: "",
        desc: "",
        images: [eternity3, eternity1234, eternity5],
      },
      {
        title: "",
        desc: "",
        images: [eternity6, eternity7],
      },
      {
        title: "",
        desc: "The space is designed to balance realism and drama, accommodating both exhibition and performance.",
      },
      {
        title: "",
        desc: "",
        image: eternity13,
      },
      {
        title: "",
        desc: "",
        images: [eternity14, eternity15, eternity16, eternity17],
      },
      {
        title: "",
        desc: "",
        images: [eternity18, eternity19],
      },
      {
        title: "",
        desc: "",
        image: eternitySet1,
      },
      {
        title: "",
        desc: "",
        images: [eternitySet2, eternitySet3, eternitySet6, eternitySet7],
      },
      {
        title: "",
        desc: "",
        images: [eternitySet4, eternitySet5, eternitySet8],
      },
    ],
  },
  "project-g": {
    title: "15 Rules for Rebuilding the World",
    desc: "This exhibition invites you to experience Christopher Alexander's \"Fifteen Fundamental Properties\" through the evocative and immersive world of Pina Bausch's stage photography. Pina's groundbreaking stage designs and choreography transcend mere aesthetics, channeling deep emotional currents and architectural precision. <br><br>Each photograph captures these principles in action—Scale, Centers, Rhythm, Contrast, Simplicity—manifesting a vibrant tension and flow that transforms space. Through these dynamic scenes, we uncover how these properties animate space, crafting environments that pulse with a compelling, almost visceral sense of life. Prepare to step into a world where design principles are not just visible, but deeply felt, alive, and unbound.",
    image: rulesMain,
    scenes: [
      {
        title: "",
        desc: "",
        image: rules1,
      },
      {
        title: "",
        desc: "",
        image: rules2main,
      },
      {
        title: "",
        desc: "",
        image: rules3,
      },
      {
        title: "",
        desc: "",
        image: rules4,
      },
      {
        title: "",
        desc: "",
        image: rules5,
      },
      {
        title: "",
        desc: "",
        image: rules6modul,
      },
      {
        title: "",
        desc: "",
        image: rules7elevation,
      },
      {
        title: "",
        desc: "",
        image: rules8plan,
      },
      {
        title: "",
        desc: "",
        images: [rulesSmall1, rulesSmall2, rulesSmall3, rulesSmall4, rulesSmall5],
      },
    ],
  },
  "project-k": {
    title: "From Screen to Space",
    desc:
      "Film has long been an important source of inspiration for my spatial thinking. The use of lighting, framing, and camera movement in cinema offers valuable lessons for how space can be constructed, revealed, and experienced.<br><br>This project was developed as an academic exploration aimed at expanding my narrative thinking and visual expression through cinematic storytelling. By analyzing film not only as a story but as a spatial system, I sought to translate cinematic language into spatial design strategies.<br><br>I chose the Korean film <em>Parasite</em> as the primary reference.",
    image: fromScreenCover,
    scenes: [
      {
        title: "",
        desc: "",
        image: fromScreenCover,
      },
      {
        title: "",
        desc: "",
        image: fromScreenFig1,
      },
      {
        title: "",
        desc:
          "It translates elements from the film's content, cinematography, visual composition, and objects' symbolism into spatial design.",
      },
      {
        title: "",
        desc: "",
        images: [fromScreen3, fromScreen4],
      },
      {
        title: "",
        desc:
          "Through mapping character relationships and narrative progression, I developed a spatial circulation framework that reflects the film’s underlying social tension and hierarchy. The movement of characters and shifts in perspective within the film became the basis for generating spatial sequences and transitions.",
      },
      {
        title: "",
        desc: "",
        image: fromScreen5,
      },
      {
        title: "",
        desc: "",
        images: [fromScreen6, fromScreen7],
      },
      {
        title: "",
        desc: "",
        image: fromScreen8,
      },
      {
        title: "",
        desc: "",
        image: fromScreen9,
      },
    ],
  },
  "project-l": {
    title: "Where Light Moves",
    subtitle: "An Adaptive Interior System for the Modulightor Duplex",
    desc: "",
    image: modulightorMain,
    scenes: [
      {
        title: "",
        desc: "",
        image: modulightorMain,
        layout: "title-image",
      },
      {
        title: "",
        desc: "The Modulightor Building, located at 246 East 58th Street in Midtown Manhattan, is a late work by Paul Rudolph, designed in the late 1970s and completed in 1993.<br><br>Conceived for the lighting company Modulightor, the building explores Rudolph's mature vocabulary of modularity, vertical layering, and controlled light within an extremely narrow urban lot.",
        image: modulightorNew,
        layout: "side-by-side",
      },
      {
        title: "",
        desc: "",
        image: modulightorN1,
      },
      {
        title: "",
        desc:
          "This project reimagines the Modulightor duplex as an adaptive collective interior system.<br><br>Through movable and foldable architectural elements, the space continuously reconfigures itself to support a wide range of social, cultural, and restorative activities.<br><br>Rather than relying on fixed programs, the interior operates as a flexible framework, responsive to use, light, and environmental conditions which allowing the space to shift between gathering, making, exhibiting, and resting.",
        image: modulightor1,
        layout: "side-by-side",
      },
      {
        title: "Grid system",
        desc:
          "I began with this grid system.<br>The red lines represent reference axes taken from the building's perimeter.<br>The blue dashed lines indicate sightlines extending from the four corners.<br><br>Because the space is small, I wanted to stretch the visual depth as much as possible, so no walls or partitions are placed along these sightlines. The intersection of the two blue lines marks the location of the mirror.",
        images: [modulightor2, modulightor3, modulightor4],
        layout: "nested-grid",
      },
      {
        title: "Transformation & Light",
        desc:
          "In response to light conditions and spatial characteristics, the structural interventions were adjusted to enable spatial adaptability.",
        images: [modulightor5, modulightor6, modulightor7],
        layout: "nested-grid",
      },
      {
        title: "",
        desc:
          "Operable ceiling modules open or close according to sunlight and temperature, while aerial yoga equipment is suspended within the double-height zone. Foldable and movable components allow the space to shift seamlessly between different programs.",
        images: [modulightor8, modulightor9, modulightor10, modulightor11],
        layout: "nested-grid-4",
      },
      {
        title: "Plant Boxes",
        desc:
          "A misting pipe system is integrated as a spatial and ecological element, weaving through the interior to support vine growth through automated hydration.<br><br>Beyond sustaining the plants, the fine mist reveals the geometry of light, making illumination visible and atmospheric as it drifts through the space.",
        image: modulightor12,
        layout: "side-by-side",
        reversed: true,
      },
      {
        title: "",
        desc: "",
        image: modulightor13,
      },
      {
        title: "",
        desc:
          "I continue Rudolph's predominantly white palette, but introduce variations in translucency, reflectiveness, and surface smoothness.",
        images: [modulightor14, modulightor15],
        layout: "text-image-split",
      },
      {
        title: "",
        desc: "",
        images: [modulightor16, modulightor17],
      },
      {
        title: "",
        desc: "",
        image: modulightor18,
      },
      {
        title: "Models and Sketches",
        desc: "",
        images: [modulightor19, modulightor20, modulightor21],
      },
      {
        title: "",
        desc: "",
        images: [modulightor22, modulightor23],
      },
      {
        title: "",
        desc: "",
        image: modulightor24,
      },
      {
        title: "",
        desc: "",
        image: modulightor25,
      },
    ],
  },
  "project-h": {
    title: "Hidden Order | CAA Graduation Season 2024 World Tree",
    desc: "<strong>Site:</strong> Zhejiang Library, Hangzhou, China<br><strong>Time:</strong> 6/1/2024-6/10/2024",
    image: hiddenMain,
    scenes: [
      {
        title: "",
        desc: "The exhibition takes place on the lower level of the building, in a compact space of approximately 1,000 square feet.<br><br>Within this limited area, 21 students present artworks across various media, including installation, models, video, and photography.",
      },
      {
        title: "",
        desc: "",
        image: hiddenSameline1,
        center: true,
        scale: 0.5,
      },
      {
        title: "",
        desc: "",
        image: hiddenAxonometric,
      },
      {
        title: "",
        desc: "The curatorial process involved documenting each work's dimensions and lighting requirements to design an efficient spatial layout.With two separate entrances and exits, the circulation strategy became essential—ensuring a clear flow between the two access points while maintaining visual rhythm and spatial coherence across diverse works.",
      },
      {
        title: "",
        desc: "",
        images: [hiddenNew1, hiddenNew2],
      },
      {
        title: "",
        desc: "",
        image: hiddenNew3,
      },
      {
        title: "",
        desc: "<strong>Video:</strong> 3 (Using projection, avoid strong light space)<br><strong>Kinetic Art Installation:</strong> 2 (Light sources and exhibition flow according to the main viewing perspective.)<br><strong>Photography:</strong> 1 (with 60 pieces, need a long wall, lighter place)<br><strong>Miniature model:</strong> 14<br>(6 artworks need to be embedded in the wall,<br>with holes pre-drilled during the installation process.<br>5 artworks require custom-made display stands.<br>3 artworks need to be hung on the wall, one needs to be placed in a corner.)",
      },
      {
        title: "",
        desc: "",
        images: [hidden1, hidden4],
      },
      {
        title: "",
        desc: "",
        images: [hidden2, hidden6, hidden8],
      },
      {
        title: "",
        desc: "",
        images: [hidden3, hidden5],
      },
      {
        title: "",
        desc: "",
        image: hidden7,
      },
      {
        title: "",
        desc: "I also participated in both the installation and de-installation of the exhibition.<br><br>Due to the large scale of certain photographic works and display structures, we coordinated an early move-in sequence to ensure safe handling before closing the walls.<br><br>Pieces requiring electrical connections were positioned first, with dedicated openings left in the wall system for power access and cable management.",
      },
      {
        title: "",
        desc: "",
        images: [hidden9, hidden10],
      },
    ],
  },
  "project-i": {
    title: "Simulfactory",
    desc: "This project is inspired by Jean Baudrillard's Simulacra and Simulation, particularly his concept of the three orders of simulacra. In this theory, Baudrillard describes how images and representations gradually detach from reality, eventually producing a hyperreality in which the boundary between the real and the artificial dissolves.<br><br>In my work, I deconstruct the three stages of simulacra and translate them into the narrative of an imagined \"Simulacra Factory\"—a surreal production line where ancient Greek sculptures are collected, transported, copied, and mechanized. The interior spatial sequence is constructed through mirrored surfaces, reflective materials, and carefully orchestrated lighting, creating visual loops and distortions that echo Baudrillard's idea of repetition without an original.",
    image: installationMain,
    scenes: [
      {
        title: "",
        desc: "",
        image: installationMain,
      },
      {
        title: "",
        desc: "",
        image: installation1,
      },
      {
        title: "",
        desc: "",
        images: [installation6, installation4, installation7],
        noCrop: true,
      },
      {
        title: "",
        desc: "",
        images: [installation8, installation3],
      },
      {
        title: "",
        desc: "",
        image: installation5,
      },
      {
        title: "",
        desc: "Externally, a system of stepped platforms and layered curtains frames the entire installation like a theatrical set. This scenographic approach positions the audience as both observer and participant, inviting them to navigate shifting realities while \"watching\" the factory unfold as a staged performance. The design reinforces Baudrillard's argument that modern experience often exists between fiction and reality, between production and reproduction.",
      },
      {
        title: "",
        desc: "",
        images: [installationAnalyze1, installationAnalyze2],
        flexEqualHeight: true,
      },
    ],
  },
  "project-j": {
    title: "Silver Valley Exhibition",
    desc: "<strong>Time：</strong>2023<br>This project proposes a redesign of the village reception hall in Baiyingou, drawing from the village's mining heritage rather than relying on commercialized or homogenized rural design approaches. By reactivating the historical memory of coal mining, the space becomes an immersive environment that encourages visitors to engage with the site on a sensory and emotional level.",
    image: silverMain,
    scenes: [
      {
        title: "",
        desc: "",
        image: silver1,
      },
      {
        title: "",
        desc: "Upon entry, each visitor receives a kerosene lamp—an object that symbolically connects them to the labor and daily life of miners. Natural light is intentionally minimized to evoke the atmosphere of an original mineshaft. As visitors move through the space, the kerosene lamp becomes their primary tool for navigation, revealing exhibition details, material textures, and interpretive labels in dim, intimate light.<br><br>Through this experiential narrative, the project transforms the reception hall into a journey of discovery, where history is not merely displayed but actively explored.",
      },
      {
        title: "Site Analysis",
        desc: "The central area of ​​the village still retains a wealth of historical relics, including old-style houses, stone structures, and abandoned production facilities, which together form an important part of the village's cultural fabric.<br><br>Several abandoned buildings are scattered halfway up the mountain; although they have lost their original function. Looking out from inside or on the terrace, one can overlook the entire layout of the village.",
        image: silverSite,
        layout: "side-by-side",
      },
      {
        title: "Narrative structure",
        desc: "",
        image: silverNarrative,
      },
      {
        title: "Floor plan",
        desc: "",
        image: silverFloorplan,
      },
      {
        title: "",
        desc: "",
        images: [silverCirculation, silverStructure],
        flexEqualHeight: true,
      },
      {
        title: "",
        desc: "There is an automated kerosene-lamp dispensing system in the space, allowing visitors to collect a lamp at the beginning of the exhibition and return it at the end.",
      },
      {
        title: "",
        desc: "",
        images: [silver2, silver3, silver4],
        noCrop: true,
        flexEqualHeight: true,
      },
      {
        title: "",
        desc: "Passing through the mine, visitors follow the guidance of gradual changes on the ground and witness the gradual crushing process of the ore.",
      },
      {
        title: "",
        desc: "",
        image: silver6,
      },
      {
        title: "",
        desc: "Mine carts loaded with crushed ore are transported out of the mine. The audience watches a small animation inside the mine cart.",
      },
      {
        title: "",
        desc: "",
        images: [silver7, silver8],
      },
      {
        title: "",
        desc: "The audience passes through the fragment track, drawn by a beam of red light, and enters the next space through an arched door.<br><br>The exterior of this space resembles a furnace, and people descend down a ramp 1 to observe the \"smelting\" process.",
      },
      {
        title: "",
        desc: "",
        image: silverUpdate,
      },
      {
        title: "Crowds and Activities",
        desc: "",
      },
      {
        title: "",
        desc: "",
        image: silverN1,
      },
      {
        title: "",
        desc: "",
        image: silverN2,
      },
      {
        title: "",
        desc: "People gather in the theater through various entrances on the covered bridge, providing them with the opportunity to see other visitors arriving from different passages and experience the village's sense of community.",
      },
      {
        title: "",
        desc: "",
        images: [silverN3, silverN4],
      },
      {
        title: "",
        desc: "Upon reaching the theater, visitors are captivated by the vintage puppet theater, where traditional local puppetry performances are staged. This relocation of the ancient theater into a modern setting creates a fascinating blend of time and space.",
      },
      {
        title: "",
        desc: "",
        image: silverN5,
      },
      {
        title: "",
        desc: "The entire space concludes with an open-ended design. After enjoying the performance, people can continue their exploration by choosing different paths that lead to various spaces, each offering a unique charm of this quaint village.",
      },
    ],
  },
  "project-m": {
    title: "Ploy Dream",
    desc: "<strong>Skillset:</strong> Arduino, Touchdesigner, 3d scanning",
    image: ployDream1,
    scenes: [
      {
        title: "",
        desc: "",
        video: ployDreamIntroVideo,
        autoplay: true,
        loop: true,
      },
      {
        title: "Concept",
        desc: "This project was inspired by my experience with a dream. This dream left me unable to distinguish between the real world and reality, so I wanted to explore the boundary between dreams and reality.<br><br>Simply put, when stimulated by my surroundings, such as lights turning on or sounds increasing, I am pulled back to the real world from the dream.",
        image: ployDream1,
        layout: "side-by-side",
        reversed: true,
        splitRatio: "7fr 3fr",
      },
      {
        title: "",
        desc: "",
        image: ployDream2,
      },
      {
        title: "Visual and Structural Medium",
        desc: "The core of this installation consists of a polyhedral structure and a projection system.<br><br>The polyhedron serves as a physical metaphor for a \"protective barrier\" of consciousness. The interior is lined with mirror-finish paper, creating a sense of infinite reflection and multi-dimensional visual depth within a limited volume. The projected content uses point cloud models converted from 3D scans, re-imagining the fleeting nature of dreams through a digital visual language.",
      },
      {
        title: "",
        desc: "",
        image: ployDream3,
      },
      {
        title: "",
        desc: "<strong>Ultrasonic Sensor:</strong><br>Ultrasonic sensors are deployed at the boundaries of the polyhedron to monitor the distance of the audience.<br>As a viewer approaches, the system decreases the opacity of the projection, causing the imagery to fade. This symbolizes the fragility of dreams when disturbed by reality. Conversely, as the interference moves away, the dream continues in silence.",
        image: ployDream4,
        layout: "side-by-side",
        reversed: true,
        splitRatio: "7fr 3fr",
      },
      {
        title: "",
        desc: "<strong>Sound Sensor:</strong><br>A sound sensor controls the laser beams. An increase in ambient noise leads to a weakening of the laser, visually representing the collapse of the boundary between dream and reality. As the environment returns to quiet, the laser boundary becomes sharp again, re-establishing a clear subconscious field.",
        image: ployDream5,
        layout: "side-by-side",
        reversed: true,
        splitRatio: "7fr 3fr",
      },
      {
        title: "",
        desc: "",
        images: [ployDream6, ployDream7],
      },
      {
        title: "",
        desc: "",
        video: ployDreamVideo,
      },
    ],
  },
};

function setupProjectDetail() {
  const links = document.querySelectorAll(".project-link[data-project]");
  const imageItems = document.querySelectorAll(".image-item[data-project]");
  const imageGrid = document.getElementById("imageGrid");
  const detail = document.getElementById("projectDetail");
  const detailTitle = document.getElementById("detailTitle");
  const detailContent = document.getElementById("detailContent");
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  if (!links.length || !imageGrid || !detail || !detailContent) return;

  let currentProjectKey = null;
  let currentLightboxImages = [];
  let currentLightboxIndex = -1;

  function updateLightboxImage() {
    if (!lightboxImage || currentLightboxIndex < 0 || !currentLightboxImages.length) return;
    const imgEl = currentLightboxImages[currentLightboxIndex];
    if (!imgEl) return;
    const src = imgEl.getAttribute("src") || "";
    const altText = imgEl.getAttribute("alt") || detailTitle?.textContent || "Project image";
    lightboxImage.setAttribute("src", src);
    lightboxImage.setAttribute("alt", altText);
  }

  function openLightboxFromElement(imgEl) {
    if (!lightbox || !lightboxImage) return;
    const candidates = Array.from(detailContent.querySelectorAll("img"));
    currentLightboxImages = candidates.filter((img) => img instanceof HTMLImageElement);
    currentLightboxIndex = currentLightboxImages.indexOf(imgEl);
    if (currentLightboxIndex < 0) {
      currentLightboxImages.unshift(imgEl);
      currentLightboxIndex = 0;
    }
    updateLightboxImage();
    lightbox.classList.remove("d-none");
    requestAnimationFrame(() => lightbox.classList.add("is-active"));
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove("is-active");
    document.body.classList.remove("lightbox-open");
    const handleTransitionEnd = () => {
      lightbox.classList.add("d-none");
      lightboxImage.setAttribute("src", "");
      currentLightboxIndex = -1;
      currentLightboxImages = [];
      lightbox.removeEventListener("transitionend", handleTransitionEnd);
    };
    lightbox.addEventListener("transitionend", handleTransitionEnd, { once: true });
  }

  function shiftLightbox(step) {
    if (!lightbox?.classList.contains("is-active") || currentLightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + step + currentLightboxImages.length) % currentLightboxImages.length;
    updateLightboxImage();
  }

  function renderAll(projectKey) {
    const data = projectData[projectKey];
    if (!data || !detailContent) return;
    // Hide title if project has subtitle (will be shown in first scene)
    if (data.subtitle) {
      detailTitle.textContent = "";
    } else {
      detailTitle.textContent = data.title || "";
    }
    // build scenes list
    if (Array.isArray(data.scenes) && data.scenes.length > 0) {
      // Show top-level description first if it exists (only if no subtitle)
      // Note: data.image is only used for homepage thumbnail, not displayed in project details
      const topDesc =
        data.desc && !data.subtitle
          ? `<div class="scene-block">
              ${data.desc ? `<div class="detail-desc">${data.desc}</div>` : ""}
            </div>`
          : "";

      const blocks = data.scenes
        .map((scene) => {
          const safeTitle = scene?.title ? String(scene.title) : "";
          const safeDesc = scene?.desc ? String(scene.desc) : "";
          const imgSrc = scene?.image || "";
          const images = scene?.images || [];
          const pdfSrc = scene?.pdf || "";

          // Handle PDF
          if (pdfSrc) {
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
                <div class="detail-pdf mt-3">
                  <iframe src="${pdfSrc}" width="100%" height="800px" style="border: none;"></iframe>
                  <div class="mt-2">
                    <a href="${pdfSrc}" target="_blank" class="btn btn-outline-primary">在新窗口中打开 PDF</a>
                  </div>
                </div>
              </div>
            `;
          }

          // Handle text-two-images layout (50% text left, 25%+25% images right)
          if (scene?.layout === "text-two-images" && images.length === 2 && safeDesc) {
            return `
              <div class="scene-block">
                <div class="detail-text-two-images">
                  <div class="detail-tti-text">
                    ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                    <div class="detail-desc">${safeDesc}</div>
                  </div>
                  <div class="detail-tti-image">
                    <img src="${images[0]}" alt="Image 1" class="img-fluid" />
                  </div>
                  <div class="detail-tti-image">
                    <img src="${images[1]}" alt="Image 2" class="img-fluid" />
                  </div>
                </div>
              </div>
            `;
          }

          // Handle nested grid layout (2 images stacked vertically on left, 1 on right)
          if (scene?.layout === "nested-grid" && images.length === 3) {
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
                <div class="detail-nested-grid mt-3">
                  <div class="detail-nested-left">
                    <div class="detail-image-stack">
                      <div class="stack-item"><img src="${images[0]}" alt="Image 1" class="img-fluid" /></div>
                      <div class="stack-item"><img src="${images[1]}" alt="Image 2" class="img-fluid" /></div>
                    </div>
                  </div>
                  <div class="detail-nested-right">
                    <img src="${images[2]}" alt="Image 3" class="img-fluid" />
                  </div>
                </div>
              </div>
            `;
          }

          // Handle text-image-split layout (left: image; right: image top, text bottom)
          if (scene?.layout === "text-image-split" && images.length === 2 && safeDesc) {
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                <div class="detail-text-image-split mt-3">
                  <div class="detail-split-left">
                    <img src="${images[0]}" alt="Image" class="img-fluid" />
                  </div>
                  <div class="detail-split-right">
                    <div class="detail-split-image">
                      <img src="${images[1]}" alt="Image" class="img-fluid" />
                    </div>
                    <div class="detail-split-text">
                      <div class="detail-desc">${safeDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }

          // Handle nested grid layout (1 image on left, 3 images stacked vertically on right)
          if (scene?.layout === "nested-grid-4" && images.length === 4) {
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
                <div class="detail-nested-grid-4 mt-3">
                  <div class="detail-nested-left-4">
                    <img src="${images[0]}" alt="Image 1" class="img-fluid" />
                  </div>
                  <div class="detail-nested-right-4">
                    <div class="detail-image-stack">
                      <div class="stack-item"><img src="${images[1]}" alt="Image 2" class="img-fluid" /></div>
                      <div class="stack-item"><img src="${images[2]}" alt="Image 3" class="img-fluid" /></div>
                      <div class="stack-item"><img src="${images[3]}" alt="Image 4" class="img-fluid" /></div>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }

          // Handle multi-image grid layout
          if (images.length > 1) {
            let gridClass = "grid-2";
            let customGridStyle = "";

            // Check if custom width ratios are provided
            if (scene?.widthRatios && Array.isArray(scene.widthRatios) && scene.widthRatios.length === images.length) {
              // Use custom width ratios (convert to fr units)
              const gridTemplateColumns = scene.widthRatios.map(ratio => `${ratio}fr`).join(" ");
              customGridStyle = ` style="grid-template-columns: ${gridTemplateColumns};"`;
              gridClass = ""; // Don't use default grid class
            } else {
              // Use default grid classes
              if (images.length === 4) {
                gridClass = "grid-4";
              } else if (images.length >= 7 || images.length === 3) {
                gridClass = "grid-3";
              } else if (images.length === 5) {
                gridClass = "grid-3-2"; // Special 3+2 layout for 5 images
              }
            }

            const noCropClass = scene?.noCrop ? " no-crop" : "";
            const equalHeightClass = scene?.equalHeight ? " equal-height" : "";
            const flexEqualHeightClass = scene?.flexEqualHeight ? " flex-equal-height" : "";

            // If flexEqualHeight is used, don't use grid classes
            const finalGridClass = flexEqualHeightClass ? "" : gridClass;

            const gridImages = images
              .map((img, idx) => `<div class="grid-item"><img src="${img}" alt="Image ${idx + 1}" class="img-fluid" /></div>`)
              .join("");
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
                <div class="detail-image-grid mt-3 ${finalGridClass}${noCropClass}${equalHeightClass}${flexEqualHeightClass}"${customGridStyle}>
                  ${gridImages}
                </div>
              </div>
            `;
          }

          // Handle audio scene
          if (scene?.audio) {
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
                <audio controls style="width: 100%; margin-top: 0.5rem;">
                  <source src="${scene.audio}" type="audio/mpeg">
                  Your browser does not support the audio element.
                </audio>
              </div>
            `;
          }

          // Handle video scene
          if (scene?.video) {
            const autoplayAttr = scene?.autoplay ? ' autoplay muted' : '';
            const loopAttr = scene?.loop ? ' loop' : '';
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
                <video controls${autoplayAttr}${loopAttr} playsinline style="width: 100%; margin-top: 0.5rem; border-radius: 2px;">
                  <source src="${scene.video}" type="video/mp4">
                  Your browser does not support the video element.
                </video>
              </div>
            `;
          }

          // Handle title-image layout (title and subtitle left, image right)
          if (scene?.layout === "title-image" && imgSrc && data.subtitle) {
            return `
              <div class="scene-block">
                <div class="detail-title-image">
                  <div class="detail-title-text">
                    <h2 class="detail-title-inline">${data.title}</h2>
                    <div class="detail-subtitle">${data.subtitle}</div>
                  </div>
                  <div class="detail-title-image-right">
                    <img src="${imgSrc}" alt="${data.title}" class="img-fluid" />
                  </div>
                </div>
              </div>
            `;
          }

          // Handle side-by-side layout (image left, text right, or reversed)
          if (scene?.layout === "side-by-side" && imgSrc && safeDesc) {
            const reversed = scene?.reversed || false;
            const matchTextHeightAttr = scene?.matchTextHeight ? ' data-match-text-height="true"' : '';
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                <div class="detail-side-by-side${reversed ? " reversed" : ""}"${matchTextHeightAttr}${scene?.splitRatio ? ` style="grid-template-columns: ${scene.splitRatio}"` : ""}>
                  ${reversed ? `
                  <div class="detail-side-text">
                    <div class="detail-desc">${safeDesc}</div>
                  </div>
                  <div class="detail-side-image">
                    <img src="${imgSrc}" alt="${safeTitle}" class="img-fluid" />
                  </div>
                  ` : `
                  <div class="detail-side-image">
                    <img src="${imgSrc}" alt="${safeTitle}" class="img-fluid" />
                  </div>
                  <div class="detail-side-text">
                    <div class="detail-desc">${safeDesc}</div>
                  </div>
                  `}
                </div>
              </div>
            `;
          }

          // Handle single image
          const centerClass = scene?.center ? " detail-image-center" : "";
          const scaleClass = scene?.scale ? " detail-image-scaled" : "";
          const scaleStyle = scene?.scale ? ` style="width: ${scene.scale * 100}%; height: auto; margin: 0 auto;"` : "";
          return `
            <div class="scene-block">
              ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
              ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
              ${imgSrc ? `<div class="detail-image mt-3${centerClass}${scaleClass}"><img src="${imgSrc}" alt="${safeTitle}" class="img-fluid"${scaleStyle} /></div>` : ""}
            </div>
          `;
        })
        .join("");
      detailContent.innerHTML = topDesc + blocks;

      // Match side-by-side image height to text height (only for elements with matchTextHeight flag)
      const sideBySides = detailContent.querySelectorAll('.detail-side-by-side[data-match-text-height="true"]');
      sideBySides.forEach((container) => {
        const textEl = container.querySelector(".detail-side-text");
        const imgEl = container.querySelector(".detail-side-image img");
        if (textEl && imgEl) {
          const applyHeight = () => {
            requestAnimationFrame(() => {
              const textHeight = textEl.offsetHeight;
              if (textHeight > 0) {
                imgEl.style.height = `${textHeight * 2}px`;
                imgEl.style.width = "auto";
                imgEl.style.objectFit = "contain";
              }
            });
          };
          if (imgEl.complete) {
            applyHeight();
          } else {
            imgEl.addEventListener("load", applyHeight, { once: true });
          }
          // Also handle window resize
          window.addEventListener("resize", applyHeight);
        }
      });

      // Adjust all grid layouts to have same height in each row, container size = image size
      const allGrids = detailContent.querySelectorAll(".detail-image-grid");
      allGrids.forEach((grid) => {
        const items = Array.from(grid.querySelectorAll(".grid-item"));
        if (items.length > 1) {
          const images = Array.from(grid.querySelectorAll("img"));

          // Wait for all images to load
          let loadedCount = 0;
          const totalImages = images.length;

          const adjustRowHeights = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              requestAnimationFrame(() => {
                // Get grid width (should be 100% of container)
                const gridWidth = grid.offsetWidth;
                const gap = parseFloat(getComputedStyle(grid).gap) || 12; // Default 0.75rem = 12px

                // Get image data with aspect ratios
                const imageData = images.map((img) => {
                  if (img.complete && img.naturalWidth && img.naturalHeight) {
                    const aspectRatio = img.naturalWidth / img.naturalHeight;
                    return { img, aspectRatio };
                  }
                  return null;
                }).filter(data => data !== null);

                if (imageData.length === 0) return;

                // Calculate the common height that makes total width = gridWidth
                // Total width = sum of (height * aspectRatio) + gaps
                // gridWidth = height * (sum of aspectRatios) + gap * (numImages - 1)
                // height = (gridWidth - gap * (numImages - 1)) / (sum of aspectRatios)
                const numImages = imageData.length;
                const totalGapWidth = gap * (numImages - 1);
                const sumAspectRatios = imageData.reduce((sum, data) => sum + data.aspectRatio, 0);
                const commonHeight = (gridWidth - totalGapWidth) / sumAspectRatios;

                // Set all items and images to the calculated dimensions
                items.forEach((item, idx) => {
                  const data = imageData[idx];
                  if (data) {
                    const imgWidth = commonHeight * data.aspectRatio;

                    // Set item dimensions to match image exactly
                    item.style.width = `${imgWidth}px`;
                    item.style.height = `${commonHeight}px`;
                    item.style.minWidth = '0';
                    item.style.minHeight = '0';
                    item.style.flexShrink = '0';

                    // Set image dimensions to match item exactly
                    data.img.style.width = `${imgWidth}px`;
                    data.img.style.height = `${commonHeight}px`;
                    data.img.style.objectFit = 'contain';
                    data.img.style.display = 'block';
                  }
                });

                // Set grid height to match image height (container = image size)
                grid.style.height = `${commonHeight}px`;
              });
            }
          };

          images.forEach((img) => {
            if (img.complete) {
              adjustRowHeights();
            } else {
              img.addEventListener("load", adjustRowHeights, { once: true });
            }
          });
        }
      });

      // Adjust nested-grid-4 layout: calculate total height of right side images and match left side
      const nestedGrid4Containers = detailContent.querySelectorAll(".detail-nested-grid-4");
      nestedGrid4Containers.forEach((container) => {
        const leftImg = container.querySelector(".detail-nested-left-4 img");
        const rightStack = container.querySelector(".detail-nested-right-4 .detail-image-stack");
        const rightImages = Array.from(container.querySelectorAll(".detail-nested-right-4 .stack-item img"));

        if (leftImg && rightStack && rightImages.length === 3) {
          const adjustHeights = () => {
            // Wait a bit for layout to settle
            requestAnimationFrame(() => {
              // Image dimensions:
              // Image 8: 2072x1841 (aspect ratio: 2072/1841 ≈ 1.125)
              // Images 9,10,11: 667x667 each (aspect ratio: 1)
              // Algorithm:
              // 1. First ensure image 8 height = total height of images 9,10,11
              // 2. Then scale all images proportionally based on container width

              if (leftImg.complete && leftImg.naturalWidth && leftImg.naturalHeight &&
                rightImages.every(img => img.complete && img.naturalWidth && img.naturalHeight)) {

                // Get container dimensions
                const containerWidth = container.offsetWidth;
                const leftWidthRatio = 2 / (2 + 1); // ~66.7%
                const rightWidthRatio = 1 / (2 + 1); // ~33.3%
                const leftMaxWidth = containerWidth * leftWidthRatio;
                const rightMaxWidth = containerWidth * rightWidthRatio;
                const gap = 0; // No gap between images

                // Step 1: Calculate ideal dimensions where image 8 height = images 9,10,11 total height
                const leftAspectRatio = leftImg.naturalWidth / leftImg.naturalHeight; // 2072/1841 ≈ 1.125
                const rightAspectRatio = 1; // 667x667

                // Let H = height of image 8 = total height of images 9,10,11
                // Image 8: width = H × 1.125, height = H
                // Images 9,10,11: each height = H / 3, each width = H / 3 (no gap)
                // Right side total width needed = H / 3

                // We need to find H such that:
                // - Image 8 width (H × 1.125) <= leftMaxWidth
                // - Right side width (H / 3) <= rightMaxWidth
                // - Use the constraint that gives smaller H

                // From left side: H × 1.125 <= leftMaxWidth => H <= leftMaxWidth / 1.125
                const maxHFromLeft = leftMaxWidth / leftAspectRatio;

                // From right side: H / 3 <= rightMaxWidth => H <= rightMaxWidth × 3
                const maxHFromRight = rightMaxWidth * 3;

                // Use the smaller constraint to ensure both fit
                const targetHeight = Math.min(maxHFromLeft, maxHFromRight);

                // Step 2: Calculate actual dimensions
                const leftHeight = targetHeight;
                const leftWidth = targetHeight * leftAspectRatio;

                const singleRightHeight = targetHeight / 3;
                const singleRightWidth = singleRightHeight; // aspect ratio = 1
                const rightTotalHeight = singleRightHeight * 3;

                // Step 3: Apply scaling if needed (shouldn't be needed if calculation is correct)
                let finalLeftWidth = leftWidth;
                let finalLeftHeight = leftHeight;
                let finalRightWidth = singleRightWidth;
                let finalRightHeight = singleRightHeight;

                if (leftWidth > leftMaxWidth) {
                  const scale = leftMaxWidth / leftWidth;
                  finalLeftWidth = leftMaxWidth;
                  finalLeftHeight = leftHeight * scale;
                }

                if (singleRightWidth > rightMaxWidth) {
                  const scale = rightMaxWidth / singleRightWidth;
                  finalRightWidth = rightMaxWidth;
                  finalRightHeight = singleRightHeight * scale;
                  // Recalculate total height
                  const newRightTotalHeight = finalRightHeight * 3;
                  // Adjust left to match
                  finalLeftHeight = newRightTotalHeight;
                  finalLeftWidth = finalLeftHeight * leftAspectRatio;
                  if (finalLeftWidth > leftMaxWidth) {
                    const leftScale = leftMaxWidth / finalLeftWidth;
                    finalLeftWidth = leftMaxWidth;
                    finalLeftHeight = finalLeftHeight * leftScale;
                  }
                }

                // Step 4: Apply dimensions
                leftImg.style.width = `${finalLeftWidth}px`;
                leftImg.style.height = `${finalLeftHeight}px`;

                const leftContainer = leftImg.parentElement;
                leftContainer.style.height = `${finalLeftHeight}px`;

                rightStack.style.height = `${finalRightHeight * 3}px`;

                rightImages.forEach((img) => {
                  const stackItem = img.closest(".stack-item");
                  if (stackItem) {
                    stackItem.style.height = `${finalRightHeight}px`;
                    img.style.width = `${finalRightWidth}px`;
                    img.style.height = `${finalRightHeight}px`;
                  }
                });
              }
            });
          };

          // Wait for all images to load
          let loadedCount = 0;
          const totalImages = rightImages.length + 1;

          const checkAndAdjust = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              adjustHeights();
            }
          };

          // Add load listeners
          if (leftImg.complete) {
            checkAndAdjust();
          } else {
            leftImg.addEventListener("load", checkAndAdjust, { once: true });
          }

          rightImages.forEach((img) => {
            if (img.complete) {
              checkAndAdjust();
            } else {
              img.addEventListener("load", checkAndAdjust, { once: true });
            }
          });
        }
      });

      // Adjust equal-height grids to have the same height and match image sizes
      const equalHeightGrids = detailContent.querySelectorAll(".detail-image-grid.equal-height");

      // Store resize handlers for cleanup
      const resizeHandlers = [];

      equalHeightGrids.forEach((grid) => {
        const items = Array.from(grid.querySelectorAll(".grid-item"));
        if (items.length > 1) {
          // Wait for images to load
          const images = Array.from(grid.querySelectorAll("img"));
          let loadedCount = 0;
          const totalImages = images.length;

          const setEqualHeightAndSize = () => {
            // Use requestAnimationFrame to ensure DOM is fully rendered
            requestAnimationFrame(() => {
              // Get grid width
              const gridWidth = grid.offsetWidth;
              // Use 0 gap for equal-height grids to make images touch each other
              const gap = 0;
              const totalAvailableWidth = gridWidth - gap * (items.length - 1);

              // Get image natural dimensions and calculate aspect ratios
              const imageData = images.map((img, idx) => {
                const naturalWidth = img.naturalWidth || img.width;
                const naturalHeight = img.naturalHeight || img.height;
                const aspectRatio = naturalWidth / naturalHeight;
                return {
                  img,
                  item: items[idx],
                  naturalWidth,
                  naturalHeight,
                  aspectRatio
                };
              });

              // Calculate heights for each image if each takes equal width
              const equalWidth = totalAvailableWidth / items.length;
              const heights = imageData.map(data => equalWidth / data.aspectRatio);

              // Use the maximum height for all containers (to ensure same height)
              const maxHeight = Math.max(...heights);

              // Calculate widths based on max height and aspect ratios
              const widths = imageData.map(data => maxHeight * data.aspectRatio);
              const totalWidth = widths.reduce((sum, w) => sum + w, 0);

              // If total width exceeds available space, scale down proportionally
              let scale = 1;
              if (totalWidth > totalAvailableWidth) {
                scale = totalAvailableWidth / totalWidth;
              }

              // Apply scale and set container and image sizes
              imageData.forEach((data, idx) => {
                const item = data.item;
                const img = data.img;

                // Calculate final dimensions with scale
                const containerHeight = maxHeight * scale;
                const containerWidth = widths[idx] * scale;

                // Set container size
                item.style.width = `${containerWidth}px`;
                item.style.height = `${containerHeight}px`;
                item.style.minWidth = "0";
                item.style.minHeight = "0";
                item.style.maxWidth = "100%";
                item.style.maxHeight = "none";
                item.style.flexShrink = "1";
                item.style.flexGrow = "0";
                item.style.margin = "0";
                item.style.padding = "0";

                // Set image size to match container
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.maxWidth = "100%";
                img.style.maxHeight = "100%";
                img.style.objectFit = "contain";
                img.style.margin = "0";
                img.style.padding = "0";
                img.style.display = "block";
              });
            });
          };

          if (totalImages === 0) {
            // No images, skip
            return;
          } else {
            // Check if all images are already loaded
            const allLoaded = images.every(img => img.complete && img.naturalHeight > 0);

            if (allLoaded) {
              setTimeout(setEqualHeightAndSize, 0);
            } else {
              images.forEach((img) => {
                if (img.complete && img.naturalHeight > 0) {
                  loadedCount++;
                } else {
                  img.addEventListener("load", () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                      setTimeout(setEqualHeightAndSize, 0);
                    }
                  }, { once: true });
                  img.addEventListener("error", () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                      setTimeout(setEqualHeightAndSize, 0);
                    }
                  }, { once: true });
                }
              });

              // Also check if all loaded after initial check
              if (loadedCount === totalImages) {
                setTimeout(setEqualHeightAndSize, 0);
              }
            }
          }

          // Add resize listener to recalculate on window resize
          const resizeHandler = () => {
            if (images.every(img => img.complete && img.naturalHeight > 0)) {
              setEqualHeightAndSize();
            }
          };
          window.addEventListener("resize", resizeHandler);
          resizeHandlers.push(resizeHandler);
        }
      });

      // Clean up previous resize handlers when project changes
      if (window._equalHeightResizeHandlers) {
        window._equalHeightResizeHandlers.forEach(handler => {
          window.removeEventListener("resize", handler);
        });
      }
      if (resizeHandlers.length > 0) {
        window._equalHeightResizeHandlers = resizeHandlers;
      }

      // Handle flex-equal-height grids (different sizes, same height, left-aligned, consistent gaps)
      const flexEqualHeightGrids = detailContent.querySelectorAll(".detail-image-grid.flex-equal-height");
      const flexResizeHandlers = [];

      flexEqualHeightGrids.forEach((grid) => {
        const items = Array.from(grid.querySelectorAll(".grid-item"));
        if (items.length > 1) {
          const images = Array.from(grid.querySelectorAll("img"));
          let loadedCount = 0;
          const totalImages = images.length;

          const setFlexEqualHeight = () => {
            requestAnimationFrame(() => {
              // Reset all heights first
              items.forEach((item) => {
                item.style.height = "auto";
              });

              // Force a reflow
              void grid.offsetHeight;

              // Get available width and gap
              const gridWidth = grid.offsetWidth;
              const gap = parseFloat(getComputedStyle(grid).gap) || 0.75 * 16; // Default 0.75rem in px
              const totalGap = gap * (items.length - 1);
              const availableWidth = gridWidth - totalGap;

              // Get image natural dimensions and calculate aspect ratios
              const imageData = images.map((img, idx) => {
                const naturalWidth = img.naturalWidth || img.width;
                const naturalHeight = img.naturalHeight || img.height;
                const aspectRatio = naturalWidth / naturalHeight;

                return {
                  img,
                  item: items[idx],
                  aspectRatio
                };
              });

              // Calculate height so that total width equals available width
              // Formula: availableWidth = sum(height * aspectRatio[i])
              // So: height = availableWidth / sum(aspectRatio[i])
              const totalAspectRatio = imageData.reduce((sum, data) => sum + data.aspectRatio, 0);
              const calculatedHeight = totalAspectRatio > 0 ? availableWidth / totalAspectRatio : 400;

              // Set all items to calculated height
              if (calculatedHeight > 0) {
                items.forEach((item) => {
                  item.style.height = `${calculatedHeight}px`;
                });
              }
            });
          };

          if (totalImages === 0) {
            return;
          } else {
            const allLoaded = images.every(img => img.complete && img.naturalHeight > 0);

            if (allLoaded) {
              setTimeout(setFlexEqualHeight, 0);
            } else {
              images.forEach((img) => {
                if (img.complete && img.naturalHeight > 0) {
                  loadedCount++;
                } else {
                  img.addEventListener("load", () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                      setTimeout(setFlexEqualHeight, 0);
                    }
                  }, { once: true });
                  img.addEventListener("error", () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                      setTimeout(setFlexEqualHeight, 0);
                    }
                  }, { once: true });
                }
              });

              if (loadedCount === totalImages) {
                setTimeout(setFlexEqualHeight, 0);
              }
            }
          }

          // Add resize listener
          const resizeHandler = () => {
            if (images.every(img => img.complete && img.naturalHeight > 0)) {
              setFlexEqualHeight();
            }
          };
          window.addEventListener("resize", resizeHandler);
          flexResizeHandlers.push(resizeHandler);
        }
      });

      // Clean up previous flex resize handlers
      if (window._flexEqualHeightResizeHandlers) {
        window._flexEqualHeightResizeHandlers.forEach(handler => {
          window.removeEventListener("resize", handler);
        });
      }
      if (flexResizeHandlers.length > 0) {
        window._flexEqualHeightResizeHandlers = flexResizeHandlers;
      }
    } else {
      // fallback single content
      const safeDesc = data.desc ? String(data.desc) : "";
      const img = data.image
        ? `<div class="detail-image mt-3"><img src="${data.image}" alt="${data.title || "Project"}" class="img-fluid" /></div>`
        : "";
      detailContent.innerHTML = `
        <div class="scene-block">
          <div class="detail-desc">${safeDesc}</div>
          ${img}
        </div>
      `;
    }
  }

  // Function to show project detail
  function showProjectDetail(projectKey, clickedElement, updateHistory = true) {
    const data = projectData[projectKey];
    if (!data) return;

    currentProjectKey = projectKey;
    document.body.classList.remove("page-is-home");
    // set active state for project links
    links.forEach((n) => n.classList.remove("is-active"));
    const correspondingLink = document.querySelector(`.project-link[data-project="${projectKey}"]`);
    if (correspondingLink) {
      correspondingLink.classList.add("is-active");
    }

    renderAll(projectKey);

    // show detail, hide grid
    imageGrid.classList.add("d-none");
    detail.classList.remove("d-none");

    // Update browser history
    if (updateHistory) {
      const newUrl = `#project=${projectKey}`;
      window.history.pushState({ project: projectKey }, "", newUrl);
    }
  }

  // Function to show home (image grid)
  function showHome(updateHistory = true) {
    currentProjectKey = null;
    document.body.classList.add("page-is-home");
    // clear active state
    links.forEach((n) => n.classList.remove("is-active"));

    // show grid, hide detail
    if (imageGrid) imageGrid.classList.remove("d-none");
    if (detail) detail.classList.add("d-none");

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update browser history
    if (updateHistory) {
      window.history.pushState({ project: null }, "", "#");
    }
  }

  // Add click listeners to project links
  links.forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.getAttribute("data-project");
      showProjectDetail(key, el, true);
    });
  });

  // Add click listeners to image items
  imageItems.forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.getAttribute("data-project");
      showProjectDetail(key, el, true);
    });

    // Add hover effect from image to list item
    el.addEventListener("mouseenter", () => {
      const key = el.getAttribute("data-project");
      if (key) {
        const link = document.querySelector(`.project-link[data-project="${key}"]`);
        if (link) {
          link.classList.add("is-hovered");
        }
      }
    });

    el.addEventListener("mouseleave", () => {
      const key = el.getAttribute("data-project");
      if (key) {
        const link = document.querySelector(`.project-link[data-project="${key}"]`);
        if (link) {
          link.classList.remove("is-hovered");
        }
      }
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener("popstate", (event) => {
    // Check both event.state and URL hash
    const hash = window.location.hash;
    if (hash && hash.startsWith("#project=")) {
      const projectKey = hash.replace("#project=", "");
      if (projectData[projectKey]) {
        showProjectDetail(projectKey, null, false);
        return;
      }
    }
    // If no project in URL, show home
    showHome(false);
  });

  detailContent.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLImageElement) {
      openLightboxFromElement(target);
    }
  });

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keyup", (event) => {
    if (!lightbox?.classList.contains("is-active")) return;
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      shiftLightbox(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      shiftLightbox(-1);
    }
  });

  // Resume link: open horizontal.png in lightbox (same as project images)
  const resumeLink = document.querySelector(".resume-link");
  const resumeImageEl = document.getElementById("resumeImage");
  if (resumeLink && resumeImageEl) {
    resumeImageEl.setAttribute("src", horizontalImage);
    resumeLink.addEventListener("click", (e) => {
      e.preventDefault();
      openLightboxFromElement(resumeImageEl);
    });
  }

  // Check URL on page load
  const hash = window.location.hash;
  if (hash && hash.startsWith("#project=")) {
    const projectKey = hash.replace("#project=", "");
    if (projectData[projectKey]) {
      // Set initial history state
      window.history.replaceState({ project: projectKey }, "", hash);
      showProjectDetail(projectKey, null, false);
    }
  } else {
    // Set initial history state for home
    document.body.classList.add("page-is-home");
    window.history.replaceState({ project: null }, "", "#");
  }

  // Return functions for external use
  return { showProjectDetail, showHome };
}

function setupBackHome() {
  const imageGrid = document.getElementById("imageGrid");
  const detail = document.getElementById("projectDetail");
  const backLinks = document.querySelectorAll(".back-home");
  backLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      // 返回到默认图片网格视图
      if (detail && !detail.classList.contains("d-none")) {
        e.preventDefault();
        // Use history API to update URL and trigger popstate
        window.history.pushState({ project: null }, "", "#");
        // Manually trigger the home view
        const links = document.querySelectorAll(".project-link[data-project]");
        links.forEach((n) => n.classList.remove("is-active"));
        detail.classList.add("d-none");
        if (imageGrid) imageGrid.classList.remove("d-none");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

// initialize after DOM ready
let projectDetailHandlers = null;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    projectDetailHandlers = setupProjectDetail();
    setupBackHome();
  });
} else {
  projectDetailHandlers = setupProjectDetail();
  setupBackHome();
}
