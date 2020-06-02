const currentWeather = new Vue({
  el: "#current-weather",
  data: function () {
    return {
      apiKey: "bc186f9539dbe3d308bc39f16059d23c",
      url: "https://api.openweathermap.org/data/2.5/",
      location: "",
      weather: {},
    };
  },
  methods: {
    getWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url}weather?q=${this.location}&units=metric&APPID=${this.apiKey}`
        )
          .then((response) => {
            return response.json();
          })

          .then(this.setResults);
      }
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
