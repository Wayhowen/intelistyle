import React, {useEffect, useState} from "react";

export function Filter() {
    const [searchQuery, setSearchQuery] = useState('');

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8081/brands');
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    // todo: add delay
    const searchQueryHandler = (input: string) => {
        setSearchQuery(input)
    }

    return (
        <div className="flex flex-col justify-center items-center basis-1/6 border-r border-gray-500/50 rounded-full">
            <div className="flex flex-col basis-1/2 justify-center items-center">
                <h4 className="font-bold">Filter</h4>
                <input type="text" value={searchQuery} placeholder={"Search.."}
                       onChange={(e) => searchQueryHandler(e.target.value)}/>
                <h2>Brand</h2>
                <Dropdown options={data || []}/>
                <h2>Price</h2>
                <h2>Discounted</h2>
                <h2>Sex</h2>
                <Dropdown options={["Male", "Female"]}/>
                <h2>Categories</h2>

            </div>
            <div className="flex flex-col basis-1/2 justify-center items-center">
                Sort by

                discount

            </div>
        </div>
    );
}

interface DropdownProps {
    options: string[];
}
const Dropdown = (props: DropdownProps) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <select value={selectedOption} onChange={event => handleDropdownChange(event.target.value)}>
            {props.options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;