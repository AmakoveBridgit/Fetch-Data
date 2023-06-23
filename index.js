const userContainer=document.getElementById('main')

let getData = ()=>{ 
  // return fetch("https://aws.random.cat/meow")
  return fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(response=>response)
 
    .catch(error => error);

}
// getData()
// .....................




const displayProducts= async() =>{
    const product=await getData()
    console.log(product);

    product.products.map((item)=>{     //for each to do 
        let div=document.createElement('div')
        let image=document.createElement('img')
        let title =document.createElement('p')
        let description=document.createElement('p')

       
        image.src = item.thumbnail
        title.innerHTML=item.title
        description.innerHTML=item.description

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(description);


        div.setAttribute('key',item.id);
        div.setAttribute('class','products');

        userContainer.appendChild(div);

    })
}
displayProducts()





