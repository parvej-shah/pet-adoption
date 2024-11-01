const categoryDisplay = (data)=>{
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = "";
    data.forEach(element => {
        categoryContainer.innerHTML+=`<button id='btn-${element.id}' onclick="categoryBtn('${element.category}','${element.id}')"class="category-btn p-6  flex gap-4 justify-center items-center border text-2xl font-bold rounded-full text-p-title border-btn-bg/15 "><img src=${element.category_icon} alt="" class="h-14 w-14"> ${element.category}</button>`
    });
    
}
const allPetsDisplay = (data)=>{
    /* const allPetsSpinner = document.getElementById('allpets-spinner')
    allPetsSpinner.innerHTML = ''; */
    const allModals = document.getElementById('all-modals')
    allModals.innerHTML = '';
    const petContainer = document.getElementById('pet-container');
    petContainer.innerHTML = '';
    /* document.getElementById("liked-container").classList.add(
      'border', 'border-p-title/10'
    ) */
    if(data.length==0){
        petContainer.classList.remove('grid');
        petContainer.innerHTML=`<div class="text-center bg-p-title/3 w-full flex flex-col gap-3 items-center">
            <img src="./images/error.webp" alt="" class="h-40 w-40">
            <h2 class="text-3xl font-bold text-p-title">
              No Information Available
            </h2>
            <p class="text-p-title/70 max-w-2xl">To find the right information search correctly</p>
          </div>`
    }
    else{
        data.forEach(element => {
          petContainer.classList.add('grid');
          /* adding pets */
          petContainer.innerHTML+=`<div class="p-5 border border-p-title/10 rounded-xl h-fit">
              <img src=${element.image} alt="" class="w-full h-40 rounded-lg  mb-6">
              <div class="space-y-2">
                <h4 class="font-bold text-xl text-p-title">${(element.pet_name==null||element.pet_name==undefined || element.pet_name.length==0
                  )?"Not Found":element.pet_name}</h4>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/grid.png" alt="">
                  <p class="text-p-title/70">Bread: ${(element.breed==null||element.breed==undefined || element.breed.length==0
                  )?"Not Found":element.breed}</p>
                </div>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/calender.png" alt="">
                  <p class="text-p-title/70">Birth: ${(element.date_of_birth==null||element.date_of_birth==undefined || element.date_of_birth.length==0
                  )?"Not Found":element.date_of_birth}</p>
                </div>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/gender.png" alt="">
                  <p class="text-p-title/70">Gender:${(element.gender==null||element.gender==undefined || element.gender.length==0
                  )?"Not Found":element.gender}</p>
                </div>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/doller.png" alt="">
                  <p class="text-p-title/70">Price: ${(element.price==null||element.price==undefined || element.price.length==0
                  )?"Not Found":element.price}${(element.price==null||element.price==undefined || element.price.length==0
                  )?"":'$'}</p>
                </div>
                <div class="divider"></div>
                <!-- buttons -->
                <div class="flex justify-between items-center">
                  <!--like button -->
                  <button onclick="likeBtn('${element.image}')" class="py-3 px-5 border border-btn-bg/15 rounded-lg"><img src="./images/like.png" alt=""></button>
                  <!-- button -->
                  <button onclick="my_modal.showModal();adoptModalShow('${element.petId}')" id='adopt-btn-${element.petId}' class="py-2 px-3 border border-btn-bg/15 rounded-lg text-btn-bg font-bold text-lg">Adopt</button>
                  <!-- button -->
                  <button onclick='my_modal_${element.petId}.showModal()' class="py-2 px-5 border border-btn-bg/15 rounded-lg text-btn-bg font-bold text-lg">Details</button>
                </div>
              </div>
            </div>`
          /* adding modals */
        petContainer.innerHTML += `<dialog id='my_modal_${element.petId}' class="modal">
          <div class="bg-white p-5 z-10 md:w-[700px] rounded-2xl mx-2 md:mx-0">
            <!-- main part -->
            <div class="rounded-xl w-full">
              <img src=${element.image} alt="" class="w-full  h-44 md:h-80 rounded-lg  mb-6">
              <div class="space-y-2">
                <h4 class="font-bold text-xl text-p-title">${(element.pet_name==null||element.pet_name==undefined || element.pet_name.length==0
                  )?"Not Found":element.pet_name}</h4>
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/grid.png" alt="">
                  <p class="text-p-title/70">Bread: ${(element.breed==null||element.breed==undefined || element.breed.length==0
                  )?"Not Found":element.breed}</p>
                </div>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/calender.png" alt="">
                  <p class="text-p-title/70">Birth: ${(element.date_of_birth==null||element.date_of_birth==undefined || element.date_of_birth.length==0
                  )?"Not Found":element.date_of_birth}</p>
                </div>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/gender.png" alt="">
                  <p class="text-p-title/70">Gender: ${(element.gender==null||element.gender==undefined || element.gender.length==0
                  )?"Not Found":element.gender}</p>
                </div>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/doller.png" alt="">
                  <p class="text-p-title/70">Price: ${(element.price==null||element.price==undefined || element.price.length==0
                  )?"Not Found":element.price}${(element.price==null||element.price==undefined || element.price.length==0
                  )?"":'$'}</p>
                </div>
                <!-- sub titles -->
                <div class="flex  items-center gap-2">
                  <img src="./images/gender.png" alt="">
                  <p class="text-p-title/70">Vaccinated status: ${(element.vaccinated_status==null||element.vaccinated_status==undefined || element.vaccinated_status.length==0
                  )?"Not Found":element.vaccinated_status}</p>
                </div>
                </div>
                <div class="divider"></div>
                <!-- buttons -->
                <div class="space-y-2">
                  <h2 class="font-semibold text-p-title">Details Information</h2>
                  <p class="text-p-title/70">${(element.pet_details==null||element.pet_details==undefined || element.pet_details.length==0
                  )?"Not Found":element.pet_details}</p>
                </div>
              </div>
            </div>
            <div class="modal-action">
              <form method="dialog" class="w-full">
                <button class="btn bg-btn-bg/10 w-full text-btn-bg text-xl font-bold hover:text-p-title border-btn-bg/20">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>`
        
            });
    }
    
}
loadAllPets();
loadCategories();
/* displayLoading(); */
/* loadAllPets() */
