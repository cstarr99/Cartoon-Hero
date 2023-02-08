const taxi = {
  make: "Webville motors",
  model: "taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

let worthALook = prequal(taxi);

if (worthALook) {
  console.log("check this " + taxi.make + " " + taxi.model);
} else {
  console.log("dont get this " + taxi.make + " " + taxi.model);
}
