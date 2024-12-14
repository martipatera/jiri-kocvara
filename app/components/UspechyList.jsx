"use client";

import { Table } from "flowbite-react";
import uspechy from "../data/uspechyData";

function UspechyList() {
    

    return (
        <div className="overflow-x-auto w-full max-w-full lg:h-[650px] xl:w-1/2 2xl:pt-0 lg:ml-5 lg:pt-9 pb-7">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className="bg-gray-100 font-bold text-gray-800 text-sm sm:text-base md:text-base">
                        Nejvýznamější úspěchy mé dosavadní kulturistické kariéry:
                    </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                    {uspechy.map((data, index) => (
                        <Table.Row key={index} className="bg-white even:bg-gray-200">
                            <Table.Cell className="font-medium text-gray-900 text-xs sm:text-sm md:sm xl:text-base">
                                {data}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                    
                </Table.Body>
            </Table>
        </div>
    );
}

export default UspechyList;
