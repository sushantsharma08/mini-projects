

// const d = {
//    1: {
//       name: "Sush",
//       marks: {
//          hindi: {
//             mark: 12,
//             outOf: 100
//          },
//          english: {
//             mark: 23,
//             outOf: 50
//          }
//       }
//    },
//    2: {
//       name: "Sp",
//       marks: {
//          hindi: {
//             mark: 12,
//             outOf: 30
//          },
//          english: {
//             mark: 23,
//             outOf: 50
//          },
//          maths: {
//             mark: 40,
//             outOf: 100
//          }
//       }
//    },
//    3: {
//       name: "ut",
//       marks: {
//          hindi: {
//             mark: 12,
//             outOf: 20
//          },
//          english: {
//             mark: 23,
//             outOf: 50
//          },
//          maths: {
//             mark: 40,
//             outOf: 100
//          }
//       }
//    }
// }
// // // O(n^m+k)


// const Data = (obj) => {
//    student = Object.keys(obj)
//    for (let i of student) {
//       let Subj = Object.keys(obj[i].marks);
//       let valueOfMarks
//       let sum = 0

//       for (let sub of Subj) {
//          let arrofMarks = Object.values(obj[i].marks[sub]);
//          let base = 100 / arrofMarks[1];
//          let m = arrofMarks[0] * base;
//          obj[i].marks[sub] = m;
//          valueOfMarks = Object.values(obj[i].marks);
//       }

//       for (let i = 0; i < valueOfMarks.length; i++) {
//          sum += valueOfMarks[i]
//       }

//       console.log(`${obj[i].name} has scored an avg of ${sum / valueOfMarks.length}`);
//    }
//    console.log(obj);

// }

// Data(d);









// function getWeek() {
//    let d = new Date();
//    let day = d.getDay();
//    let weekFirst = new Date(d);

//    weekFirst.setDate(d.getDate() - day);
//    console.log(weekFirst);

//    for (let i = 0; i <= 6; i++) {
//       const dateToday = new Date(weekFirst);
//       dateToday.setDate(weekFirst.getDate() + i);
//       week.push(dateToday.getDate());
//    }

//    return week;
// }
let arr = [1, 3, 5];
let dates = [];
const week = [];
function getWeek() {
   let d = new Date(temp)
   let date = d.getDate();
   let todayDay = d.getDay()

   for (let day of arr) {

      let diff = 0;

      if (day < todayDay) {
         diff = todayDay - day;
         dateToPush = date - diff
         dates.push(dateToPush)
      }
      else if (day > todayDay) {
         diff = day - todayDay;
         dateToPush = date + diff
         dates.push(dateToPush)
      }
      else if (day == todayDay) {
         dates.push(todayDay)
      }

      console.log(dates);
   }
}


const getDates = (days) => {
   const weekDates = getWeek();

   // for (const day of days) {
   //    dates.push(weekDates[day])
   // }

   // console.log(dates);
   // return dates
}

getDates(arr);