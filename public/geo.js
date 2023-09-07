const getGeoLocation = () => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
   } else {
      console.log("Failed to load");
   }
};

const getPosition = (loc) => {
   console.log(loc);
};

getGeoLocation();
