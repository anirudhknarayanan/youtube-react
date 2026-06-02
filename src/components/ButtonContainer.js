import Button from "./Button"
const list = ["All","Gaming","songs","live","soccer","cricket","cooking","All","Gaming","songs","live","soccer","cricket","cooking"]
const ButoonContainer = ()=>{
    return(
        <div className="flex">
            {list.map((item,index)=> <Button key={index} name = {item}/>)}
           
        </div>
    )
}
export default ButoonContainer