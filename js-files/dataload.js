const petContainer = document.getElementById('pet-container');
const loadCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
      .then(response => response.json())
      .then(data => setTimeout(() => {
        categoryDisplay(data.categories);
      }, 2000))
}
const loadAllPets = ()=>{
  petContainer.innerHTML = '';
  displayLoading()
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
      .then(response => response.json())
      .then(data => allPetsDisplay(data.pets))
}
const loadPetsByCategory = (category)=>{
  petContainer.innerHTML = '';
  displayLoading()
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
      .then(response => response.json())
      .then(data => setTimeout(()=>{allPetsDisplay(data.data)
      },2000))
}
document.getElementById('short-btn').addEventListener('click',()=>{
  petContainer.innerHTML = '';
  displayLoading()
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
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
      .then(response => response.json())
      .then(data => setTimeout(()=>{allPetsDisplay((data.pets).sort((a,b)=>b.price - a.price))
      },2000))
})
