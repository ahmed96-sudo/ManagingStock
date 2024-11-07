import { useEffect, useState } from "react";
const Listsupp = () => {
    const [list_supp, setListSupp] = useState([]);
    const [index_of_edit_supp, setIndexOfEditSupp] = useState(0);
    useEffect(() => {
        document.getElementById(`menu5`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu5`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu5`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu5`).children[1].classList.replace(`h-[80px]`, "h-0");
        document.getElementById(`menu5`).classList.replace(`h-[140px]`, "h-[60px]");
        document.getElementById(`menu5`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu5`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listfourn",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListSupp(data.listfournall);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const popupfournlist = (index)=>{
        let pop_up = document.getElementById('popupfournlist');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
                document.getElementById("compnamedit").value = '';
                document.getElementById("pernamedit").value = '';
                document.getElementById("tele1edit").value = '';
                document.getElementById("tele2edit").value = '';
                document.getElementById("faxnumedit").value = '';
                document.getElementById("addresedit").value = '';
                document.getElementById("actedit").value = '';
            }
        }
        let obj_fourn_edit = list_supp[index];
        setIndexOfEditSupp(obj_fourn_edit.fourn_id);
        document.getElementById("compnamedit").value = obj_fourn_edit.fourn_n_societe/* "Karfoor" */;
        document.getElementById("pernamedit").value = obj_fourn_edit.fourn_nom_respon/* "Ahmed" */;
        document.getElementById("tele1edit").value = obj_fourn_edit.fourn_tele_1/* "9995191234" */;
        document.getElementById("tele2edit").value = obj_fourn_edit.fourn_tele_2/* "4561651651" */;
        document.getElementById("faxnumedit").value = obj_fourn_edit.fourn_fax/* "4848915" */;
        document.getElementById("addresedit").value = obj_fourn_edit.fourn_adresse/* "kahsbdhi54asd65" */;
        document.getElementById("actedit").value = obj_fourn_edit.fourn_activite/* "" */;
    }
    const submit_search_fourn_act = (e) => {
        e.preventDefault();
        /* let activite_input_search_list_fourn = document.getElementById("activite_input_search_list_fourn_id").value;
        fetch("https://asyd12855.pythonanywhere.com/fourn/activite/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : activite_input_search_list_fourn
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListSupp(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListSupp([]);
    }
    const submit_search_fourn_name = (e) => {
        e.preventDefault();
        /* let nom_input_search_list_fourn = document.getElementById("nom_input_search_list_fourn_id").value;
        fetch("https://asyd12855.pythonanywhere.com/fourn/name/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : nom_input_search_list_fourn
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListSupp(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListSupp([]);
    }
    const del_list_fourn = (/* ind */) => {
        if (window.confirm('are you sure you want to delete the Supplier?')) {
            /* fetch("https://asyd12855.pythonanywhere.com/listfourn/" + ind,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then((data) => {
                window.location.reload();
            })
            .catch(error => {
                console.error(
                    "There has been a problem:",
                    error
                );
            }); */
            window.location.reload();
        }
    }
    const submit_edit_fourn = (e) => {
        e.preventDefault();
        /* let edit_fourn1 = document.getElementById("compnamedit").value;
        let edit_fourn2 = document.getElementById("pernamedit").value;
        let edit_fourn3 = document.getElementById("tele1edit").value;
        let edit_fourn4 = document.getElementById("tele2edit").value;
        let edit_fourn5 = document.getElementById("faxnumedit").value;
        let edit_fourn6 = document.getElementById("addresedit").value;
        let edit_fourn7 = document.getElementById("actedit").value;
        let index_of_edit_fourn = index_of_edit_supp;
        fetch("https://asyd12855.pythonanywhere.com/editfourn",{
            method: "POST",
            body: JSON.stringify({
                index_of_edit_fourn : index_of_edit_fourn,
                edit_fourn1 : edit_fourn1,
                edit_fourn2 : edit_fourn2,
                edit_fourn3 : edit_fourn3,
                edit_fourn4 : edit_fourn4,
                edit_fourn5 : edit_fourn5,
                edit_fourn6 : edit_fourn6,
                edit_fourn7 : edit_fourn7
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.found === 'yes') {
                alert('You have that Supplier in the website');
            } else {
                alert("You have Edited a Supplier");
                let pop_up = document.getElementById('popupfournlist');
                pop_up.classList.replace("block", "hidden");
                window.location.reload();
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have Edited a Supplier");
        let pop_up = document.getElementById('popupfournlist');
        pop_up.classList.replace("block", "hidden");
        window.location.reload();
    }
    return (
        <>
            <div className="h-full w-full flex flex-col bg-[#EFF2F6] flex-1 overflow-auto">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Suppliers List</h1>
                <div className='w-full h-1/5 flex flex-row'>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center" onSubmit={submit_search_fourn_act} method='POST'>
                            <input required className="w-[30%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] ml-[20px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[70%]" type="text" name="activite_input_search_list_fourn_name" id='activite_input_search_list_fourn_id' placeholder='Activity'  />
                            <button className="h-[52px] w-[7%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center justify-end" onSubmit={submit_search_fourn_name} method='POST'>
                            <input required className="w-[30%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[70%]" type="text" name="nom_input_search_list_fourn_name" id='nom_input_search_list_fourn_id' placeholder='Person&apos;s Name'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] mr-[40px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                </div>
                <div className='h-4/5 w-full flex items-center justify-center'>
                    <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                        <thead>
                            <tr className="flex">
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Company name</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Person&apos;s Name</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Tele 1</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Tele 2</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Fax</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Activities</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="block h-[80%] overflow-auto w-full [&>*:nth-child(odd)]:bg-[#d1d8e1]">
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Karfoor</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed Saeed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">45619196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">651695160</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">30554451</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_fourn(1)} className='fas fa-trash text-[red]'></span><span onClick={popupfournlist} className='fas fa-edit text-[#3aff14]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Karfoor</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed Saeed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">45619196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">651695160</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">30554451</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_fourn(1)} className='fas fa-trash text-[red]'></span><span onClick={popupfournlist} className='fas fa-edit text-[#3aff14]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Karfoor</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed Saeed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">45619196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">651695160</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">30554451</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_fourn(1)} className='fas fa-trash text-[red]'></span><span onClick={popupfournlist} className='fas fa-edit text-[#3aff14]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Karfoor</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed Saeed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">45619196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">651695160</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">30554451</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_fourn(1)} className='fas fa-trash text-[red]'></span><span onClick={popupfournlist} className='fas fa-edit text-[#3aff14]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Karfoor</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed Saeed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">45619196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">651695160</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">30554451</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_fourn(1)} className='fas fa-trash text-[red]'></span><span onClick={popupfournlist} className='fas fa-edit text-[#3aff14]'></span></td>
                            </tr>
                        {
                            list_supp.map((val, index) => {
                                return (
                                    <tr key={index} id={'listfourn' + val.fourn_id}>
                                        <td className="w-[120px] max-w-[120px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.fourn_n_societe}</td>
                                        <td className="w-[120px] max-w-[120px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.fourn_nom_respon}</td>
                                        <td className="w-[120px] max-w-[120px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.fourn_tele_1}</td>
                                        <td className="w-[120px] max-w-[120px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.fourn_tele_2}</td>
                                        <td className="w-[120px] max-w-[120px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.fourn_fax}</td>
                                        <td className="w-[120px] max-w-[120px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.fourn_activite}</td>
                                        <td className="w-[120px] max-w-[120px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_fourn(val.fourn_id)} className='fas fa-trash text-[red]'></span><span onClick={() => popupfournlist(index)} className='fas fa-edit text-[#3aff14]'></span></td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="popupfournlist">
                <div className='bg-[#fefefe] mx-[auto] my-[6%] border-[1px] border-[solid] border-[#888] w-4/5 h-[600px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571]" onSubmit={submit_edit_fourn} method='POST'>
                        <div className='h-1/5 w-full flex flex-row items-center justify-evenly'>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] border-[1px] border-[#888] text-[#888] rounded-[10px] font-bold text-[14px]" required type="text" name="normal_info_add_fourn_rai_soc_name"  id='compnamedit' placeholder='Company Name' />
                            </div>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] border-[1px] border-[#888] text-[#888] rounded-[10px] font-bold text-[14px]" required type="text" name="normal_info_add_fourn_name_respon_name"  id='pernamedit' placeholder='Responsible Person Name' />
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-evenly max-lg:flex-wrap'>
                            <div className='flex h-full items-center justify-center max-lg:h-[40%]'>
                                <input className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888]" type="text" name="tele1_add_fourn_name" id='tele1edit' placeholder='telephone 1'  />
                            </div>
                            <div className='flex h-full items-center justify-center max-lg:h-[40%]'>
                                <input className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888]" type="text" name="tele2_add_fourn_name" id='tele2edit' placeholder='telephone 2'  />
                            </div>
                            <div className='flex h-full items-center justify-center max-lg:h-[40%]'>
                                <input className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888]" type="text" name="fax_add_fourn_name" id='faxnumedit' placeholder='Fax'  />
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                            <div className='h-full w-full flex items-center justify-center'>
                                <textarea className="w-[485px] h-[90px] border-[1px] border-[#888] rounded-[10px] pt-[10px] pr-[0] pb-[0] pl-[10px] text-[#888] font-[arial] text-[13px] font-bold" name="adrresse_field_add_fourn_name" id='addresedit' placeholder='Address' ></textarea>
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                            <div>
                                <input className="h-[50px] w-[485px] pl-[20px] text-[#888] rounded-[10px] font-bold border-[1px] border-[#777] text-[14px]" type="text" name="activite_field_add_fourn_name"  id='actedit' placeholder='Activities' />
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                            <div>
                                <input className="w-[450px] h-[55px] border-[1px] border-[#00e5ff] bg-[#00e5ff] rounded-[15px] text-[white] font-bold text-[17px] cursor-pointer mb-[30px] hover:opacity-70" type="submit" name="submit_add_fourn_submit_name" value="Save" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Listsupp;