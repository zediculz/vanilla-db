/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-constructor */
// ASM contains all the lowlevel codes functionalities

function generate() {
   
   const alphaOne = ["sHk", "GtM", "iTj", "kh", "QLu", "mWh", "Nh", "oY", "zYo", "GYp", "IRw", "Jb", "PF", "qlU", "mHe", "Nh", "BUi", "JKt"]

   const alphaTwo = ["iq", "jb", "kh", "lu", "mw", "nh", "oy", "Aq", "bV", "bc", "dj", "eK", "fyu", "gh", "APj", "bcV", "XZc", "djU", "uGK", "fGd", "cH", "JKt", "MhY",]
   
   const alphaThree = ["QLp", "MGa", "zX", "BtJ", "iGj", "zB", "bZx", "QFu", "rWP", "NH", "oTH"]

   const randomOne = Math.floor(Math.random() * 99999)
   const randomThree = Math.floor(Math.random() * 9999999)

   const sync = Math.floor(Math.random() * alphaOne.length)
   const syncTwo = Math.floor(Math.random() * alphaTwo.length)
   const syncThree = Math.floor(Math.random() * alphaThree.length)


   const FULL = `0x${randomThree}${alphaOne[sync]}${alphaThree[syncThree]}${randomOne}${alphaTwo[syncTwo]}`
   return FULL
} 

export { generate }
