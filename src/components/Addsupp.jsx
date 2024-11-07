import { useEffect } from "react";
const Addsupp = () => {
    useEffect(() => {
        document.getElementById(`menu5`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu5`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu5`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu5`).children[1].classList.replace(`h-[80px]`, "h-0");
        document.getElementById(`menu5`).classList.replace(`h-[140px]`, "h-[60px]");
        document.getElementById(`menu5`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu5`).children[0].children[2].classList.add("fa-caret-down");
    }, []);
    const submit_add_fourn = (e) => {
        e.preventDefault();
        /* let raison_social = document.getElementById("normal_info_add_fourn_rai_soc_id1").value;
        let nom_responsable = document.getElementById("normal_info_add_fourn_name_respon_id1").value;
        let tele_1 = document.getElementById("tele1_add_fourn_id1").value;
        let tele_2 = document.getElementById("tele2_add_fourn_id1").value;
        let fax = document.getElementById("fax_add_fourn_id1").value;
        let adresse = document.getElementById("adrresse_field_add_fourn_id1").value;
        let activite = document.getElementById("activite_field_add_fourn_id1").value;
        fetch("https://asyd12855.pythonanywhere.com/addfourn",{
            method: "POST",
            body: JSON.stringify({
                rai_soc_addfourn: raison_social,
                nom_respon_addfourn: nom_responsable,
                tele_1_addfourn: tele_1,
                tele_2_addfourn: tele_2,
                fax_addfourn: fax,
                addresse_addfourn: adresse,
                activite_addfourn: activite
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.found === 'yes') {
                alert('You have that Supplier in the Website');
            } else {
                alert("You have added a Supplier");
                window.location.reload();
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have added a Supplier");
        window.location.reload();
    }
    return (
        <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
            <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Add a Supplier</h1>
            <form className="h-[90%] w-full" onSubmit={submit_add_fourn} action='' method='POST'>
                <div className='h-1/5 w-full flex flex-row items-center justify-evenly'>
                    <div>
                        <input required className="h-[50px] w-[255px] pl-[20px] border-[1px] border-[#888] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="normal_info_add_fourn_rai_soc_name" id='normal_info_add_fourn_rai_soc_id1' placeholder='Company Name' />
                    </div>
                    <div>
                        <input required className="h-[50px] w-[255px] pl-[20px] border-[1px] border-[#888] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="normal_info_add_fourn_name_respon_name" id='normal_info_add_fourn_name_respon_id1' placeholder='Responsible Person Name' />
                    </div>
                </div>
                <div className='h-1/5 w-full flex flex-row items-center justify-evenly max-lg:flex-wrap'>
                    <div className='flex h-full items-center justify-center max-lg:h-[40%]'>
                        <input type="number" className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888]" name="tele1_add_fourn_name" id='tele1_add_fourn_id1' placeholder='telephone 1'  />
                    </div>
                    <div className='flex h-full items-center justify-center max-lg:h-[40%]'>
                        <input type="number" className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888]" name="tele2_add_fourn_name" id='tele2_add_fourn_id1' placeholder='telephone 2'  />
                    </div>
                    <div className='flex h-full items-center justify-center max-lg:h-[40%]'>
                        <input type="number" className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888]" name="fax_add_fourn_name" id='fax_add_fourn_id1' placeholder='Fax'  />
                    </div>
                </div>
                <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                    <div className='h-full w-full flex items-center justify-center'>
                        <textarea name="adrresse_field_add_fourn_name" className="w-[485px] h-[90px] border-[1px] border-[#888] rounded-[10px] pt-[10px] pr-[0] pb-[0] pl-[10px] text-[#888] font-[arial] text-[13px] font-bold" id='adrresse_field_add_fourn_id1' placeholder='Address' ></textarea>
                    </div>
                </div>
                <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                    <div>
                        <input type="text" className="h-[50px] w-[485px] pl-[20px] text-[#888] rounded-[10px] font-bold border-[1px] border-[#777] text-[14px]" name="activite_field_add_fourn_name" id='activite_field_add_fourn_id1' placeholder='Activities' />
                    </div>
                </div>
                <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                    <div>
                        <input type="submit" className="w-[450px] h-[55px] border-[1px] border-[#00e5ff] bg-[#00e5ff] rounded-[15px] text-[white] font-bold text-[17px] cursor-pointer mb-[30px] hover:opacity-70" name="submit_add_fourn_submit_name" value="Register" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Addsupp;