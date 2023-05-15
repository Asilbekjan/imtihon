// 1-savol


// let sonlar = [55,39,21,2,-10]
// document.write(sonlar + " teskarisi ")
// function teskarisonlar(){
//     for (let i = sonlar.length - 1 ; i >=0 ; i--){
//         document.write( sonlar[i] + " ,");
//     }
// }
// teskarisonlar()

// 2-savol


// 
// let massiv = {
//     id: 2,
//     name: "asilbek",
//     tavsifi: "ishlab chiqarish",
//     yuklangan_sana: "01.01.2001",
//     rasm_manzili: "https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg",
//     link: "https://www.youtube.com/"
// }

// let copyInfo = []

// function copy(){
//     let copied = {
//         id: massiv.id,
//         name: massiv.name,
//         tavsifi: massiv.tavsifi,
//         yuklangan_sana: massiv.yuklangan_sana,
//         rasm_manzili: massiv.rasm_manzili,
//         link: massiv.link
//     }
//     copyInfo.push(copied)
// }
// copy()
// console.log(copyInfo);





// // 3-savol

// let son = parseFloat(prompt("son kiriting"))

// if(son % 2==0){
//     let sum=son * 5
//     document.write(sum);
// } else{
//     let raqam = son - 15
//     document.write(raqam)
// }


// 4-savol

// let maqola =[{
//     id:12,
//     sarlavha:"salom dunyo",
//     tavsifi:"nima gaplar",
//     rasm_manzili:"https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg",
//     link:"https://www.youtube.com/",
//     Kategoriyalari:"dunyo"
// }]

// 5-savol


// let addBtn = document.createElement("button")
// addBtn.innerText = "Qo'shish"


// function render(data){


//     let line = document.querySelector(".lline")


//         data.map((items,id)=>{
        
//         let tr = document.createElement("tr")
//         let nomer = document.createElement("td") 
//         nomer.innerText = items.nomeri
//         let b_ish = document.createElement("td") 
//         b_ish.innerText = items.b_ish
//         let xodisa = document.createElement("td") 
//         xodisa.innerText = items.xodisa

//         let editBtn = document.createElement("button")
//         editBtn.innerText = "Tahrirlash"
//         let deleteBTn = document.createElement("button")
//         deleteBTn.innerText = "O'chirish" 

// tr.appendChild(nomer)
// tr.appendChild(b_ish)
// tr.appendChild(xodisa)
// tr.appendChild(addBtn)
// tr.appendChild(editBtn)
// tr.appendChild(deleteBTn)

// line.appendChild(tr)
//         })
// }
 

// let result = []


// addBtn.addEventListener("click", function (event) {
//     event.preventDefault()

//     let nomeri = document.querySelector(".nomeri").value
//     let b_ish = document.querySelector(".b_ish").value
//     let xodisa = document.querySelector(".xodisa").value

//     let items = {
//         nomeri: nomeri,
//         b_ish: b_ish,
//         xodisa: xodisa,
        
//     }
//     result.push(items)
//     render(result);
// })



// 6-savol


// $.ajax("https://api.npoint.io/511e72cd83cab84374d6",{
//     success:function(response) {
//         response.map(item=>{
//             let col =`
//           <div class="col-3">
//                 <div class="card">
//                     <img src="${item.photo}" alt="${item.title}">
//                     <p>${item.categories}</p>
//                     <p>id:${item.id}</p>
//                     <a href="${item.url}">${item.title}</a>
//                 </div>
//               </div>
//             `
//             $('.another').append(col)
//         })
//     }
// })

