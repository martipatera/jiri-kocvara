"use client";

import { Table } from "flowbite-react";
import VzdelaniData from "../data/VzdelaniData";
import { useState } from "react";

function VzdelaniList() {
    const { Short, Long } = VzdelaniData;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="overflow-x-auto w-full max-w-full lg:h-[650px] xl:w-1/2 pt-10 lg:pt-0 2xl:pt-0 px-3 md:px-5 ">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className="bg-gray-100 font-bold text-gray-800 text-sm sm:text-base md:text-base">
                        Kurzy
                    </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                    {(isExpanded ? Long : Short).map((data, index) => (
                        <Table.Row key={index} className="bg-white even:bg-gray-200">
                            <Table.Cell className="font-medium text-gray-900 text-xs sm:text-sm md:sm xl:text-base">
                                {data}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                    <tr>
                        <td colSpan="1" className="text-center">
                            <button
                                onClick={toggleText}
                                className="underline text-blue-600 text-xs sm:text-sm md:text-base"
                            >
                                {!isExpanded ? "Zobrazit více (19 řádků)" : "Zobrazit méně"}
                            </button>
                        </td>
                    </tr>
                </Table.Body>
            </Table>
        </div>
    );
}

export default VzdelaniList;
