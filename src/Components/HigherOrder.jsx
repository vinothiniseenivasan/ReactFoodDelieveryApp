const HigherOrder =   (RestauarntCard) => {
    return function ComponentEnhanced ({ offer, res })
    {
        // console.log("inside ComponentEnhanced");
        return(
            <div className="relative">
                  <div className="absolute text-xl ml-[5rem] z-10 font-extrabold px-1   mt-[11rem] flex items-center justify-center  bg-opacity-50 text-white p-2"> 

                      {offer}
                  </div>
                  <RestauarntCard className= "z-0"  res={res} />
           
            </div>
        )

    }
   
}
export default HigherOrder;
//  className=" bg-black bg-opacity-50 absolute mx-5 my-6  border border-solid rounded-lg border-black "