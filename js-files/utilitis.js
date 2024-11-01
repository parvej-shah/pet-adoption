function categoryBtn(category,id){
    const allBtns = document.getElementsByClassName('category-btn');
    for(const btn of allBtns){
        btn.classList.remove(
            'border-btn-bg',
        'bg-btn-bg/10',
        'rounded-full'
        )
        btn.classList.add(
            'border-btn-bg/15',
        'rounded-2xl'
        )
    }
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.remove(
        'border-btn-bg/15',
        'rounded-2xl'
    );
    activeBtn.classList.add(
        'border-btn-bg',
        'bg-btn-bg/10',
        'rounded-full'
    );
    loadPetsByCategory(category);
}
function likeBtn(imgSrc){
    const likedContainer = document.getElementById('liked-container');
    likedContainer.innerHTML+=`<div>
            <img src=${imgSrc} alt="" class="w-full h-28 rounded-lg">
          </div>`
}
const allpetsSpinner = document.getElementById('allpets-spinner');
function displayLoading(){
    allpetsSpinner.classList.remove('hidden');
    document.getElementById("liked-container").classList.remove(
        'border', 'border-p-title/10'
      )
    setTimeout(()=>{
        allpetsSpinner.classList.add('hidden');
        document.getElementById("liked-container").classList.add(
            'border', 'border-p-title/10'
          )
    },2000);
  }

function adoptModalShow(id){
    let counter =3;
    document.getElementById("counter").innerText = counter;
    const inervalId = setInterval(()=>{
    counter--;
    document.getElementById("counter").innerText = counter;
    if(counter==1){
        clearInterval(inervalId);
        document.getElementById('modal-close').click()
        counter=3;
        const adoptButton = document.getElementById(`adopt-btn-${id}`);
        adoptButton.disabled = true;
        adoptButton.innerText = 'Adopted';
        adoptButton.classList.remove('text-btn-bg');
        adoptButton.classList.add('text-p-title/50');
    }
    },1000)
}

