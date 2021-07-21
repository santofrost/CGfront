<script>
  export default {
    methods: {
      exportCsv (list) {
        let csvContent = `data:text/csv;charset=utf-8,${list.map(item => {
          return `${item.gender};${item.name.first};${item.email};${item.nat};${item.dob.date};${item.registered.date}\n`
        })}`

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "export_favourites.csv");
        document.body.appendChild(link);

        link.click();
      }
    }
  }
</script>