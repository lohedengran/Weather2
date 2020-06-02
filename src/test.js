const weatherForecast = new Vue({
  el: "#weather-forecast",
  data: function () {
    return {
      apiKey: "f4615ce80bdeb70e94f15cf71948a142",
      urlBase: "https://api.openweathermap.org/data/2.5/",
      query: "",
      forecast: {},
    };
  },
  methods: {
    getForecast() {
      fetch(
        `${this.urlBase}forecast?q=${this.query}&units=metric&APPID=${this.apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then(this.setResults);

      console.log(this.query);
    },
    setResults(results) {
      this.forecast = results;
      console.log(results);
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
    chart: null,
    city: "",
    dates: [],
    temps: [],
    loading: false,
    errored: false,
  },
  methods: {
    getData: function () {
      this.loading = true;

      if (this.chart != null) {
        this.chart.destroy();
      }

      axios
        .get("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            q: this.city,
            units: "metric",
            appid: "f4615ce80bdeb70e94f15cf71948a142",
          },
        })
        .then((response) => {
          this.dates = response.data.list.map((list) => {
            return list.dt_txt;
          });

          this.temps = response.data.list.map((list) => {
            return list.main.temp;
          });

          const ctx = document.getElementById("myChart");
          this.chart = new Chart(ctx, {
            type: "line",
            data: {
              labels: this.dates,
              datasets: [
                {
                  label: "Avgerage temperature",
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgb(54, 162, 235)",
                  fill: false,
                  data: this.temps,
                },
              ],
            },
            options: {
              title: {
                display: true,
                text: "5 day forecast",
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    const label =
                      data.datasets[tooltipItem.datasetIndex].label || "";

                    if (label) {
                      label += ": ";
                    }

                    label += Math.floor(tooltipItem.yLabel);
                    return label + "°C";
                  },
                },
              },
              scales: {
                xAxes: [
                  {
                    type: "time",
                    time: {
                      unit: "hour",
                      displayFormats: {
                        hour: "DD/MM @ hA",
                      },
                      tooltipFormat: "MMM. DD @ hA",
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Date/Time",
                    },
                  },
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Temperature (°C)",
                    },
                    ticks: {
                      callback: function (value, index, values) {
                        return value + "°C";
                      },
                    },
                  },
                ],
              },
            },
          });
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
});
