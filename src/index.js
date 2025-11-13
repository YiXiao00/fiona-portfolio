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

// LACERTA Showroom images
import lacertaPhoto1 from "./assets/LACERTA Showroom/photo1.png";
import lacertaPhoto2 from "./assets/LACERTA Showroom/photo2.png";
import lacertaPhoto3 from "./assets/LACERTA Showroom/photo3.png";
import lacertaPhoto4 from "./assets/LACERTA Showroom/photo4.png";
import lacertaPhoto5 from "./assets/LACERTA Showroom/photo5.png";
import lacertamodel1 from "./assets/LACERTA Showroom/model1.png";
import lacertrendering1 from "./assets/LACERTA Showroom/rendering1.png";
import lacertrendering2 from "./assets/LACERTA Showroom/rendering2.png";
import lacertrendering3 from "./assets/LACERTA Showroom/rendering3.png";
import lacertrendering4 from "./assets/LACERTA Showroom/rendering4.png";
import lacertrendering5 from "./assets/LACERTA Showroom/rendering5.png";
import lacertrendering6 from "./assets/LACERTA Showroom/rendering6.png";
import lacertrendering7 from "./assets/LACERTA Showroom/rendering7.png";

// From here to Eternity images
import eternityMain1 from "./assets/From here to Eternity/main and 1.png";
import eternity2 from "./assets/From here to Eternity/2.png";
import eternity3 from "./assets/From here to Eternity/3.png";
import eternity4 from "./assets/From here to Eternity/4.png";
import eternity5 from "./assets/From here to Eternity/5.png";
import eternity6 from "./assets/From here to Eternity/6.png";
import eternity7 from "./assets/From here to Eternity/7.png";
import eternity8 from "./assets/From here to Eternity/8rendering.png";
import eternitySet1 from "./assets/From here to Eternity/set1.png";
import eternitySet2 from "./assets/From here to Eternity/set2.png";
import eternitySet3 from "./assets/From here to Eternity/set3.png";
import eternitySet4 from "./assets/From here to Eternity/set4.png";
import eternitySet5 from "./assets/From here to Eternity/set5.png";
import eternitySet6 from "./assets/From here to Eternity/set6.png";
import eternitySet7 from "./assets/From here to Eternity/set7.png";
import eternitySet8 from "./assets/From here to Eternity/set8.png";

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
    title: "PhotoGal Series",
    desc:
      "<strong>Series:</strong> PhotoGal Collection<br><strong>Format:</strong> 2025 photographic study focusing on rhythm, color, and urban texture.",
    image: null,
    scenes: [
      {
        title: "Gallery",
        desc: "",
        images: [photo1, photo2, photo3, photo5, photo6, photo7, photo8, photo9],
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
    desc: "<strong>Site:</strong> He Dong Mansion, Shanghai<br><strong>Time:</strong> 2025<br>This project was designed for the fashion brand LACERTA, creating a multifunctional space that integrates office, reception, and retail functions. <br>The original site was a square-shaped room. The design process began with understanding the studio’s operational needs, including equipment, staff capacity, and workflow — as well as the quantity and type of garments to be displayed in the showroom. The spatial layout and atmosphere were developed in response to the brand’s distinctive identity and aesthetic tone.",
    scenes: [
      {
        title: "",
        desc: "",
        images: [lacertaPhoto1, lacertaPhoto2],
      },
      {
        title: "",
        desc: "",
        images: [lacertaPhoto3, lacertaPhoto4],
      },
      {
        title: "",
        desc: "",
        image: lacertaPhoto5,
      },
      {
        title: "",
        desc: "",
        images: [lacertrendering1, lacertrendering2],
      },
      {
        title: "",
        desc: "",
        images: [lacertrendering3, lacertrendering4],
      },
      {
        title: "",
        desc: "",
        images: [lacertrendering5, lacertrendering6],
      },
      {
        title: "",
        desc: "",
        image: lacertrendering7,
      },
      {
        title: "",
        desc: "",
        image: lacertamodel1,
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
        image: eternity2,
      },
      {
        title: "",
        desc: "",
        image: eternity3,
      },
      {
        title: "",
        desc: "",
        image: eternity4,
      },
      {
        title: "",
        desc: "",
        image: eternity5,
      },
      {
        title: "",
        desc: "",
        image: eternity6,
      },
      {
        title: "",
        desc: "",
        image: eternity7,
      },
      {
        title: "",
        desc: "",
        image: eternity8,
      },
      {
        title: "",
        desc: "",
        image: eternitySet1,
      },
      {
        title: "",
        desc: "",
        image: eternitySet2,
      },
      {
        title: "",
        desc: "",
        image: eternitySet3,
      },
      {
        title: "",
        desc: "",
        image: eternitySet4,
      },
      {
        title: "",
        desc: "",
        image: eternitySet5,
      },
      {
        title: "",
        desc: "",
        image: eternitySet6,
      },
      {
        title: "",
        desc: "",
        image: eternitySet7,
      },
      {
        title: "",
        desc: "",
        image: eternitySet8,
      },
    ],
  },
  "project-g": {
    title: "Project G",
    desc: "项目简介占位文本。",
    image: "assets/project.jpg",
  },
  "project-h": {
    title: "Project H",
    desc: "项目简介占位文本。",
    image: "assets/project.jpg",
  },
  "project-i": {
    title: "Project I",
    desc: "项目简介占位文本。",
    image: "assets/project.jpg",
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
      // Show top-level description and optional lead image first if they exist
      const topDesc =
        data.desc || data.image
          ? `<div class="scene-block">
              ${data.desc ? `<div class="detail-desc">${data.desc}</div>` : ""}
              ${
                data.image
                  ? `<div class="detail-image mt-3"><img src="${data.image}" alt="${data.title || "Project"}" class="img-fluid" /></div>`
                  : ""
              }
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
            const gridClass = images.length >= 7 ? "grid-3" : "grid-2";
            const gridImages = images
              .map((img, idx) => `<div class="grid-item"><img src="${img}" alt="Image ${idx + 1}" class="img-fluid" /></div>`)
              .join("");
            return `
              <div class="scene-block">
                ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
                ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
                <div class="detail-image-grid mt-3 ${gridClass}">
                  ${gridImages}
                </div>
              </div>
            `;
          }
          
          // Handle single image
          return `
            <div class="scene-block">
              ${safeTitle ? `<h3 class="detail-scene-title">${safeTitle}</h3>` : ""}
              ${safeDesc ? `<div class="detail-desc">${safeDesc}</div>` : ""}
              ${imgSrc ? `<div class="detail-image mt-3"><img src="${imgSrc}" alt="${safeTitle}" class="img-fluid" /></div>` : ""}
            </div>
          `;
        })
        .join("");
      detailContent.innerHTML = topDesc + blocks;
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
