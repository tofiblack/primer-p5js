var anchoPincel = 15;

function setup() {
  createCanvas(600, 600);
  frameRate(50);
  background(178, 78, 89);
}
//click y arrastrar por la pantalla
function draw() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(255, 0, 0, 230);
      rect(80, 201, 30, 60);
    } else if (mouseButton == RIGHT) {
      stroke(51, 215, 255);
    }

    strokeWeight(anchoPincel);
    rect(mouseX, mouseY, pmouseX, pmouseY);
  }
  document.oncontextmenu = function () {
    return false;
  };

  fill(254);
  rect(109, 78, 98); //CUADRADO 1

  fill(254);
  rect(401, 78, 96); //CUADRADO 2

  fill(0);
  ellipse(157, 115, 40, 123); //PUPILA DEL OJO 1

  fill(0);
  ellipse(450, 122, 40, 106); // PUPILA DEL OJO 2

  fill(56, 0, 0);
  stroke(10);
  rect(80, 201, 30, 60); //LAGRIMA 1

  fill(56, 0, 0);
  stroke(10);
  rect(500, 201, 30, 60); //LAGRIMA 2

  fill(7);
  line(500, 670, 160, 60); //LINEA CRUZADA 1

  fill(7);
  line(230, 670, 160, 60); //LINEA VERTICAL 1

  fill(178, 34, 34);
  ellipse(-20, 3, 450, 350); //FLEQUILLO LADO DERECHO

  fill(178, 34, 34);
  ellipse(635, 10, 450, 350); //FLEQUILLO LADO IZQUIERDO

  fill(178, 34, 34);
  ellipse(0, 211, 60, 60); //CIRCULO DERECHO

  fill(178, 34, 34);
  ellipse(0, 270, 60, 60); //CIRCULO DERECHO

  fill(178, 34, 34);
  ellipse(0, 329, 60, 60); //CIRCULO DERECHO

  fill(178, 34, 34);
  ellipse(0, 388, 60, 60); //CIRCULO DERECHO

  fill(178, 34, 34);
  ellipse(0, 447, 60, 60); //CIRCULO DERECHO

  fill(178, 34, 34);
  ellipse(0, 507, 60, 60); //CIRCULO DERECHO

  fill(178, 34, 34);
  ellipse(0, 567, 60, 60); //CIRCULO DERECHO

  fill(178, 34, 34);
  ellipse(600, 215, 60, 60); //CIRCULO IZQUIERDO

  fill(178, 34, 34);
  ellipse(600, 274, 60, 60); //CIRCULO IZQUIERDO

  fill(178, 34, 34);
  ellipse(600, 334, 60, 60); //CIRCULO IZQUIERDO

  fill(178, 34, 34);
  ellipse(600, 394, 60, 60); //CIRCULO IZQUIERDO

  fill(178, 34, 34);
  ellipse(600, 454, 60, 60); //CIRCULO IZQUIERDO

  fill(178, 34, 34);
  ellipse(600, 513, 60, 60); //CIRCULO IZQUIERDO

  fill(178, 34, 34);
  ellipse(600, 571, 60, 60); //CIRCULO IZQUIERDO

  fill(7);
  line(432, 111, 200, 550); //LINEA CRUZADA 2

  fill(7);
  line(179, 598, 200, 550); //LINEA CRUZADA CHIQUITA SEGUIDO DE LA 2

  fill(7);
  line(447, 127, 414, 603); //LINEA VERTICAL 2

  fill(56, 0, 0);
  ellipse(100, 488, 80, 30); // LAGUNA CHIQUITA DERECHA

  fill(56, 0, 0);
  ellipse(510, 483, 80, 30); // LAGUNA CHIQUITA IZQUIERDA

  console.log("x:" + mouseX + "y:" + mouseY);
}