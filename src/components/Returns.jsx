import { useEffect, /* useState */ } from "react";
const Returns = () => {
    /* const [add_returns, setAdd_returns] = useState([]);
    const [price_out_fee_returns, setPrice_out_fee_returns] = useState(0);
    const [final_price_returns, setFinal_price_returns] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [fee_returns, setFee_returns] = useState(0);
    const [total_red_returns, setTotal_red_returns] = useState(0);
    const [pay_sale, setPay_sale] = useState({});
    const [list_client, setList_client] = useState([]); */
    useEffect(() => {
        document.getElementById(`menu2`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu2`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu2`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu2`).children[1].classList.replace(`h-[200px]`, "h-0");
        document.getElementById(`menu2`).classList.replace(`h-[260px]`, "h-[60px]");
        document.getElementById(`menu2`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu2`).children[0].children[2].classList.add("fa-caret-down");
    }, []);
    const regelmentavoire = ()=>{
        let pop_up = document.getElementById('regelmentavoire');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
    }
    const checkbankavoire = ()=>{
        let radio_btns_regelment = document.querySelector(".radio_btns_regelment1");
        radio_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let price_btns_regelment = document.querySelector(".price_btns_regelment1");
        price_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment1");
        checkbox_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let submit_btns_regelment = document.querySelector(".submit_btns_regelment1");
        submit_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let checkbank_btns_regelement = document.querySelector("#checkbankbtnsregelement");
        checkbank_btns_regelement.classList.replace("h-1/4", "h-[20%]");
        checkbank_btns_regelement.classList.replace("hidden", "flex");
        let espece1 = document.querySelector("#cash");
        espece1.addEventListener("click", function(){
            let radio_btns_regelment = document.querySelector(".radio_btns_regelment1");
            radio_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let price_btns_regelment = document.querySelector(".price_btns_regelment1");
            price_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment1");
            checkbox_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let submit_btns_regelment = document.querySelector(".submit_btns_regelment1");
            submit_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let checkbank_btns_regelement = document.querySelector("#checkbankbtnsregelement");
            checkbank_btns_regelement.classList.replace("h-[20%]", "h-1/4");
            checkbank_btns_regelement.classList.replace("flex", "hidden");
        });
    }
    const editavoire = (/* index */)=>{
        let pop_up = document.getElementById('editavoire');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
                document.getElementById("qtyeditret").value = "";
            }
        }
        document.getElementById("qtyeditret").value = /* obje.qty_vente_add */"22";
        /* let obje = this.state.avoire_list[index];
        this.setState({
            index_of_edit_avoire : index
        }) */
    }
    let today = new Date();
    // let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let day2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();
    if (month2 < 10) month2 = "0" + month2;
    if (day2 < 10) day2 = "0" + day2;
    let today2 = year2 + "-" + month2 + "-" + day2;
    // let year1 = today.getFullYear();
    return (
        <>
            <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Returns</h1>
                <form className="h-[90%] w-full" action='' method='POST'>
                    <div className='h-[15%] w-full flex flex-row'>
                        <div className='h-full w-3/5 flex flex-row justify-center'>
                            <div className='h-full w-[15%] flex items-center justify-start'>
                                <input className="h-[40px] w-[100px] rounded-[10px] border-[1px] border-[#3aff14] bg-[#3aff14] cursor-pointer text-[white] font-bold hover:opacity-70" /* onClick={this.avoirebtn} id='devisbtnid' */ type="submit" name="devisbtnname" value="Return" />
                            </div>
                        </div>
                        <div className='h-full w-2/5 flex items-center'>
                            <div className="text-[#747272] font-bold">
                                Final Price (Fee 14%) : {/* {this.state.total_ttc_avoire ? -this.state.total_ttc_avoire : 0 } */}$ 0
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[15%] flex flex-row justify-evenly'>
                        <div className='h-full w-[24%] flex items-center justify-center'>
                            <select className="h-[40px] w-[80%] pl-[20px] rounded-[10px] text-[#747272] font-bold border-[2px] border-[#d2d3d4] max-[1024px]:w-full" /* onClickCapture={this.selectclient} onChange={this.selectclient_avoire} */ required name='chooseclientname' /* id='chooseclientid2' */ >
                                <option value="">Select Client</option>
                                <option value="ahmed">Ahmed</option>
                                <option value="saeed">Saeed</option>
                                <option value="mohamed">Mohamed</option>
                                {/* {
                                    this.state.listclient.map((val,index) => {
                                        return (
                                            <option key={index} value={val.client_id}>{val.client_name}</option>
                                        );
                                    })
                                } */}
                            </select>
                        </div>
                        <div className='h-full w-1/5 flex items-center justify-center'>
                            <select className="h-[40px] w-[80%] pl-[10px] bg-[white] border-[2px] border-[#d2d3d4] rounded-[10px] flex items-center justify-center text-[#747272] font-bold cursor-pointer max-[1024px]:w-full" /* onChange={this.selectfactur_avoire} */ required name='choosefacturname' /* id='choosefacturid' */ >
                                <option value="">Select Invoice</option>
                                <option value="asd969">asd969</option>
                                <option value="qweq65195">qweq65195</option>
                                <option value="gdfhfh65">gdfhfh65</option>
                                {/* {
                                    this.state.listfactur.map((val,index) => {
                                        return (
                                            <option key={index} value={val.id}>F.Number:{val.id} {val.client_name}</option>
                                        );
                                    })
                                } */}
                            </select>
                        </div>
                        <div className='h-full w-1/5 flex items-center justify-center'>
                            <input className="h-[40px] w-[70%] pl-[10px] text-[#747272] font-bold max-[1024px]:w-full" required type="date" defaultValue={today2} name="choosedatename" /* id='choosedateid5' */ />
                        </div>
                        <div className='h-full w-1/5 flex items-center justify-center'>
                            <div className="h-[40px] w-[130px] bg-[#70f5ff] flex items-center justify-center rounded-[10px] text-[white] font-bold cursor-pointer hover:opacity-80" onClick={regelmentavoire}>
                                Paying Method
                            </div>
                        </div>
                    </div>
                    <div className='h-[70%] w-full flex items-center justify-center'>
                        <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                            <thead>
                                <tr className="flex">
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Code</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Description</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">UNIT PRICE</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">QTY</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Price without Fee</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="block h-[80%] overflow-auto w-full">
                                <tr className="flex" /* key={index} id={'vente_remove_element' + index} */>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">5651569</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">asdsadasd5691956asd</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 12</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">12 KG</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 1515</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span /* onClick={()=>this.remove_avoire(index)} */ className='fas fa-trash text-[red] cursor-pointer'></span><span onClick={/* ()=>this.edit_avoire(index) */editavoire} className='fas fa-edit text-[#3aff14] ml-[10px] cursor-pointer'></span></td>
                                </tr>
                                <tr className="flex" /* key={index} id={'vente_remove_element' + index} */>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">5651569</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">asdsadasd5691956asd</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 12</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">12 KG</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 1515</td>
                                    <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span /* onClick={()=>this.remove_avoire(index)} */ className='fas fa-trash text-[red] cursor-pointer'></span><span onClick={/* ()=>this.edit_avoire(index) */editavoire} className='fas fa-edit text-[#3aff14] ml-[10px] cursor-pointer'></span></td>
                                </tr>
                                {/* {
                                    this.state.avoire_list.map((val, index) => {
                                        return (
                                            <tr key={index} id={'vente_remove_element' + index}>
                                                <td className="w-[140px] max-w-[140px] overflow-x-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.code_vente_add}</td>
                                                <td className="w-[140px] max-w-[140px] overflow-x-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.descri}</td>
                                                <td className="w-[140px] max-w-[140px] overflow-x-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.pu}</td>
                                                <td className="w-[140px] max-w-[140px] overflow-x-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.qty_vente_add} {val.meassurement}</td>
                                                <td className="w-[140px] max-w-[140px] overflow-x-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">-{val.total_ht}</td>
                                                <td className="w-[140px] max-w-[140px] overflow-x-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={()=>this.remove_avoire(index)} className='fas fa-trash text-[red] cursor-pointer'></span><span onClick={()=>editavoire(index)} className='fas fa-edit text-[#3aff14] ml-[10px] cursor-pointer'></span></td>
                                            </tr>
                                        );
                                    })
                                } */}
                                <tr className="flex">
                                    <td colSpan='4' className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Total Price without Fee</td>
                                    <td colSpan='2' className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="regelmentavoire">
                <div className='bg-[#fefefe] mx-[auto] my-[10%] border-[1px] border-[#888] w-1/2 h-[250px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571]" /* onSubmit={this.submit_regelment_avoire} */ method='POST'>
                        <div className='h-1/4 w-full flex items-center justify-center radio_btns_regelment1'>
                            <label className="mr-[30px] font-bold text-[16px] font-[arial]" htmlFor="cash"><input type="radio" required id="cash" name="regelement" value="cash" /> Cash</label>
                            <label className="mr-[30px] font-bold text-[16px] font-[arial]" htmlFor="check"><input onClick={checkbankavoire} type="radio" required id="check" name="regelement" value="check" /> Check</label>
                        </div>
                        <div className='h-1/4 w-full flex items-center justify-center price_btns_regelment1'>
                            <input className="h-[35px] w-[260px] mr-[20px] pl-[20px] bg-[#EFF2F6] border-[1px] border-[#EFF2F6] font-bold text-[15px]" type="text" name="price_btns_regelment_name"  /* id='price_btns_regelment_id_avoire' */ placeholder='Price' />
                        </div>
                        <div className='h-1/4 w-full hidden items-center justify-center' id='checkbankbtnsregelement'>
                            <input className="h-[35px] w-[260px] mr-[20px] pl-[20px] bg-[#EFF2F6] border-[1px] border-[#EFF2F6] font-bold text-[15px]" type="text" name="check_number_btns_regelment_name"  /* id='check_btns_regelment_id_avoire' */ placeholder='Check Number' />
                        </div>
                        <div className='h-1/4 w-full flex items-center justify-center flex-row checkbox_btns_regelment1'>
                            <input className="mr-[7px] mt-[3px]" type="checkbox" /* id="checkbox_btns_regelment_id3" */ id="pdp" name="checkbox_btns_regelment_name" value="paidall" />
                            <label htmlFor="pdp"> paid all price</label>
                        </div>
                        <div className='h-1/4 w-full flex items-start justify-center submit_btns_regelment1'>
                            <input className="bg-[#BBBBBB] border-[1px] border-[#BBBBBB] text-[white] h-[45px] w-[170px] rounded-[15px] font-bold text-[15px] font-[arial] cursor-pointer hover:opacity-80" type="submit" name="submit_btns_regelment_name" value="SAVE" /* id='submit_btns_regelment_id' */ />
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="editavoire">
                <div className='bg-[#fefefe] mx-[auto] my-[14%] border-[1px] border-[solid] border-[#888] w-1/2 h-[200px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571]" action='' method='POST'>
                        <div className='w-full flex flex-row h-full'>
                            <div className='h-full flex items-center justify-center w-1/2'>
                                <input className="w-[40%] h-[35px] border-[1.5px] border-[#c3c5c8] rounded-[15px] pl-[15px] text-[#7e7e7e] font-bold max-[1024px]:w-[70%]" type="number" name="qtyname" id="qtyeditret" placeholder='QTY' />
                            </div>
                            <div className='h-full flex items-center justify-center w-1/2'>
                                <div className="w-[40%] h-[35px] flex items-center justify-center rounded-[10px] font-bold text-[17px] cursor-pointer hover:opacity-75 border-[1px] border-[#989898] bg-[#989898] text-[white] max-[1024px]:w-[70%]" /* onClick={this.submit_edit_avoire} */>
                                    Save
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Returns;