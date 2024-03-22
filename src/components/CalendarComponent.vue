<template>
  <div class="calendar-wrapper">
    <iframe class="calendar-iframe" frameborder="0" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23121212&ctz=Europe%2FBerlin&showTitle=1&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=Y2M2YmQwYjY4NDEyODI0MGNhNjUyZjUyODU3NGZjYjNkOWE1YmE0Njg2ZTA1MWE1YjhkNTAzNzc2NTY1NDYzYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000"></iframe>
  </div></template>
<script setup>

</script>

<style>
.calendar-wrapper {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
}

.calendar-iframe {
  width: 100%;
  height: 600px;
  border: none;
}
</style>
