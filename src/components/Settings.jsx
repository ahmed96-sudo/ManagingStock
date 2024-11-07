import { useEffect } from "react";
const Settings = () => {
    useEffect(() => {
        document.getElementById(`menu8`).classList.add("bg-[#6B7A94]");
        /* fetch("https://asyd12855.pythonanywhere.com/settingsinfo",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("nom_settings_tab_id").value = data.all_info.nom_ste_company;
            document.getElementById("patente_settings_tab_id").value = data.all_info.patente_company;
            document.getElementById("rc_settings_tab_id").value = data.all_info.r_c_company;
            document.getElementById("tel_settings_tab_id").value = data.all_info.tel_company;
            document.getElementById("if_settings_tab_id").value = data.all_info.if_company;
            document.getElementById("cnss_settings_tab_id").value = data.all_info.cnss_company;
            document.getElementById("ice_settings_tab_id").value = data.all_info.ice_company;
            document.getElementById("adrresse_field_settings_tab_id").value = data.all_info.addresse_company;
            document.getElementById("output").setAttribute('src', 'https://asyd12855.pythonanywhere.com/companylogo/'+data.all_info.image_name_company)
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const onImageChange = (event) => {
        console.log(event);
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    image: e.target.result
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const submit_settings = (e) => {
        e.preventDefault()
        /* let nom_settings_tab = document.getElementById("nom_settings_tab_id").value;
        let patente_settings_tab = document.getElementById("patente_settings_tab_id").value;
        let rc_settings_tab = document.getElementById("rc_settings_tab_id").value;
        let tel_settings_tab = document.getElementById("tel_settings_tab_id").value;
        let if_settings_tab = document.getElementById("if_settings_tab_id").value;
        let cnss_settings_tab = document.getElementById("cnss_settings_tab_id").value;
        let ice_settings_tab = document.getElementById("ice_settings_tab_id").value;
        let adrresse_field_settings_tab = document.getElementById("adrresse_field_settings_tab_id").value;
        var filenamecom = '';
        let file = document.getElementById("file");
        if (file.files[0]) {
            filenamecom = file.files[0].name;
            let data = new FormData();
            data.append('file', file.files[0]);
            fetch("https://asyd12855.pythonanywhere.com/image",{
                method: "POST",
                body: data
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(
                    "There has been a problem:",
                    error
                );
            });
        } */
        /* fetch("https://asyd12855.pythonanywhere.com/settings",{
            method: "POST",
            body: JSON.stringify({
                nom_settings_tab: nom_settings_tab,
                patente_settings_tab: patente_settings_tab,
                rc_settings_tab: rc_settings_tab,
                tel_settings_tab: tel_settings_tab,
                if_settings_tab: if_settings_tab,
                cnss_settings_tab: cnss_settings_tab,
                ice_settings_tab: ice_settings_tab,
                filename: filenamecom,
                adrresse_field_settings_tab: adrresse_field_settings_tab
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then((data) => {
            alert("You have saved Your settings");
            window.location.reload();
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            )
        }); */
        alert("You have saved Your settings");
        window.location.reload();
    }
    /* const update_dashbord = () => {
        if (window.confirm("Are You sure that you want to Update Dashbord?")) {
            fetch("https://asyd12855.pythonanywhere.com/updatedashbord",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                let dashbord = data.dashbord;
                let data1 = [
                    ["January", dashbord[0].price],
                    ["February", dashbord[1].price],
                    ["March", dashbord[2].price],
                    ["April", dashbord[3].price],
                    ["May", dashbord[4].price],
                    ["June", dashbord[5].price],
                    ["July", dashbord[6].price],
                    ["August", dashbord[7].price],
                    ["September", dashbord[8].price],
                    ["October", dashbord[9].price],
                    ["November", dashbord[10].price],
                    ["December", dashbord[11].price]
                    ];
                this.setState({
                    chart : data1
                });
                alert("You have Updated your dashboard");
            })
            .catch((error) => {
                alert("You have a problem in the Chart");
                console.log(error);
            });
        }
    } */
    return (
        <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
            <form className="h-full w-full flex flex-col" encType='multipart/form-data' onSubmit={submit_settings} action='' method='POST'>
                <div className='h-[10%] w-full flex flex-row items-center'>
                    <h1 className="h-full w-full flex items-end ml-[35px]">Company Information</h1>
                </div>
                <div className='h-[55%] w-full flex flex-row'>
                    <div className='h-full w-[70%] flex flex-col'>
                        <div className='h-4/5 w-full flex flex-row'>
                            <div className='h-full w-1/2 flex flex-col justify-evenly'>
                                <input required type="text" className="h-[45px] w-[270px] ml-[35px] border-[1px] border-[#777] rounded-[10px] pl-[20px] font-bold text-[14px] text-[black] max-[1024px]:w-[180px]" name="nom_settings_tab_name" id='nom_settings_tab_id' placeholder='Company Name' />
                                <input type="text" className="h-[45px] w-[270px] ml-[35px] border-[1px] border-[solid] border-[#777] rounded-[10px] pl-[20px] font-bold text-[14px] text-[black] max-[1024px]:w-[180px]" name="patente_settings_tab_name" id='patente_settings_tab_id' placeholder='business license' />
                                <input type="text" className="h-[45px] w-[270px] ml-[35px] border-[1px] border-[solid] border-[#777] rounded-[10px] pl-[20px] font-bold text-[14px] text-[black] max-[1024px]:w-[180px]" name="rc_settings_tab_name" id='rc_settings_tab_id' placeholder='Commercial Register' />
                            </div>
                            <div className='h-full w-1/2 flex flex-col justify-evenly'>
                                <input type="text" className="h-[45px] w-[270px] ml-[35px] border-[1px] border-[solid] border-[#777] rounded-[10px] pl-[20px] font-bold text-[14px] text-[black] max-[1024px]:w-[180px]" name="tel_settings_tab_name" id='tel_settings_tab_id' placeholder='Phone Number' />
                                <input type="text" className="h-[45px] w-[270px] ml-[35px] border-[1px] border-[solid] border-[#777] rounded-[10px] pl-[20px] font-bold text-[14px] text-[black] max-[1024px]:w-[180px]" name="if_settings_tab_name" id='if_settings_tab_id' placeholder='Tax Identification Number' />
                                <input type="text" className="h-[45px] w-[270px] ml-[35px] border-[1px] border-[solid] border-[#777] rounded-[10px] pl-[20px] font-bold text-[14px] text-[black] max-[1024px]:w-[180px]" name="cnss_settings_tab_name" id='cnss_settings_tab_id' placeholder='National Social Security Fund' />
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex items-center'>
                            <input type="text" className="h-[45px] w-[670px] border-[1px] border-[solid] border-[#777] rounded-[10px] pl-[20px] ml-[35px] font-bold text-[14px] font-[arial] text-[black] max-[1024px]:w-[250px]" name="ice_settings_tab_name" id='ice_settings_tab_id' placeholder='Common Business Identifier'  />
                        </div>
                    </div>
                    <div className='h-full w-[30%] flex flex-col'>
                        <div className='h-4/5 w-full flex items-start justify-center'>
                            <img className="h-[200px] w-[200px] bg-[white] mt-[20px] max-[1024px]:w-[150px] max-[1024px]:h-[150px]" src="" alt='' id="output" />
                        </div>
                        <div className='h-1/5 w-full flex items-center justify-center max-[1024px]:w-[70%]'>
                            <input type="file"  accept="image/*" name="image" id="file" onChange={onImageChange} />
                        </div>
                    </div>
                </div>
                <div className='h-1/5 w-full flex items-center justify-center'>
                    <textarea className="h-[55px] w-[550px] border-[1px] border-[solid] border-[#777] rounded-[10px] pt-[15px] pr-[0] pb-[0] pl-[15px] ml-[35px] font-bold text-[14px] font-[arial] text-[black]" name="adrresse_field_settings_tab_name" id='adrresse_field_settings_tab_id' placeholder='Address' ></textarea>
                </div>
                <div className='h-[15%] w-full flex flex-row items-center justify-evenly'>
                    <input className="bg-[#0066ff] text-[white] h-[45px] w-[185px] border-[1px] border-[solid] border-[#0066ff] rounded-[10px] font-bold text-[14px] font-[arial] cursor-pointer hover:opacity-80" type="submit" name="submit_settings_tab_submit_name" value="Save" />
                    <div className="bg-[#0066ff] h-[45px] w-[150px] border-[1px] border-[solid] border-[#0066ff] rounded-[10px] font-bold text-[14px] font-[arial] cursor-pointer text-[white] flex items-center justify-center hover:opacity-80" /* onClick={update_dashbord} */>Update Dashboard</div>
                </div>
            </form>
        </div>
    );
}

export default Settings;