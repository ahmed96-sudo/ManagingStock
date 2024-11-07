import { useEffect, useState } from "react";
const Addproduct = () => {
    const [list_supp, setListSupp] = useState([]);
    const [list_cate, setListCate] = useState([]);
    useEffect(() => {
        document.getElementById(`menu3`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu3`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu3`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu3`).children[1].classList.replace(`h-[90px]`, "h-0");
        document.getElementById(`menu3`).classList.replace(`h-[150px]`, "h-[60px]");
        document.getElementById(`menu3`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu3`).children[0].children[2].classList.add("fa-caret-down");
    }, []);
    const handlecategory = ()=>{
        let pop_up = document.getElementById('pop_up_add_category');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
    }
    const selectfourn = () => {
        /* fetch("https://asyd12855.pythonanywhere.com/selectfourn",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListSupp(data.select_fourn);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListSupp([]);
    }
    const selectcategory = () => {
        /* fetch("https://asyd12855.pythonanywhere.com/selectcategory",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListCate(data.select_category);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListCate([]);
    }
    const add_category = (e) => {
        e.preventDefault();
        /* let new_category = document.getElementById("input_for_category_new_id").value;
        fetch("https://asyd12855.pythonanywhere.com/addcategory",{
            method: "POST",
            body: JSON.stringify({
                new_category_add: new_category
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then((data) => {
            alert("You have added a Category");
            let pop_up = document.getElementById('pop_up_category_product_add');
            pop_up.classList.replace("block", "hidden");
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have added a Category");
        let pop_up = document.getElementById('pop_up_add_category');
        pop_up.classList.replace("block", "hidden");
    }
    const submit_add_product = (e) => {
        e.preventDefault();
        /* let fourn_select_add_product = document.getElementById("fourn_select_add_product_id1").value;
        let category_select_add_product = document.getElementById("category_select_add_product_id1").value;
        let bar_code_add_product = document.getElementById("bar_code_add_product_id1").value;
        let referance_add_product = document.getElementById("referance_add_product_id1").value;
        let qty_add_product = document.getElementById("qty_add_product_id1").value;
        let kg_measurement_add_product = document.getElementById("kg_measurement_add_product_id2").checked;
        let meter_measurement_add_product = document.getElementById("meter_measurement_add_product_id2").checked;
        let description_field_add_product = document.getElementById("description_field_add_product_id1").value;
        let min_qty_alert = document.getElementById("min_qty_alert_id1").value;
        var filenamelogo = '';
        let pu_devis_add_product = document.getElementById("pu_devis_add_product_id1").value;
        let prix_d_achat_add_product = document.getElementById("prix_d_achat_add_product_id1").value;
        let prix_de_vente_add_product = document.getElementById("prix_de_vente_add_product_id1").value;
        let file = document.getElementById("logo");
        if (file.files[0]) {
            filenamelogo = file.files[0].name;
            let data = new FormData();
            data.append('file', file.files[0]);
            fetch("https://asyd12855.pythonanywhere.com/logoproduct",{
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
        }
        if ((kg_measurement_add_product === true) && (meter_measurement_add_product === true)) {
            alert("You cannot choose both Kg & m. Choose ONLY ONE or DON'T choose ANY.");
        } else {
            if ((kg_measurement_add_product === false) && (meter_measurement_add_product === false)) {
                var kg_or_m = 'unit';
            } else {
                if ((kg_measurement_add_product === true) && (meter_measurement_add_product === false)) {
                    kg_or_m = 'kg';
                } else {
                    kg_or_m = 'm';
                }
            }
            fetch("https://asyd12855.pythonanywhere.com/addproduct",{
                method: "POST",
                body: JSON.stringify({
                    fourn_select_add_product: fourn_select_add_product,
                    category_select_add_product: category_select_add_product,
                    bar_code_add_product: bar_code_add_product,
                    referance_add_product: referance_add_product,
                    qty_add_product: qty_add_product,
                    kg_or_m: kg_or_m,
                    description_field_add_product: description_field_add_product,
                    min_qty_alert : min_qty_alert,
                    pu_devis_add_product : pu_devis_add_product,
                    prix_d_achat_add_product : prix_d_achat_add_product,
                    prix_de_vente_add_product : prix_de_vente_add_product,
                    filename: filenamelogo
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.found === 'yes') {
                    alert('You have that product in the website');
                } else {
                    alert("You have added a Product");
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error(
                    "There has been a problem:",
                    error
                );
            });
        } */
        alert("You have added a Product");
        window.location.reload();
    }
    return (
        <>
            <div className="h-full w-full flex justify-center bg-[#EFF2F6] flex-1 overflow-auto flex-col items-center">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Add a Product</h1>
                <form className="h-[90%] w-[90%] flex flex-col items-center" onSubmit={submit_add_product} method='POST'>
                    <div className='h-1/5 w-full flex flex-row items-center max-[1024px]:justify-between'>
                        <div className='h-full w-2/5 flex items-center max-[1024px]:w-[30%]'>
                            <select className="h-[50px] w-[345px] pl-[20px] border-[1px] border-[#888] text-[#888] rounded-[15px] font-bold text-[14px]" onClickCapture={selectfourn} required name='fourn_select_add_product_name' id='fourn_select_add_product_id1' >
                                <option value="">Supplier</option>
                                <option value="egypt">Egypt</option>
                                <option value="biker">Biker</option>
                                <option value="mac">Mac</option>
                                {
                                    list_supp.map((val,index) => {
                                        return (
                                            <option key={index} value={val.id}>{val.name}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className='h-full w-[30%] flex items-center justify-center'>
                            <select className="h-[50px] w-[175px] pl-[20px] border-[1px] border-[#888] text-[#888] rounded-[15px] font-bold text-[14px] mr-[30px]" onClickCapture={selectcategory} required name='category_select_add_product_name' id='category_select_add_product_id1' >
                                <option value="">Category</option>
                                <option value="trucks">Trucks</option>
                                <option value="cars">Cars</option>
                                <option value="bikes">Bikes</option>
                                {
                                    list_cate.map((val,index) => {
                                        return (
                                            <option key={index} value={val.id}>{val.name}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className='h-full w-[30%] flex items-center'>
                            <div className="h-[50px] w-[175px] bg-[white] flex items-center justify-center border-[1px] border-[#888] text-[#888] font-bold text-[15px] rounded-[15px] font-[arial] cursor-pointer [box-shadow:0px_0.5px_2px]" onClick={handlecategory}>
                                New Category
                            </div>
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row items-center max-[1024px]:justify-between'>
                        <div className='h-full w-[30%] flex items-center max-[1024px]:w-[22%]'>
                            <input required className="w-[225px] h-[45px] border-[1px] border-[#888] rounded-[15px] pl-[20px] font-bold text-[#888] text-[13px] max-[1024px]:w-[140px]" type="text" name="bar_code_add_product_name" id='bar_code_add_product_id1' placeholder='Bar Code' />
                        </div>
                        <div className='h-full w-[30%] flex items-center max-[1024px]:w-[22%]'>
                            <input required className="w-[225px] h-[45px] border-[1px] border-[#888] rounded-[15px] pl-[20px] font-bold text-[#888] text-[13px] max-[1024px]:w-[140px]" type="text" name="referance_add_product_name" id='referance_add_product_id1' placeholder='Reference' />
                        </div>
                        <div className='h-full w-1/5 flex items-center justify-center'>
                            <input required className="w-[115px] h-[45px] border-[1px] border-[#888] rounded-[15px] text-center font-bold text-[#888] text-[13px]" type="number" name="qty_add_product_name" id='qty_add_product_id1' placeholder='Quantity' />
                        </div>
                        <div className='h-full w-1/5 flex flex-col justify-center max-[1024px]:w-[10%]'>
                            <div className='flex flex-row items-center w-4/5 ml-[20px] max-[1024px]:m-0'>
                                <input type="radio" className="w-[20px]" name="measurement_add_product_name" id='kg_measurement_add_product_id2' value="kg" />
                                <label htmlFor="kg_measurement_add_product_id2" className="font-bold">Kg</label>
                            </div>
                            <div className='flex items-center flex-row w-4/5 ml-[20px] max-[1024px]:m-0'>
                                <input type="radio" className="w-[20px]" name="measurement_add_product_name" id='meter_measurement_add_product_id2' value="m" />
                                <label htmlFor="meter_measurement_add_product_id2" className="font-bold">M</label>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex max-[1024px]:h-[25%] max-[1024px]:flex-wrap'>
                        <div className='h-full w-1/2 flex items-center justify-center'>
                            <textarea className="w-[545px] h-[90px] border-[1px] border-[#888] rounded-[10px] pt-[10px] pr-[0] pb-[0] pl-[10px] text-[#888] font-[arial] text-[13px] font-bold" name="description_field_add_product_name" id='description_field_add_product_id1' placeholder='Description' ></textarea>
                        </div>
                        <div className='h-full w-1/4 flex items-center justify-center max-[1024px]:w-[40%]'>
                            <input type="number" className="h-[45px] w-[150px] border-[1px] border-[#777] rounded-[10px] text-center" name="" id='min_qty_alert_id1'  placeholder='Min QTY Alert' />
                        </div>
                        <div className="h-full w-1/4 flex items-center justify-center max-[1024px]:h-[20%] max-[1024px]:w-full">
                            <input type="file"  accept="image/*" name="image" /* id="logo" */ />
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row items-center'>
                        <div className='flex w-1/3 h-full items-center'>
                            <input required className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888] max-lg:w-[150px]" type="number" name="pu_devis_add_product_name" id='pu_devis_add_product_id1' placeholder='Selling Price'  />
                        </div>
                        <div className='flex w-1/3 h-full items-center justify-center'>
                            <input required className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888] mr-[30px] max-lg:w-[150px] max-[1024px]:mr-0" type="number" name="prix_d_achat_add_product_name" id='prix_d_achat_add_product_id1' placeholder='Added Price'  />
                        </div>
                        <div className='flex w-1/3 h-full items-center justify-center'>
                            <input required className="w-[225px] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888] max-lg:w-[150px]" type="number" name="prix_de_vente_add_product_name" id='prix_de_vente_add_product_id1' placeholder='Final Price'  />
                        </div>
                    </div>
                    <div className='h-1/5 w-full submit_add_product'>
                        <div className='h-full w-full flex items-center justify-center'>
                            <input className="w-[450px] h-[55px] border-[1px] border-[#00e5ff] bg-[#00e5ff] rounded-[15px] text-[white] font-bold text-[17px] cursor-pointer mb-[30px] hover:opacity-[0.66] hover:[transition:all_ease-in_0.3s]" type="submit" name="submit_button_add_product_name" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="pop_up_add_category">
                <div className='bg-[#fefefe] mx-[auto] my-[16%] border-[1px] border-[#888] w-2/5 h-[150px] max-lg:w-[50%]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571] flex flex-row items-center justify-evenly" onSubmit={add_category} method='POST'>
                        <div>
                            <input required className="h-[35px] w-[200px] pl-[20px] text-[black] text-[14px] font-bold border-[1px] border-[#777] rounded-[10px]" type="text" name="input_for_category_new_name" id='input_for_category_new_id' placeholder='Category Name' />
                        </div>
                        <div>
                            <input className="h-[35px] w-[130px] bg-[#FEA6A6] border-[1px]  border-[#FEA6A6] rounded-[10px] text-[14px] cursor-pointer font-bold hover:opacity-80" type="submit" name="submit_for_category_new_name" value="ADD"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Addproduct;