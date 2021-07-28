function day(number) {
  const date = new Date();
  const day = date.getDay() + number;
  let currentday = "";

  if (day > 6) {
    const y = day - 6;
    if (y === 1) {
      return (currentday = "Domingo");
    }
    if (y === 2) {
      return (currentday = "Lunes");
    }
    if (y === 3) {
      return (currentday = "Martes");
    }
    if (y === 4) {
      return (currentday = "Miércoles");
    }
  }
  if (day === 0) {
    return (currentday = "Domingo");
  }
  if (day === 1) {
    return (currentday = "Lunes");
  }
  if (day === 2) {
    return (currentday = "Martes");
  }
  if (day === 3) {
    return (currentday = "Miércoles");
  }
  if (day === 4) {
    return (currentday = "Jueves");
  }
  if (day === 5) {
    return (currentday = "Viernes");
  }
  if (day === 6) {
    return (currentday = "Sábado");
  }

  return currentday;
}

export default day;
