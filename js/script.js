let gallery = [
    {
      carImage: 'white-offroader-jeep.jpg',
      carNameModel: 'Benz E-342',
      carLogo: '',
      carPrice: '#7,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Enugu'
        

    },
    {
      carImage: 'blue-sport-sedan.jpg',
      carNameModel: 'TOYOTA SEDAN',
      carLogo: '',
      carPrice: '#4,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Abuja'
        

    },
    {
      carImage: 'blue-jeep.jpg',
      carNameModel: 'Benz E-342',
      carLogo: '',
      carPrice: '#18,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Calabar'
        

    },
    {
      carImage: 'bmw_sport.jpg',
      carNameModel: 'BMW',
      carLogo: '',
      carPrice: '#11,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Lagos'
        

    },
    {
      carImage: 'bmw_amg.jpg',
      carNameModel: 'BENZ AMG',
      carLogo: '',
      carPrice: '#12,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Enugu'
        

    },
    {
      carImage: 'cadillac.jpg',
      carNameModel: 'CADILLAC',
      carLogo: '',
      carPrice: '#31,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Lagos'
        

    },
    {
      carImage: 'car-audi.jpg',
      carNameModel: 'AUDI SPORT',
      carLogo: '',
      carPrice: '#7,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Port Harcourt'
        

    },
    {
      carImage: 'car-sport4.jpg',
      carNameModel: 'Toyota Hilux',
      carLogo: '',
      carPrice: '#13,000,000',
      carUse: 'Nigerian Used',
      carLocation: 'Kano'
        

    },
    {
      carImage: 'car-vintage.jpg',
      carNameModel: 'VINTAGE',
      carLogo: '',
      carPrice: '#20,000,000',
      carUse: 'NLondon Used',
      carLocation: 'Lagos'
        

    },
    
    
];

let galleryContent = document.querySelector('#galleryRow');
let html = '';

gallery.forEach(e => {
    html += `
    <div class="car-slide-1 bg-warning bg-opacity-75 col-md-3 col-lg-3 col-11  rounded-top ms-3 py-3 px-1 mt-4 ">
            <div class="image-container px-2">
              <img src="./images/${e.carImage}" alt="" class="img-fluid">
            </div>
            <div class="gallery-info mx-2   p-2 py-2 bg-primary bg-opacity-25 rounded">
              <h5>${e.carNameModel}</h5>
              <h5 class="fs-6">${e.carPrice}</h5>
              <p class="fs-6">Nigeria Used</p>
              <div class="location d-flex">
                <div class="image-container">
                  <img src="./images/location-icon.svg" alt="location_icon">
                </div>
                <h6 class="py-1 mx-2">${e.carLocation}</h6>

              </div>

            </div>
            

    </div>
    `
    galleryContent.innerHTML = html;
    console.log(galleryContent.innerHTML);
    
});



