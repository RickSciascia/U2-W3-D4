const primaryURL = "https://api.pexels.com/v1/search?query=cats";
const secondaryURL = "https://api.pexels.com/v1/search?query=tigers";

const loadImages = function () {
  fetch(primaryURL, {
    headers: {
      Authorization: "3VbZitPxdhDy8FkJyrffF4w1K819XTGYd1SvcM5so2qtkSKDVKRVkyZg",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    })
    .then((data) => {
      console.log(data);
      const img = document.getElementsByClassName("bd-placeholder-img");
      console.log(img);
      const smallTxt = document.getElementsByTagName("small");
      console.log(smallTxt);
      const imgArray = [];
      const idArray = [];

      //   const imgTag = document.getElementsByTagName("img");
      //   console.log(imgTag);
      data.photos.forEach((photo) => {
        //dentro l'oggetto data > nell array photos, per ogni (elemento quindi in questo caso foto):
        // metto l'URL src della foto di dimensione media.
        const imgSRC = photo.src.medium;
        imgArray.push(imgSRC);
        const id = photo.id;
        idArray.push(id);
      });
      for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("src", imgArray[i]);
        smallTxt[i].innerText = `ID: ${idArray[i]}`;
      }
    })
    .catch((error) => {
      console.log("Problema: ", error);
    });
};

const loadSecondary = function () {
  fetch(secondaryURL, {
    headers: {
      Authorization: "3VbZitPxdhDy8FkJyrffF4w1K819XTGYd1SvcM5so2qtkSKDVKRVkyZg",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    })
    .then((data) => {
      console.log(data);
      const img = document.getElementsByClassName("bd-placeholder-img");
      const smallTxt = document.getElementsByTagName("small");
      console.log(img);
      console.log(smallTxt);
      const imgArray = [];
      const idArray = [];

      //   const imgTag = document.getElementsByTagName("img");
      //   console.log(imgTag);
      data.photos.forEach((photo) => {
        //dentro l'oggetto data > nell array photos, per ogni (elemento quindi in questo caso foto):
        // metto l'URL src della foto di dimensione media.
        const imgSRC = photo.src.medium;
        imgArray.push(imgSRC);
        const id = photo.id;
        idArray.push(id);
      });
      for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("src", imgArray[i]);
        smallTxt[i].innerText = `ID: ${idArray[i]}`;
      }
    })
    .catch((error) => {
      console.log("Problema: ", error);
    });
};

const hide = function (e) {
  if (e.target.closest(".col-md-4")) {
    e.target.closest(".col-md-4").remove();
  }
};
