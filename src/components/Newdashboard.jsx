import { useEffect } from "react";
const Newdashboard = () => {
    useEffect(() => {
        document.getElementById(`menu1`).classList.add("bg-[#6B7A94]");
        /* // money
        fetch("https://asyd12855.pythonanywhere.com/moneycompany",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                benefic: data.benefic,
                totalvente : data.total_vente,
                productsunit : data.product
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
        // chart
        fetch("https://asyd12855.pythonanywhere.com/chart",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            let dashbord = data.chart;
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
        })
        .catch((error) => {
            alert("You have a problem in the Chart");
            console.log(error);
        }); */
    }, []);
    return (
        <div className="bg-[#EFF2F6] flex-1 overflow-auto">
            <div className='h-[70px] w-full flex items-center'>
                <h1 className="ml-[40px] text-[#747272] text-[30px]">Statistics for Last Month</h1>
            </div>
            <div className='h-[120px] w-full flex flex-row items-center'>
                <div className='h-[100px] w-[15%] ml-[40px] flex flex-row items-center bg-[white] border-[1px] border-[#b0b0b2] rounded-[15px] max-[1024px]:w-[30%]'>
                    <div className='h-[50px] w-[70px] bg-[#3cbadb] rounded-[14px] flex items-center justify-center ml-[20px]'>
                        <span className='fas fa-dollar-sign text-[white] text-[20px]'></span>
                    </div>
                    <div className='h-full w-[230px] flex flex-col overflow-auto'>
                        <div className='h-1/2 w-full flex items-end justify-center'>
                            <div className="mb-[5px] text-[#1e1e1e] font-bold">$ 0</div>
                        </div>
                        <div className='h-1/2 w-full flex items-start justify-center'>
                            <div className="text-[#797777] font-bold w-[100px] mt-[5px] flex justify-center">Profit</div>
                        </div>
                    </div>
                </div>
                <div className='h-[100px] w-[15%] flex flex-row items-center bg-[white] border-[1px] border-[#b0b0b2] rounded-[15px] ml-[80px] max-[1024px]:w-[30%]'>
                    <div className='h-[50px] w-[70px] bg-[#db3c7c] rounded-[14px] flex items-center justify-center ml-[20px]'>
                        <span className='fas fa-chart-bar text-white text-[20px]'></span>
                    </div>
                    <div className='h-full w-[230px] flex flex-col overflow-auto'>
                        <div className='h-1/2 w-full flex items-end justify-center'>
                            <div className="mb-[5px] text-[#1e1e1e] font-bold">$ 0</div>
                        </div>
                        <div className='h-1/2 w-full flex items-start justify-center'>
                            <div className="text-[#797777] font-bold w-[100px] mt-[5px] flex justify-center">Total Sales</div>
                        </div>
                    </div>
                </div>
                <div className='ml-[80px] h-[100px] w-[15%] flex flex-row items-center bg-[white] border-[1px] border-[#b0b0b2] rounded-[15px] max-[1024px]:w-[30%]'>
                    <div className='h-[50px] w-[70px] bg-[#dbbb3c] rounded-[14px] flex items-center justify-center ml-[20px]'>
                        <span className='fas fa-bezier-curve text-white text-[20px]'></span>
                    </div>
                    <div className='h-full w-[230px] flex flex-col overflow-auto'>
                        <div className='h-1/2 w-full flex items-end justify-center'>
                            <div className="mb-[5px] text-[#1e1e1e] font-bold">0</div>
                        </div>
                        <div className='h-1/2 w-full flex items-start justify-center'>
                            <div className="text-[#797777] font-bold mt-[5px] flex justify-center">Product Sales</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newdashboard;