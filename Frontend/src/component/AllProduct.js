import React from 'react';

const AllProduct = () => {
  return (
    <>
        <div className='container mx-auto px-4'>
            <div className='mb-10'>
                <h2 className='text-2xl font-bold mb-6'>Our Most Popular Products</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
                    <div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow'>
                        <img src="https://www.123-printerlivesolution.com/personalisednotebook.webp" alt="Notebook" width="350" height="350" className='w-full object-cover'/>
                        <div className='p-4'>
                            <div className='text-xs text-blue-600 font-bold mb-2'>"BUY 1@RS""550"

                            </div>
                            <h3 text-black text-lg font-bold>Personalised Notebooks</h3>

                        </div>

                    </div>


                    <div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow'>
                        <img src="https://www.123-printerlivesolution.com/flayers.webp" alt="Notebook" width="350" height="350" className='w-full object-cover'/>
                        <div className='p-4'>
                            <div className='text-xs text-blue-600 font-bold mb-2'>"BUY 1@RS""200"

                            </div>
                            <h3 text-lg font-bold>Flayers</h3>

                        </div>

                    </div>



                    <div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow'>
                        <img src="https://www.123-printerlivesolution.com/tshirt.webp" alt="Notebook" width="350" height="350" className='w-full object-cover'/>
                        <div className='p-4'>
                            <div className='text-xs text-blue-600 font-bold mb-2'>"BUY 1@RS""420"

                            </div>
                            <h3 text-lg font-bold>Hoodies</h3>

                        </div>

                    </div>


                    <div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow'>
                        <img src="https://www.123-printerlivesolution.com/gift.webp" alt="Notebook" width="350" height="350" className='w-full object-cover'/>
                        <div className='p-4'>
                            <div className='text-xs text-blue-600 font-bold mb-2'>"BUY 1@RS""550"

                            </div>
                            <h3 text-lg font-bold>Personalized Mugs</h3>

                        </div>

                    </div>

                    <div className='border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow'>
                        <img src="https://www.123-printerlivesolution.com/card.webp" alt="Notebook" width="350" height="350" className='w-full object-cover'/>
                        <div className='p-4'>
                            <div className='text-xs text-blue-600 font-bold mb-2'>"BUY 1@RS""550"

                            </div>
                            <h3 text-lg font-bold>Standard Visiting Cards</h3>

                        </div>

                    </div>
                </div>

            </div>
            

        </div>
    </>
    
  );
};

export default AllProduct;
