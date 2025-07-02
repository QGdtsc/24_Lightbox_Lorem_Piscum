let is_loading = false



for (let i = 0; i < 16; i++) {
    // for (let i = 0; i < 16; i++) {
    // console.log(i == max_initial_img-1)
    randomHeightMiniature = Math.floor(Math.random() * (300 - 200 + 1) + 200)
    randomWidthMiniature = Math.floor(Math.random() * (400 - 200 + 1) + 200)
    randomHeight = Math.floor(Math.random() * (1000 - 300 + 1) + 300)
    randomWidth = Math.floor(Math.random() * (1000 - 300 + 1) + 300)
    let randomID = Math.floor(Math.random() * 300)
    // console.log('randomID ' + randomID)
    htmlElement = `
        <div class= "flex justify-center items-center my-2 sm:m-0">
            <a class="example-image-link" href="https://picsum.photos/id/${randomID}/${randomHeight}/${randomWidth}"
                data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img class="example-image" src="https://picsum.photos/id/${randomID}/${randomHeightMiniature}/${randomWidthMiniature}" alt="ERROR" onerror="handleImageError(this, ${randomID}, ${randomHeight}, ${randomWidth}, ${randomHeightMiniature}, ${randomWidthMiniature}, ${i})" data-attempt="1" /></a>
        </div>
    `
    // class="example-image" src="https://picsum.photos/id/${randomID}/${randomHeightMiniature}/${randomWidthMiniature}" alt="ERROR" /></a>               
    // class="example-image" src="https://picsum.photos/id/${randomID}/${randomHeightMiniature}/${randomWidthMiniature}" alt="ERROR" onerror="this.src='https://picsum.photos/id/1/${randomHeightMiniature}/${randomWidthMiniature}'" /></a>
    document.getElementById("galerieContent").innerHTML += htmlElement
}

window.addEventListener("scroll", () => {
    nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100

    if (nearBottom) {
        // console.log('proche fin')
        load_8_images()
    }
}
)

function load_8_images() {
    if (is_loading) {
        return
    }
    is_loading = true
    for (i = 0; i < 8; i++) {
    randomHeightMiniature = Math.floor(Math.random() * (300 - 200 + 1) + 200)
    randomWidthMiniature = Math.floor(Math.random() * (400 - 200 + 1) + 200)
    randomHeight = Math.floor(Math.random() * (1000 - 300 + 1) + 300)
    randomWidth = Math.floor(Math.random() * (1000 - 300 + 1) + 300)
    let randomID = Math.floor(Math.random() * 300)
    htmlElement = `
        <div class= "flex justify-center items-center my-2 sm:m-0">
            <a class="example-image-link" href="https://picsum.photos/id/${randomID}/${randomHeight}/${randomWidth}"
                data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img class="example-image" src="https://picsum.photos/id/${randomID}/${randomHeightMiniature}/${randomWidthMiniature}" alt="ERROR" onerror="handleImageError(this, ${randomID}, ${randomHeight}, ${randomWidth}, ${randomHeightMiniature}, ${randomWidthMiniature}, ${i})" data-attempt="1" /></a>
        </div>
    `
    document.getElementById("galerieContent").innerHTML += htmlElement
    }
    setTimeout(() => {
        is_loading = false
    }, 2000);
}



function handleImageError(img, id, randomHeight, randomWidth, randomHeightMiniature, randomWidthMiniature, i) {
    let attempt = parseInt(img.dataset.attempt || "1");
    if (attempt >= 5) {
        console.warn(`❌ Image ${id} échoue après ${attempt} tentatives. On arrête.`);
        img.src = "https://via.placeholder.com/200x300?text=Erreur";
        img.closest('a').href = "#";
        return;
    }
    const nextID = id + 1;
    console.warn(`⚠️ Tentative ${attempt} : image ID ${id} échoue, on teste ID ${nextID}`);
    // Met à jour l’image
    img.src = `https://picsum.photos/id/${nextID}/${randomHeightMiniature}/${randomWidthMiniature}`;
    img.dataset.attempt = attempt + 1;
    // Met à jour le lien
    const link = img.closest('a');
    if (link) {
        link.href = `https://picsum.photos/id/${nextID}/${randomHeight}/${randomWidth}`;
    }
    // Remet l’attribut onerror pour que la récursion continue avec le bon ID
    img.setAttribute("onerror", `handleImageError(this, ${nextID}, ${randomHeight}, ${randomWidth}, ${randomHeightMiniature}, ${randomWidthMiniature}, ${i})`);
}







// // PROPOSITION DE COPILOT ***************************************************************************************************************************
// // **************************************************************************************************************************************************
// for (let i = 0; i < 16; i++) {
//   const randomHeightMiniature = Math.floor(Math.random() * 101) + 200;
//   const randomWidthMiniature = Math.floor(Math.random() * 201) + 200;
//   const randomHeight = Math.floor(Math.random() * 701) + 300;
//   const randomWidth = Math.floor(Math.random() * 701) + 300;
//   let randomID = Math.floor(Math.random() * 300);

//   const div = document.createElement("div");
//   div.className = "flex justify-center items-center my-2 sm:m-0";

//   const a = document.createElement("a");
//   a.className = "example-image-link";
//   a.href = `https://picsum.photos/id/${randomID}/${randomHeight}/${randomWidth}`;
//   a.setAttribute("data-lightbox", "example-set");
//   a.setAttribute("data-title", "Click the right half of the image to move forward.");

//   const img = new Image();
//   img.className = "example-image";
//   img.src = `https://picsum.photos/id/${randomID}/${randomHeightMiniature}/${randomWidthMiniature}`;
//   img.alt = "ERROR";

//   // Stocker toutes les infos utiles directement sur l’image
//   img.dataset.id = randomID;
//   img.dataset.hFull = randomHeight;
//   img.dataset.wFull = randomWidth;
//   img.dataset.hMini = randomHeightMiniature;
//   img.dataset.wMini = randomWidthMiniature;
//   img.dataset.attempt = "1";

//   // Écouteur erreur
//   img.onerror = () => handleImageError(img, a);

//   a.appendChild(img);
//   div.appendChild(a);
//   document.getElementById("galerieContent").appendChild(div);
// }


// function handleImageError(img, a) {
//   let attempt = parseInt(img.dataset.attempt);
//   let id = parseInt(img.dataset.id);

//   if (attempt >= 5) {
//     console.warn(`❌ Image ${id} échoue après ${attempt} tentatives. On arrête.`);
//     img.src = "https://via.placeholder.com/200x300?text=Erreur";
//     a.href = "#";
//     return;
//   }

//   const nextID = id + 1;
//   console.warn(`⚠️ Tentative ${attempt} : image ID ${id} échoue, on teste ID ${nextID}`);

//   // Mise à jour
//   img.dataset.id = nextID;
//   img.dataset.attempt = attempt + 1;
//   img.src = `https://picsum.photos/id/${nextID}/${img.dataset.hMini}/${img.dataset.wMini}`;
//   a.href = `https://picsum.photos/id/${nextID}/${img.dataset.hFull}/${img.dataset.wFull}`;
// }

// // FIN DE PROPOSITION DE COPILOT ********************************************************************************************************************
// // **************************************************************************************************************************************************

