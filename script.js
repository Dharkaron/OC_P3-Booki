
document.addEventListener("keydown", (e)=>{
  if (e.ctrlKey) { 
    console.log("plop")
    e.preventDefault()   
  }
})