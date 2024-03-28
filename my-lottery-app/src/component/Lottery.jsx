import React, { useState } from 'react';

function Lottery() {
    const [names, setNames] = useState([]);
    const [inputName, setInputName] = useState('');
    const [currentName, setCurrentName] = useState('');

    const handleInputChange = (e) => {
        setInputName(e.target.value);
    };

    const addName = (event) => {
        event.preventDefault(); // 阻止表单默认提交事件
        if (inputName.trim() !== '') {
            setNames([...names, inputName]);
            setInputName(''); // 清空输入框
        }
    };

    const drawName = () => {
        if (names.length > 0) {
            const index = Math.floor(Math.random() * names.length);
            setCurrentName(names[index]);
            setNames(names.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            <form onSubmit={addName}>
                <input
                    type="text"
                    value={inputName}
                    onChange={handleInputChange}
                    placeholder="Enter an item name"
                />
                <button type="submit">Add Item</button>
            </form>
            <button onClick={drawName}>Draw Item</button>
            <div>Currently Drawn Item: {currentName}</div>
            <div>Remaining Items: </div>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Lottery;
