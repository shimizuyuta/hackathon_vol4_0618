//demo data
const historyData = {data:['test','test2','oyazi','tanaka','hoho']}

const Txt = () => {
  const handleClick = () =>{
    const data = historyData.data
    //ToDo 改行のためにdataに正規表現を使って整える必要あり
    const newBlob = new Blob(data)
    const objUrl = window.URL.createObjectURL(newBlob);
    const link = document.createElement("a");
    link.href = objUrl;
    link.download = 'test';
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(objUrl);
    }, 250);
  }

  return (
    <div>
      <button onClick={handleClick}>ダウンロード</button>
    </div>
  )
}

export default Txt