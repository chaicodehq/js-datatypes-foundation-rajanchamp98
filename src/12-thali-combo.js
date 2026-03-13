/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // Your code here
  //   createThaliDescription(thali)
  //  *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
  //  *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
  //  *      - name ko UPPERCASE karo, price ko 2 decimal places tak
  //  *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
  //  *      - Agar thali object nahi hai ya required fields missing hain, return ""
  //  *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
  //  *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
  //  *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
  if (typeof thali != "object" || !thali || Object.keys(thali).length != 4)
    return "";
  const name = thali.name.trim().toUpperCase();
  const item = thali.items.join(", ");
  const typeOfFood = thali.isVeg ? "Veg" : "Non-Veg";
  const price = thali.price.toFixed(2);

  return `${name} (${typeOfFood}) - Items: ${item} - Rs.${price}`;
}

export function getThaliStats(thalis) {
  // Your code here
  //   getThaliStats(thalis)
  //  *      - Array of thali objects ka stats nikalo
  //  *      - .filter() se veg/non-veg count
  //  *      - .reduce() se average price
  //  *      - Math.min/Math.max se cheapest/costliest
  //  *      - .map() se saare names
  //  *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
  //  *                  cheapest (number), costliest (number), names (array) }
  //  *      - Agar thalis array nahi hai ya empty hai, return null
  if (!Array.isArray(thalis) || thalis.length == 0) return null;
  const totalThalis = thalis.length;
  const vegCount = thalis.filter((thali) => thali.isVeg == true).length;
  const nonVegCount = thalis.length - vegCount;
  const avgPrice = String(
    (
      thalis.reduce((total, current) => {
        total += +current.price;
        return total;
      }, 0) / totalThalis
    ).toFixed(2),
  );

  const { prices, names } = thalis.reduce(
    (totalValues, current) => {
      totalValues.names.push(current.name);
      totalValues.prices.push(current.price);

      return totalValues;
    },
    { prices: [], names: [] },
  );

  const costliest = Math.max(...prices);
  const cheapest = Math.min(...prices);

  return {
    totalThalis,
    vegCount,
    nonVegCount,
    avgPrice,
    costliest,
    costliest,
    cheapest,
    names,
  };
}

export function searchThaliMenu(thalis, query) {
  // Your code here
  //    searchThaliMenu(thalis, query)
  //  *      - .filter() + .includes() se search karo (case-insensitive)
  //  *      - Thali match karti hai agar name ya koi bhi item query include kare
  //  *      - Agar thalis array nahi hai ya query string nahi hai, return []
  //  *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
  if (!Array.isArray(thalis) || typeof query != "string") return [];
  const queryToLower = query.trim().toLowerCase();
  // console.log(queryToLower)
  // const check= thalis[0].name.toLowerCase().replace("thali","").trim()===queryToLower
  // console.log(check)

  const searchedResult = thalis.filter((thali)=>thali.items.toString().includes(queryToLower) || thali.name.toLowerCase().replace("thali","").trim() == queryToLower);

  // console.log(searchedResult)
  if (searchedResult.length == 0) {
    return [];
  }else if(searchedResult.length==1){
    return searchedResult
  
  }else{


  return{ length:searchedResult.length,
    result:searchedResult
  };
}
}

export function generateThaliReceipt(customerName, thalis) {
  // Your code here
//   4. generateThaliReceipt(customerName, thalis)
//  *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
//  *      - Format:
//  *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
//  *      - Line item: "- {thali name} x Rs.{price}"
//  *      - customerName UPPERCASE mein
//  *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
if(typeof customerName != 'string' || !Array.isArray(thalis) || thalis.length==0 ) return "" 
const line_item=thalis.map(thali=>{
  return `- ${thali.name} x Rs.${thali.price}`
})

const total=thalis.reduce((total,currentObj)=>{
  total+= +currentObj.price
  

  return total
  

},0)
return `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${line_item.join("\n")}\n---\nTotal: Rs.${total}\nItems: ${thalis.length}`
}
