// const classifier = ml5.imageClassifier(model, ?video, ?options, ?callback);

const { ml5 } = window;
const classifier = ml5.imageClassifier('MobileNet', console.log);


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