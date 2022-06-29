const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
function getUniqueProductCount(listOfProducts){
	let uniqProd={}
  listOfProducts.forEach((prod)=>{
  if(prod.productName in uniqProd){
  uniqProd[prod.productName]+=prod.quantity
  }else{
  uniqProd[prod.productName]=prod.quantity
  }
  })
  return [uniqProd];
}
let uniqProdCount=getUniqueProductCount(listOfProducts)
console.log(uniqProdCount)

    function getUniquePrducts(list){
      let c = Object.values(list.reduce((a, b) => {
    
        a[b.productName] = a[b.productName] || {productName: b.productName, quantity:0}
        if(typeof(b['quantity']) == "string"){
          a[b.productName].quantity+=b['quantity']
        }
        else{
          a[b.productName].quantity =a[b.productName].quantity+b.quantity;
          a[b.productName].description=b['description'];
        }
    
        return a
    
      }, {}))
      return c
    }
   let uniquePrducts = getUniquePrducts(listOfProducts)
   console.log(uniquePrducts)