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

const app = new Vue({
  el: "#app",
  data: {
    list: [],
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
