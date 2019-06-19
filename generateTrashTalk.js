// get random number from array.
function getRandom(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// define generateTalkTrash function
function generateTrashTalk(job) {
  // define jobs
  const jobs = {
    engineer: "工程師",
    designer: "設計師",
    entrepreneur: "創業家"
  };

  // define task
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code", "改一下架構"],
    designer: [
      "畫一張圖",
      "改個 logo",
      "順便幫忙設計一下",
      "隨便換個設計",
      "換個layout"
    ],
    entrepreneur: [
      "週末加班",
      "要能賺錢",
      "想個 business model",
      "找 VC 募錢",
      "換個MVP"
    ]
  };

  // define phrase
  const phrase = ["很簡單", "很容易", "很快", "很正常", "應該難不倒你"];

  return job
    ? `身為一位【 ${jobs[job]} 】，${getRandom(task[job])}，${getRandom(
        phrase
      )}吧?`
    : `請至少選擇一個職業`;
}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk;
