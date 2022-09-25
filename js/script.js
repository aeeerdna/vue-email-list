console.log("JS OK!!!");

const HOW_MANY_EMAILS = 10;

const app = new Vue({
  el: "#app",
  data: {
    loading: true,
    emails: [],
  },
  created() {
    let countdown = 0;

    for (let i = 0; i < HOW_MANY_EMAILS; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response);
          const { data, status } = response;
          countdown++;
          if (status === 200) {
            this.emails.push(data.response);
          }
          if (countdown === HOW_MANY_EMAILS) {
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log("ERROR!", error);
        });
    }
  },
});
