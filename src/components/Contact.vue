<template>
  <div class="mt-16 bg-contact px-16 py-8">
    <h2 class="text-center">Contact Us</h2>
    <p class="mt-2 text-center mb-16">
      Want to reach us? Contact us through the following channels
    </p>
    <div
      class="d-flex align-center ga-5 mb-10"
      v-for="contact in contacts"
      :key="contact"
    >
      <img class="contact-img" :src="contact.img" alt="" />
      <p>{{ contact.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      contacts: [
        { id: 1, img: "/assets/mail.png", text: "investment@ogunstate.gov.ng" },
        {
          id: 2,
          img: "/assets/phone.png",
          text: "+234 (0) 909 166 1337 +234 (0) 816 921 3747",
        },
        {
          id: 3,
          img: "/assets/location.png",
          text: "4th Floor, OPIC House, Lagos-Ibadan Expressway, Isheri, Ogun State.",
        },
        {
          id: 4,
          img: "/assets/location.png",
          text: "Block D,Room 115, State Secretariat Oke-Mosan, Abeokuta, Ogun State.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.contact-img {
  width: 20px !important;
  object-fit: cover;
}
</style>
