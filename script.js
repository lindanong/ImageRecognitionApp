// const classifier = ml5.imageClassifier(model, ?video, ?options, ?callback);

const { ml5 } = window;
const classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/sVCV67PMt/model.json', console.log);
// const classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/y_HLEWA9X/model.json', console.log);


const image = document.querySelector(".image");
const result = document.querySelector(".result h2");

async function classifyImage() {
  const results = await classifier.classify(image);
  result.innerText = results[0].label;
}

function handleUpload(files) {
    image.src = URL.createObjectURL(files[0]);
    setTimeout(classifyImage, 50);
  }