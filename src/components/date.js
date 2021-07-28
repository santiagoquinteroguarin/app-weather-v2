function date() {
  const date = new Date(); // retorna la fecha actual
  const dayMonth = date.getDate(); //retorna el dia del mes  1 a 31
  const weekday = date.getDay(); //retorna el dia de la semana  0-domingo 6-sabado
  const month = date.getMonth() + 1; // retorna el mes acuatual donde 0 es enero y 11 diciembre

  let currentWeekDay = "";
  let currentMonth = "";
  if (weekday === 0) {
    currentWeekDay = "Domingo";
  }
  if (weekday === 1) {
    currentWeekDay = "Lunes";
  }
  if (weekday === 2) {
    currentWeekDay = "Martes";
  }
  if (weekday === 3) {
    currentWeekDay = "Miercoles";
  }
  if (weekday === 4) {
    currentWeekDay = "Jueves";
  }
  if (weekday === 5) {
    currentWeekDay = "Viernes";
  }
  if (weekday === 6) {
    currentWeekDay = "Sabado";
  }

  if (month === 1) {
    currentMonth = "Enero";
  }
  if (month === 2) {
    currentMonth = "Febrero";
  }
  if (month === 3) {
    currentMonth = "Marzo";
  }
  if (month === 4) {
    currentMonth = "Abril";
  }
  if (month === 5) {
    currentMonth = "Mayo";
  }
  if (month === 6) {
    currentMonth = "Junio";
  }
  if (month === 7) {
    currentMonth = "Julio";
  }
  if (month === 8) {
    currentMonth = "Agosto";
  }
  if (month === 9) {
    currentMonth = "Septiembre";
  }
  if (month === 10) {
    currentMonth = "Octubre";
  }
  if (month === 11) {
    currentMonth = "Noviembre";
  }
  if (month === 12) {
    currentMonth = "Diciembre";
  }

  const currentDate = `${currentWeekDay} ${dayMonth} de ${currentMonth}`;
  return currentDate;
}

export default date;
