const currentWeather = new Vue({
  el: "#current-weather",
  data: function () {
    return {
      apiKey: "bc186f9539dbe3d308bc39f16059d23c",
      urlBase: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    getWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.urlBase}weather?q=${this.query}&units=metric&APPID=${this.apiKey}`
        )
          .then((response) => {
            return response.json();
          })

          .then(this.setResults);
      }
      // console.log(this.query);
    },

    setResults(results) {
      this.weather = results;
    },

    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
});

// const weatherForecast = new Vue({
//   el: "#weather-forecast",
//   data: function () {
//     return {
//       apiKey: "f4615ce80bdeb70e94f15cf71948a142",
//       urlBase: "https://api.openweathermap.org/data/2.5/",
//       query: "",
//       forecast: {},
//       temps: [],
//     };
//   },
//   methods: {
//     getForecast() {
//       fetch(
//         `${this.urlBase}forecast?q=${this.query}&units=metric&APPID=${this.apiKey}`
//       ).then((response) => {
//         this.dates = response.data.list.map((list) => {
//           return list.dt_text;
//         });

//         this.temps = response.data.list.map((list) => {
//           return list.main.temp;
//         });
//       });

//       console.log(list.main.temp);
//     },
//   },
// });

// const weatherForecast = new Vue({
//   el: "#weather-forecast",
//   data: function () {
//     return {
//       apiKey: "f4615ce80bdeb70e94f15cf71948a142",
//       urlBase: "https://api.openweathermap.org/data/2.5/",
//       query: "",
//       forecast: {},
//     };
//   },
//   methods: {
//     getForecast() {
//       fetch(
//         `${this.urlBase}forecast?q=${this.query}&units=metric&APPID=${this.apiKey}`
//       )
//         .then((response) => {
//           return response.json();
//         })
//         .then(this.setResults);

//       console.log(this.query);
//     },
//     setResults(results) {
//       this.forecast = results;
//       console.log(results);
//     },
//     dateBuilder() {
//       let d = new Date();
//       let months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//       ];
//       let days = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//         "Sunday",
//       ];

//       let day = days[d.getDay()];
//       let date = d.getDate();
//       let month = months[d.getMonth()];
//       let year = d.getFullYear();

//       return `${day} ${date} ${month} ${year}`;
//     },
//   },
// });

//5 day forecast - functioning chart - 19:45 june 2nd
const app = new Vue({
  el: "#app",
  data: {
    list: [],
    // dates: [],
    // temps: [],
    apiKey: "f4615ce80bdeb70e94f15cf71948a142",
    urlBase: "https://api.openweathermap.org/data/2.5/",
    query: "",
  },
  methods: {
    getForecast(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.urlBase}forecast?q=${this.query}&units=metric&APPID=${this.apiKey}`
        )
          .then((response) => response.json())
          .then((response) => {
            this.list = response.list;
            console.log(response.list);
          });
      }
    },
  },
});

// .then((response) => response.json())
// .then((json) => console.log(json));

// mounted: function () {
//   fetch(
//     `${this.urlBase}forecast?q=${this.query}&units=metric&APPID=${this.apiKey}`
//   )
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// },
// setResults(results) {
//   this.forecast = results;
//   console.log(results);
// },

// mounted: function () {
//   fetch(
//     `${this.urlBase}forecast?q=${this.query}&units=metric&APPID=${this.apiKey}`
//   )
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// },

//           this.dates = response.data.list.map((list) => {
//             return list.dt_txt;
//           });
//           this.temps = response.data.list.map((list) => {
//             return list.main.temp;
//           });
//           this.weather = response.data.list.map((list) => {
//             return list.weather.main;
//           });
//           console.log(response.data.list);
//           // console.log(response.data.list[0].weather.main);
//           // console.log(response.data.list.dt_text);
//           console.log(response.data.list[0].main.temp); //current temp
//           console.log(response.data.list[0].weather[0].main); //current weather
//           console.log(response.data.list[1].main.temp); // temp in three hours
//           console.log(response.data.list[1].weather[0].main); // weather in three hours
//           console.log(response.data.list[2].main.temp); // temp in six hours
//           console.log(response.data.list[2].weather[0].main); // weather in six hours
//         })
//         .catch((error) => {
//           console.log(error);
//           this.errored = true;
//         })
//         .finally(() => (this.loading = false));
//     },
//   },
// },
// });

// new Vue({
//   el: "#forecast",
//   data: {
//     apiKey: "f4615ce80bdeb70e94f15cf71948a142",
//     urlBase: "https://api.openweathermap.org/data/2.5/",
//     query: "",
//     forecast: [],
//   },

//   methods: {
//     getForecast() {
//       fetch(
//         `${this.urlBase}forecast?q=${this.query}&units=metric&APPID=${this.apiKey}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           this.forecast = data;
//         });
//     },
//   },
// });

// const forecast = new Vue({
//   el: "#forecast",
//   data: {
//     query: "",
//     dates: [],
//     temps: [],

//     loading: false,
//     errored: false,
//   },
//   methods: {
//     getData: function () {
//       this.loading = true;

//       if (this.chart != null) {
//         this.chart.destroy();
//       }

//       axios
//         .get("https://api.openweathermap.org/data/2.5/forecast", {
//           params: {
//             q: this.city,
//             units: "metric",
//             appid: "f4615ce80bdeb70e94f15cf71948a142",
//           },
//         })
//         .then((response) => {
//           this.dates = response.data.list.map((list) => {
//             return list.dt_txt;
//           });

//           this.temps = response.data.list.map((list) => {
//             return list.main.temp;
//           });
//           this.weather = response.data.list.map((list) => {
//             return list.weather.main;
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//           this.errored = true;
//         });
//     },
//   },
// });
