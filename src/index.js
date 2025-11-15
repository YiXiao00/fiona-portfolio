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
import lacertrendering1 from "./assets/LACERTA Showroom/rendering1.jpg";
import lacertrendering2 from "./assets/LACERTA Showroom/rendering2.jpg";
import lacertrendering3 from "./assets/LACERTA Showroom/rendering3.jpg";
import lacertrendering4 from "./assets/LACERTA Showroom/rendering4.jpg";
import lacertrendering5 from "./assets/LACERTA Showroom/rendering5.jpg";
import lacertrendering6 from "./assets/LACERTA Showroom/rendering6.jpg";
import lacertrendering7 from "./assets/LACERTA Showroom/rendering7.jpg";

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
import silverNarrative from "./assets/Silver Valley Exhibition/narrative.png";
import silverFloorplan from "./assets/Silver Valley Exhibition/floorplan.png";

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
        image: lacertaMoodboard,
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
        desc: "The original site was a square-shaped room. The design process began with understanding the studio’s operational needs, including equipment, staff capacity, and workflow — as well as the quantity and type of garments to be displayed in the showroom. The spatial layout and atmosphere were developed in response to the brand’s distinctive identity and aesthetic tone.",
        image: lacertaPlan,
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
    ],
  },
  "project-f": {
    title: "From here to eternity",
    desc: "In 2023, marking the 70th anniversary of Eugene O'Neill's death, the title Long Day's Journey Into Night is borrowed from his iconic play — paying tribute to the tradition of the living room drama through spatial scenes.<br><br>As playwright Edward Bond once said:<br><br>\"The living room is the world.\"<br><br>This project focuses on constructing theatrical space, divided into two parts — an interior domestic setting and a stage environment. Through the use of spatial symbolism, lighting, and shadow, the design explores how physical space can embody emotional tension and narrative atmosphere, paying homage to the tradition of the drama.",
    scenes: [
      {
        title: "",
        desc: "",
        image: eternityMain1,
      },
      {
        title: "",
        desc: "",
        image: eternityNew,
      },
      {
        title: "",
        desc: "",
        images: [eternity2, eternity6, eternity5],
      },
      {
        title: "",
        desc: "",
        image: eternity3,
      },
      {
        title: "",
        desc: "",
        images: [eternity4, eternity7],
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
        images: [silverNarrative, silverStructure],
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
    detailTitle.textContent = data.title || "";
    // build scenes list
    if (Array.isArray(data.scenes) && data.scenes.length > 0) {
      // Show top-level description first if it exists
      // Note: data.image is only used for homepage thumbnail, not displayed in project details
      const topDesc =
        data.desc
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
          
          // Handle side-by-side layout (image left, text right)
          if (scene?.layout === "side-by-side" && imgSrc && safeDesc) {
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                <div class="detail-side-by-side">
                  <div class="detail-side-image">
                    <img src="${imgSrc}" alt="${safeTitle}" class="img-fluid" />
                  </div>
                  <div class="detail-side-text">
                    <div class="detail-desc">${safeDesc}</div>
                  </div>
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
  function showProjectDetail(projectKey, clickedElement) {
    const data = projectData[projectKey];
    if (!data) return;

    currentProjectKey = projectKey;
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
  }

  // Add click listeners to project links
  links.forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.getAttribute("data-project");
      showProjectDetail(key, el);
    });
  });

  // Add click listeners to image items
  imageItems.forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.getAttribute("data-project");
      showProjectDetail(key, el);
    });
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
        detail.classList.add("d-none");
        if (imageGrid) imageGrid.classList.remove("d-none");
        // clear active state
        const links = document.querySelectorAll(".project-link[data-project]");
        links.forEach((n) => n.classList.remove("is-active"));
        // 可选：滚动到页面顶部
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

// initialize after DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setupProjectDetail();
    setupBackHome();
  });
} else {
  setupProjectDetail();
  setupBackHome();
}
