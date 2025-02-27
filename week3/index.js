//樂呵呵健身房目前有 8 位會員
//const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
//第一階段：新增課程購買記錄（優惠定價）
//撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：

//購買數量 / 單價 (每堂課)

//1-10 堂 / 1500 元
//11-20 堂 / 1300 元
//21 堂以上 / 1100 元

//記錄內容：
//會員名稱 (name)：字串
//購買課程數量 (courses)：數字
//課程單價（自動計算）
//總金額（courses × 單價）

let unitcoursesprice=0;
let totalcoursesprice=0;
let purchaseRecords = [];
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"]
function addPurchaseRecord(name,courses)
{
   if(name==="" || courses <=0 || (typeof)courses != 'number' )
   {
     console.log(" 輸入錯誤，請輸入有效的會員名稱和課程數量。\n");
        return;
   }
  
   if(1<courses<=10)
   {
     unitcoursesprice = 1500;
     
   }else if(10<courses<=20)
   {
      unitcoursesprice = 1300;
   }else if(courses >20){
      unitcoursesprice = 1100;
   }
   totalcoursesprice = unitcoursesprice * courses
   purchaseRecords.push({membername,courses,unitcoursesprice,totalcoursesprice})

   console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalcoursesprice} 元。`);
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12); 
addPurchaseRecord("Charlie", 25); 
addPurchaseRecord("Hannah", 50); 
addPurchaseRecord("名稱", "課程數量"); 
==============================================================================================================
// 第二階段：計算目前的總營業額
// 購買數量 / 單價 (每堂課)
let totalPrice = 0;
//新增函式 calculateTotalPrice，計算目前的總營業額為多少。印出 console.log 文字為 目前總營業額為 ${totalPrice} 元
function calculateTotalPrice()
{
    purchaseRecords.foreach((item) =>{
      totalPrice += item.totalcoursesprice;
    })
    Console.log(`目前總營業額為 ${totalPrice} 元`);
}
calculateTotalPrice();
================================================================================================================
// 第三階段：篩選出還沒有購課的會員
// 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出

// 印出 console.log 文字為 未購買課程的會員有：.......
// 第三階段：篩選出還沒有購課的會員

let purchaseRecordsName = [];

function filterNoPurchaseMember()
{
    purchaseRecords.foreach((item) =>{
        purchaseRecordsName.push (item.name);
    })

    let nopurchaseRecordsName = members.filter((member) =>{
      return purchaseRecordsName.includes(member) === false;
    })
    Console.log(`未購買課程的會員有 ${nopurchaseRecordsName}`);
}
filterNoPurchaseMember();

