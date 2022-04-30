// объявление перемных
var panorama1,
  panorama,
  panorama2,
  infospot2,
  panorama3,
  viewer,
  container,
  infospot,
  panorama4,
  widget; 

//назначение переменых
container = document.querySelector("#container");

panorama1 = new PANOLENS.ImagePanorama("/изображенияПанорам/СomputerСlass\(111\)-min.jpg");
panorama1.addEventListener("progress");

panorama2 = new PANOLENS.ImagePanorama("изображенияПанорам/Library-min.jpg");
panorama2.addEventListener("progress");

panorama3 = new PANOLENS.ImagePanorama("изображенияПанорам/HonorBoardTeachers-min.jpg");
panorama3.addEventListener("progress");

panorama4 = new PANOLENS.ImagePanorama("изображенияПанорам/HonorBoardTeachers-min.jpg");
panorama4.addEventListener("progress");

//создание точек информации
infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
infospot.addHoverText("lalala");

infospot.addEventListener("click", function () {
  this.focus();
});

panorama1.add(infospot);//добавление объекта в панораму

infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info, true); //new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set(-5000.0, -625.25, -197.56);
infospot2.addHoverElement(document.querySelector("#desc-container"), 200);
infospot2.addEventListener("click", function () {});

panorama1.add(infospot2);

//блок лтвечающий за компеляцию и отображение
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama1, panorama2, panorama3, panorama4);

//функция для переключения панорам после нажтия изображения на слайдере
function link1() {
  viewer.setPanorama(panorama1);
}

function link2() {
  viewer.setPanorama(panorama2);
}

function link3() {
  viewer.setPanorama(panorama3);
}




//функция для скрытия иззображение (поворот экрана) после прикосновение к экрану(только мобильные условия)
var element = document.getElementById("Vertical");
var elementHeader = document.getElementById("header");

element.addEventListener("touchstart", (event) => {
  //охват зоны прикосновения(блок гиф изображения)
  console.log("Вы приложили палец к элементу");
  element.style.display = "none";
});

elementHeader.addEventListener("touchstart", (event) => {
  //охват зоны прикосновения(блок header)
  console.log("Вы приложили палец к элементу");
  var element = document.getElementById("Vertical");
  element.style.display = "none";
});
