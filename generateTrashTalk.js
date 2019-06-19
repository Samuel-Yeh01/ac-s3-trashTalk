// 隨機從陣列中取出數值
function getRandom(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// 定義 generateTalkTrash function
function generateTrashTalk(job) {
  // 定義職業類型
  const jobs = {
    engineer: "工程師",
    designer: "設計師",
    entrepreneur: "創業家"
  };

  // 定義工作項目
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };

  // 定義形容詞
  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  return job
    ? `身為一位【 ${jobs[job]} 】，${getRandom(task[job])}，${getRandom(
        phrase
      )}吧`
    : `請至少選擇一個職業`;
}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk;
