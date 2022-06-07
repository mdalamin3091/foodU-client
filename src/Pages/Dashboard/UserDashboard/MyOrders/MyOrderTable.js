import React from 'react'

const MyOrderTable = () => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-left text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Order time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-[18px]'>
                        <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                May 31, 2022
                            </td>
                            <td className="px-6 py-4">
                                Pending
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MyOrderTable